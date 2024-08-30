import { useEffect, useState } from "react";
import React from "react";
import styles from "./styles.module.css";

function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addItem() {
    setItems([...items, inputValue]);
    setInputValue("");
  }

  function deleteItem(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  useEffect(() => {
    console.log("Компонент ListItems обновлен");
  }, [items]);

  return (
    <div className={styles.list_container}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.list_input}
      />
      <button onClick={addItem} className={styles.list_button}>
        Добавить элемент
      </button>
      <ul className={styles.list_items}>
        {items.map((item, index) => (
          <li key={index} className={styles.list_item}>
            {item}
            <button
              className={styles.delete_button}
              onClick={() => deleteItem(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItems;
