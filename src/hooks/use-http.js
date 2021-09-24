import { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (requestConfig, applyData) => {
    setIsLoading(true);
    setError();
    try {
      const requestOptions = {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      };
      const response = await fetch(requestConfig.url, requestOptions);
      if (!response.ok) {
        throw new Error("request failed");
      }
      const data = await response.json();
      console.log(response);
      console.log(data);

      applyData(data);
    } catch (err) {
      setError(err.message || "something went wrong");
    }

    setIsLoading(false);
  };

  return { isLoading, error, sendRequest };
};

export default useHttp;
