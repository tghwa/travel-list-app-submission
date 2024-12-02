function Item({ packingItem, onDeleteItem, onUpdateItem }) {
    return (
      <li>
        <input type="checkbox" checked={packingItem.packed} onChange={() => onUpdateItem(packingItem.id)} />
        <span style={{ textDecoration: packingItem.packed ? "line-through" : "none" }}>
          {packingItem.description} ({packingItem.quantity})
        </span>
        <button onClick={() => onDeleteItem(packingItem.id)}>❌</button>
      </li>
    );
  }


export default Item;