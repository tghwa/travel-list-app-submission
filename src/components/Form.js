import React, { useState } from "react";

function Form({ onAddItem }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(event) {
      event.preventDefault();
  
      if (!description) return;
  
      const newItem = {
        id: Date.now(),
        description,
        quantity,
        packed: false,
      };
  
      onAddItem(newItem);
      setDescription("");
      setQuantity(1);
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need to pack?</h3>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
  
        <input
          type="text"
          placeholder="Enter an item"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
  
        <button>ADD</button>
      </form>
    );
  }

export default Form;