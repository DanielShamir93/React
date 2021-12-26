import { useState } from 'react';
import { AiFillCheckSquare, AiTwotoneCheckSquare } from 'react-icons/ai'

export default function Components182() {

    const [data, setData] = useState([
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
    ]);

    const toggleTaskStatus = (name) => {
        const cloneData = data.map((task) => {
            if (task.name === name) {
                task.completed = !task.completed;
            }
            return task;
        });
        setData(cloneData);
    }

    const renderTasks = () => {
        return (
            data.map((task) => {
                return (
                    <p key={task.name}>
                        <span style={task.completed ? { textDecoration: 'line-through'} : { textDecoration: 'none'}}>{task.name} </span>
                        <span onClick={() => {toggleTaskStatus(task.name)}}>{task.completed ? <AiFillCheckSquare /> : <AiTwotoneCheckSquare />}</span>
                    </p>
                );
            })
        );
    }

    return (
        <div>
            {renderTasks()}
        </div>
    )
}