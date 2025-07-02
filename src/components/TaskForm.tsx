import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import styles from "./TaskForm.module.css";
import { ITask } from "../interfaces/Task";

interface TaskFormProps {
  btnText: string;
  taskList?: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?: (id: number, title: string, difficulty: number) => void;
}

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: TaskFormProps) => {
  
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (handleUpdate && task) {
      handleUpdate(id, title, difficulty);
      return;
    }

    if (setTaskList && taskList) {
      const newTask: ITask = {
        id: Math.floor(Math.random() * 1000),
        title,
        difficulty,
      };

      setTaskList([...taskList, newTask]);
      setTitle("");
      setDifficulty(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "title") {
      setTitle(value);
    } else if (name === "difficulty") {
      setDifficulty(Number(value));
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Título da tarefa"
          value={title}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="number"
          name="difficulty"
          id="difficulty"
          placeholder="Nível de dificuldade"
          value={difficulty}
          onChange={handleChange}
          required
          min={0}
        />
      </div>

      <input type="submit" value={btnText} className={styles.submitBtn} />
    </form>
  );
};

export default TaskForm;
