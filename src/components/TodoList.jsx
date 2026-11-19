function TodoList({todos, toggleTodo, deleteTodo}) {
    return (
        <div className="todolist">
            <h2>Daftar tugas</h2>
            {todos.map((todo) => (
                <div key={todo.id} className="tugas">
                    <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>
                        {todo.title}
                    </span>

                    <div className="tugas-actions">
                        <button onClick={() => toggleTodo(todo.id)} className="selesai-btn">
                            {todo.completed ? "Batal" : "Selesai"}
                        </button>
                        <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                            Hapus
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TodoList;