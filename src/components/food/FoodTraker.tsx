import { useState } from "react";
import scss from "./Food.module.scss";
const FoodTracker = () => {
  const [foodName, setFoodName] = useState("");
  const [caloriesPer100g, setCaloriesPer100g] = useState<number | "">("");
  const [quantity, setQuantity] = useState<number | "">("");
  const [foodList, setFoodList] = useState<
    { name: string; calories: number; quantity: number }[]
  >([]);

  const addFood = () => {
    if (!foodName || !caloriesPer100g || !quantity) {
      alert("Заполните все поля!");
      return;
    }

    const calories = (caloriesPer100g * quantity) / 100;
    const newFood = { name: foodName, calories, quantity };
    setFoodList([...foodList, newFood]);
    setFoodName("");
    setCaloriesPer100g("");
    setQuantity("");
  };
  const totalCalories = foodList.reduce((sum, food) => sum + food.calories, 0);

  return (
    <div className={scss.FoodTracker}>
      <h1>Трекер питания</h1>
      <div className={scss.product}>
        <input
          type="text"
          value={foodName}
          placeholder="Название продукта:"
          onChange={(e) => setFoodName(e.target.value)}
        />
      </div>
      <div className={scss.product}>
        <input
          type="text"
          value={caloriesPer100g}
          placeholder="Калории на 100 г:"
          onChange={(e) =>
            setCaloriesPer100g(
              e.target.value === "" ? "" : Number(e.target.value)
            )
          }
        />
      </div>
      <div className={scss.product}>
        <input
          type="text"
          value={quantity}
          placeholder="Количество (г):"
          onChange={(e) =>
            setQuantity(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </div>
      <button onClick={addFood}>Добавить продукт</button>
      <h2>Список продуктов:</h2>
      <p>
        {foodList.map((food, index) => (
          <ol key={index}>
            {food.name}: {food.calories.toFixed(2)} ккал ({food.quantity} г)
          </ol>
        ))}
      </p>
      <h3>Общее потребление калорий: {totalCalories.toFixed(2)} ккал</h3>
    </div>
  );
};

export default FoodTracker;
