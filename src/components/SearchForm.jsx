import { Input } from 'antd';
import { useState } from 'react';

const { Search } = Input;

function FoodSearch(props) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    props.handleSearch(query);
  };

  return (
    <Search
      placeholder="Search foods"
      value={query}
      onChange={handleInputChange}
      onSearch={handleSearch}
      enterButton
    />
  );
}

export default FoodSearch;