import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [id, setId] = useState();
  const [search, setSearch] = useState('planets'); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${search}/${id}`); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="search">Search for</label>
        <select name="search" id="S" onChange={(e) => setSearch(e.target.value)}>
          <option value="planets">Planets</option>
          <option value="people">People</option>
        </select>
        <label htmlFor="id">ID</label>
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <input type="submit" value="Search" />
    </form>
  );
};

export default Form;
