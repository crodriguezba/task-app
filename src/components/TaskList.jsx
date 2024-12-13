import { useState } from "react";
import { TaskCard } from "./TaskCard";
import "./TaskList.css"

export const TaskList = () => {
    //logica
    const [tasks, setTasks] = useState([
        {
            id:111,
            name: 'Ir al mercadona',
            completed: true
        },
        {
            id:222,
            name: 'Curso React viernes',
            completed: false
        },
        {
            id:333,
            name: 'Descansar viernes',
            completed: true
        },
        {
            id:44,
            name: 'Bajar al perro',
            completed: false
        }
    ]);

    const [show, setShow] = useState(true);

    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <section className="tasklist">
            <ul>
                <div className="header">
                    <h1>TaskList</h1>
                    <button className="trigger" onClick={() => setShow(!show)}>
                        { show ? 'Hide tasks' : 'Show tasks' }
                    </button>
                </div>
                {
                    show && tasks.map(task => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            handleDelete={handleDelete} />
                    ))
                }
            </ul>
        </section>
    )
}