import { useState } from "react";

const CaloriesCalculator = () => {
  const [age, setAge] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [gender, setGender] = useState<"male" | "female">();
  const [activity, setActivity] = useState(1.2);
  const [calories, setCalories] = useState<string | null>(null);

  const calculateCalories = () => {
    if (!age || !weight || !height) {
      setCalories(null);
      return;
    }

    let bmr: number;

    if (gender === "male") {
      bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
    } else {
      bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
    }

    const dailyCalories = bmr * activity;
    setCalories(dailyCalories.toFixed(2));
  };

  return (
    <div>
      <h1>Калькулятор суточной нормы калорий</h1>
      <div>
        <label>
          Возраст (лет):
          <input
            type="number"
            value={age}
            onChange={(e) =>
              setAge(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
        </label>
      </div>
      <div>
        <label>
          Вес (кг):
          <input
            type="number"
            value={weight}
            onChange={(e) =>
              setWeight(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
        </label>
      </div>
      <div>
        <label>
          Рост (см):
          <input
            type="number"
            value={height}
            onChange={(e) =>
              setHeight(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
        </label>
      </div>
      <div>
        <label>
          Пол:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value as "male" | "female")}
          >
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Уровень физической активности:
          <select
            value={activity}
            onChange={(e) => setActivity(Number(e.target.value))}
          >
            <option value={1.2}>Минимальная активность</option>
            <option value={1.375}>
              Лёгкая активность (тренировки 1-3 раза в неделю)
            </option>
            <option value={1.55}>
              Умеренная активность (тренировки 3-5 раз в неделю)
            </option>
            <option value={1.725}>
              Высокая активность (тренировки 6-7 раз в неделю)
            </option>
            <option value={1.9}>
              Экстремальная активность (двойные тренировки)
            </option>
          </select>
        </label>
      </div>
      <button onClick={calculateCalories}>Рассчитать</button>
      {calories && (
        <div>
          <h2>Ваша суточная норма калорий: {calories} ккал</h2>
        </div>
      )}
    </div>
  );
};

export default CaloriesCalculator;