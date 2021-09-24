import Card from "../UI/Card";
import MealItem from "./MealItem";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const transformedData = [];
  const [availableMeal, setAvailableMeal] = useState([]);
  const { isLoading, error, sendRequest: getMeals } = useHttp();

  useEffect(() => {
    getMeals(
      {
        url: "https://myreactapp-14003-default-rtdb.asia-southeast1.firebasedatabase.app/availableMeals.json",
      },
      (data) => { 
        for (const key in data) {
          console.log(data[key]);
          transformedData.push({
            id: data[key].id,
            meal: data[key].meal,
            description: data[key].description,
            price:data[key].price,
          });

          setAvailableMeal(transformedData)

        }
      }
    );
  }, []);

  const mealsList = availableMeal.map((meal) => (
    <MealItem key={meal.id} data={meal} />
  ));

  return (
    <Card>
      <section>
        <ul>{mealsList}</ul>
      </section>
    </Card>
  );
};

export default AvailableMeals;
