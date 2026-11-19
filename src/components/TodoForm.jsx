import { useState } from "react";

function TodoForm({setTodos}) {
    const [title, setTitle] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (title.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false
        };

        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setTitle("");
    }

    return (
        <form className="todoform" onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle (e.target.value)} placeholder="Masukkan tugas baru" />
            <button type="submit">Tambah</button>
        </form>
    );
}

export default TodoForm;