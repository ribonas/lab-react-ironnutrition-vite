import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchForm from './components/SearchForm';


function App() {
  const [foodList, setFoodList] = useState(foods);

  const handleSearch = (query) => {
    const filteredFoods = foods.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFoodList(filteredFoods);
  };

  const handleAddFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  };

  return (
    <div className="App">
      <h1>Iron Nutrition</h1>
      <SearchForm handleSearch={handleSearch} />
      <AddFoodForm handleAddFood={handleAddFood} />
      <div className="food-list">
        {foodList.map((food, index) => (
          <FoodBox key={index} food={food} />
        ))}
      </div>
    </div>
  );
}

export default App;