import Card from "../UI/Card";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "1",
    meal: "Capucino",
    description: "nice Espresso shot with milk and Choco powder",
    price: "120",
  },
  {
    id: "2",
    meal: "Vanilla Latte",
    description: "warm reminiscent of vanilla milk with Espresso shot",
    price: "120",
  },
  {
    id: "2",
    meal: "Americano",
    description: "light hot dark taste of coffee",
    price: "100",
  },
  {
    id: "4",
    meal: "Caramel Macchiato",
    description: "caramel sauce with special macchiato coffee",
    price: "150",
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem data={meal} />);

  return (
    <Card>
      <section>
        <ul>{mealsList}</ul>
      </section>
    </Card>
  );
};

export default AvailableMeals;
