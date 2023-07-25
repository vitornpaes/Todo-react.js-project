import styles from "./List.module.css";
import { Trash } from "phosphor-react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

function generateRandomId() {
  return uuidv4();
}

export function List({ content, deleteComment }) {
  const inputId = generateRandomId();

  const handleDeleteList = () => {
    deleteComment(content);
  };

  return (
    <div className={styles.listWrapper}>
      <ul>
        <li>
          <input type="checkbox" id={inputId} name="checkbox" />
          <label htmlFor={inputId} />
          <span>
            <p>{content}</p>
          </span>
        </li>
        <button onClick={handleDeleteList}>
          <Trash size={24} className={styles.trash} />
        </button>
      </ul>
    </div>
  );
}

List.propTypes = {
  content: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
};
