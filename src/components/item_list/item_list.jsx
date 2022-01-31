import React from "react";
import Item from "../item/item";
import styles from "./item_list.module.css";
const ItemList = (props) => {
  return (
    <div className={styles.container}>
      <Item />
    </div>
  );
};

export default ItemList;
