import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'
import styles from './app.module.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h2>Qual é a tarefa?</h2>
        <TaskForm btnText='Criar tarefa'/>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
