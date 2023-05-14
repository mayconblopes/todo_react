interface Props {
  btnText: string
}

export default function TaskForm({ btnText }: Props) {
  return (
    <form>
      <div>
        <label htmlFor='title'>Título:</label>
        <input type='text' name='title' placeholder='Título da tarefa' />
      </div>
      <div>
        <label htmlFor='difficulty'>Dificuldade:</label>
        <input type='text' name='difficulty' placeholder='Título da tarefa' />
      </div>
      <input type='submit' value={btnText} />
    </form>
  )
}
