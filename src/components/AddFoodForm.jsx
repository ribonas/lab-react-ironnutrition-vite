import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleCaloriesChange = (event) => {
    setCalories(event.target.value);
  };

  const handleServingsChange = (event) => {
    setServings(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = { name, image, calories, servings };
    props.onSubmit(newFood);
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        <Input
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </Form.Item>
      <Form.Item>
        <Input
          placeholder="Image URL"
          value={image}
          onChange={handleImageChange}
          required
        />
      </Form.Item>
      <Form.Item>
        <Input
          placeholder="Calories"
          type="number"
          value={calories}
          onChange={handleCaloriesChange}
          required
        />
      </Form.Item>
      <Form.Item>
        <Input
          placeholder="Servings"
          type="number"
          value={servings}
          onChange={handleServingsChange}
          required
        />
      </Form.Item>
      <Button type="primary" htmlType="submit">Create</Button>
    </Form>
  );
}

export default AddFoodForm;
