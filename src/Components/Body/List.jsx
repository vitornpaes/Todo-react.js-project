import styles from "./List.module.css";
import { Trash } from "phosphor-react";

export function List() {
  return (
    <div className={styles.listWrapper}>
      <ul>
        <li>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" />
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            molestias, nulla non hic molestiae odit, tenetur distinctio magnam
            numquam culpa ipsam! Explicabo veniam itaque delectus ex sapiente
            non molestiae nisi.
          </span>
        </li>
        <button>
          <Trash size={24} className={styles.trash} />
        </button>
      </ul>
    </div>
  );
}
