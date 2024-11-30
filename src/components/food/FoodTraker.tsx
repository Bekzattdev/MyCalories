import { useState } from "react";

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
    <div>
      <h1>Трекер питания</h1>
      <div>
        <label>
          Название продукта:
          <input
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Калории на 100 г:
          <input
            type="number"
            value={caloriesPer100g}
            onChange={(e) =>
              setCaloriesPer100g(
                e.target.value === "" ? "" : Number(e.target.value)
              )
            }
          />
        </label>
      </div>
      <div>
        <label>
          Количество (г):
          <input
            type="number"
            value={quantity}
            onChange={(e) =>
              setQuantity(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
        </label>
      </div>
      <button onClick={addFood}>Добавить продукт</button>
      <h2>Список продуктов:</h2>
      <ul>
        {foodList.map((food, index) => (
          <li key={index}>
            {food.name}: {food.calories.toFixed(2)} ккал ({food.quantity} г)
          </li>
        ))}
      </ul>
      <h3>Общее потребление калорий: {totalCalories.toFixed(2)} ккал</h3>
    </div>
  );
};

export default FoodTracker;
