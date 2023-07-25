import styles from "./Body.module.css";
import clip from "../../../public/Clipboard.svg";
import { List } from "./List";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function generateRandomId() {
  return uuidv4;
}

export function Body() {
  const [lists, setList] = useState([]);
  const [newList, setNewList] = useState("");

  function handleCreateNewList(event) {
    event.preventDefault();
    setList([...lists, newList]);
    setNewList(""); 
  }

  function handleNewCommentChange(event) {
    setNewList(event.target.value); 
  }

  return (
    <div className={styles.bodyWrapper}>
      <form
        onSubmit={handleCreateNewList}
        onChange={handleNewCommentChange}
        className={styles.form}
      >
        <input
          type="text"
          name="list"
          value={newList}
          onChange={(e) => setNewList(e.target.value)}
          placeholder="Adicione uma nova tarefa"
        />
        <input type="submit" value="Criar +" />
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
      <div className="">
        {lists.map((list, index) => {
          return <List key={generateRandomId() + index} checked={false} content={list} />;
        })}
      </div>
    </div>
  );
}
