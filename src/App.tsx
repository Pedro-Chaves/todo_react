import React, { useState } from 'react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

// CSS
import styles from './App.module.css';

// Interfaces
import { ITask } from './interfaces/Task';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<ITask | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDeleteTask = (id: number) => {
    setTaskList(taskList.filter(task => task.id !== id));
  };

  const openEditModal = (task: ITask) => {
    setTaskToEdit(task);
    setIsModalVisible(true);
  };

  const handleUpdateTask = (id: number, title: string, difficulty: number) => {
    const updatedTasks = taskList.map(task =>
      task.id === id ? { id, title, difficulty } : task
    );

    setTaskList(updatedTasks);
    setIsModalVisible(false);
  };

  return (
    <div>
      <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
        <TaskForm
          btnText="Editar tarefa"
          taskList={taskList}
          task={taskToEdit}
          handleUpdate={handleUpdateTask}
        />
      </Modal>


      <Header />

      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar tarefa" taskList={taskList} setTaskList={setTaskList} />
        </div>

        <br />

        <div>
          <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={handleDeleteTask}
            handleEdit={openEditModal}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
