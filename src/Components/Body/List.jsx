import styles from "./List.module.css";
import { Trash } from "phosphor-react";
import PropTypes from 'prop-types';

export function List({content}) {
  return (
    <div className={styles.listWrapper}>
      <ul>
        <li>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" />
          <span>
            <p>{content}</p>
          </span>
        </li>
        <button>
          <Trash size={24} className={styles.trash} />
        </button>
      </ul>
    </div>
  );
}

List.propTypes = {
  content: PropTypes.string.isRequired,
};