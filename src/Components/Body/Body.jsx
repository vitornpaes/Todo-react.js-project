import styles from "./Body.module.css";
import clip from "../../../public/Clipboard.svg";
import { List } from "./List";

export function Body() {
  return (
    <div className={styles.bodyWrapper}>
      <form className={styles.form}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <input type="button" value="Criar +" />
      </form>
      <div className={styles.taskCountRow}>
        <div className={styles.taskCount}>
          <h5 className={styles.titleBlue}>Tarefas criadas</h5>
          <span className={styles.taskCountNumber}>0</span>
        </div>
        <div className={styles.taskCount}>
          <h5 className={styles.titlePurple}>Concluidas</h5>
          <span className={styles.taskCountNumber}>0</span>
        </div>
      </div>
      <div className={styles.taskArea}>
        <img src={clip} width="56px" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>CrieTarefas e organize seus itens a fazer</p>
      </div>
      <List />
    </div>
  );
}
