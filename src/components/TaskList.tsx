import React from "react";
import styles from "./TaskList.module.css";
import { ITask } from "../interfaces/Task";

interface TaskListProps {
  taskList: ITask[];
  handleDelete: (id: number) => void;
  handleEdit: (task: ITask) => void;
}

const TaskList = ({ taskList, handleDelete, handleEdit }: TaskListProps) => {
  if (taskList.length === 0) {
    return <p>Não há tarefas cadastradas.</p>;
  }

  return (
    <>
      {taskList.map((task) => (
        <div key={task.id} className={styles.task}>
          <div className={styles.details}>
            <h4 className={styles.title}>{task.title}</h4>
            <p>Dificuldade: {task.difficulty}</p>
          </div>

          <div className={styles.actions}>
            <button
              className={styles.actionBtn}
              onClick={() => handleEdit(task)}
              title="Editar tarefa"
            >
              <i className="bi bi-pencil"></i>
            </button>

            <button
              className={styles.actionBtn}
              onClick={() => handleDelete(task.id)}
              title="Excluir tarefa"
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TaskList;
