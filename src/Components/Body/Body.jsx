import styles from "./Body.module.css";
import clip from "../../../public/Clipboard.svg";
import { List } from "./List";
import { useState } from "react";

export function Body() {
  const [lists, setLists] = useState([]);
  const [newList, setNewList] = useState("");
  const [taskCountCreated, setTaskCountCreated] = useState(0);
  const [completedTasks, setCompletedTasks] = useState([]);
  const isNewListEmpty = newList.length === 0;

  function TaskCompletion(index) {
    if (completedTasks.includes(index)) {
      setCompletedTasks(
        completedTasks.filter((taskIndex) => taskIndex !== index)
      );
    } else {
      setCompletedTasks([...completedTasks, index]);
    }
  }

  function handleCreateNewList(event) {
    event.preventDefault();
    setLists([...lists, newList]);
    setNewList("");
    setTaskCountCreated(taskCountCreated + 1);
  }

  function handleNewCommentChange(event) {
    setNewList(event.target.value);
  }

  function deleteList(index) {
    const contentWithoutDeleted = lists.filter((_, idx) => idx !== index);
    const updatedCompletedTasks = completedTasks.filter(
      (taskIndex) => taskIndex !== index
    );

    setLists(contentWithoutDeleted);
    setCompletedTasks(updatedCompletedTasks);
    setTaskCountCreated(taskCountCreated - 1);
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
        <input type="submit" value="Criar +" disabled={isNewListEmpty}/>
      </form>
      <div className={styles.taskCountRow}>
        <div className={styles.taskCount}>
          <h5 className={styles.titleBlue}>Tarefas criadas</h5>
          <span className={styles.taskCountNumber}>{taskCountCreated}</span>
        </div>
        <div className={styles.taskCount}>
          <h5 className={styles.titlePurple}>Concluidas </h5>
          <span className={styles.taskCountCompleted}>
            {completedTasks.length === 0 && taskCountCreated === 0
              ? "0"
              : `${completedTasks.length} de ${taskCountCreated}`}
          </span>
        </div>
      </div>
      {lists.length === 0 && (
        <div className={styles.taskArea}>
          <img src={clip} width="56px" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>CrieTarefas e organize seus itens a fazer</p>
        </div>
      )}
      <div className="">
        {lists.map((list, index) => {
          return (
            <List
              key={index}
              checked={completedTasks.includes(index)}
              content={list}
              deleteList={() => deleteList(index)}
              onTaskComplete={() => TaskCompletion(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
