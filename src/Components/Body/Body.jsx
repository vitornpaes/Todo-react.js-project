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
  const id = String(new Date().getTime());

  function TaskCompletion(id) {
    if (completedTasks.includes(id)) {
      setCompletedTasks(completedTasks.filter((taskId) => taskId !== id));
    } else {
      setCompletedTasks([...completedTasks, id]);
    }
  }

  function handleCreateNewList(event) {
    event.preventDefault();
    setLists([...lists, { id: id, label: newList }]);
    setNewList("");
    setTaskCountCreated(taskCountCreated + 1);
  }

  function handleNewCommentChange(event) {
    setNewList(event.target.value);
  }

  function deleteList(id) {
    const contentWithoutDeleted = lists.filter((list) => list.id !== id);
    const updatedCompletedTasks = completedTasks.filter(
      (taskId) => taskId !== id
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
        <input type="submit" value="Criar +" disabled={isNewListEmpty} />
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
        {lists.map((list) => {
          return (
            <List
              key={list.id}
              checked={completedTasks.includes(list.id)}
              content={list.label}
              deleteList={() => deleteList(list.id)}
              onTaskComplete={() => TaskCompletion(list.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
