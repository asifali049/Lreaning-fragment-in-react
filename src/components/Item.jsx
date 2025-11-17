import styles from "./Item.module.css";
const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li
      className={`${styles["list-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["list-span"]}>{foodItem}</span>
      <button
        className={`${styles["buy-button"]} btn btn-outline-info`}
        onClick={handleBuyButton}
      >
        BUY
      </button>
    </li>
  );
};

export default Item;
