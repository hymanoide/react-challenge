
import './App.scss';
import {useState} from "react";
import Header from "./components/Header";
import TaskCreationForm from "./components/TaskCreationForm";
import TaskList from "./components/TaskList";


export default function App(props) {

    const [tasks, setTasks] = useState(props.tasks);



    function addTask(name) {
        let newId = (tasks.length > 0 ? tasks.length + 1 : 1)
        const newTask = { id: newId, name, status: "in progress" };
        setTasks([...tasks, newTask]);
    }

    function removeCompletedTask() {
        const updatedTasks = tasks.filter(task => task.status !== "completed");
        setTasks(updatedTasks);
    }


    function changeTaskStatus(newStatus) {
        const updatedTasks = tasks.map(task => {
            if (task.name === newStatus) {
                switch (task.status) {
                    case "completed":
                        return { ...task, status: "in progress" };
                    case "in progress":
                        return { ...task, status: "completed" };
                    default:
                        return task;
                }
            }
            return task;
        });

        setTasks(updatedTasks);
    }



    return (
        <div className="app-layout">
            <Header/>
            <TaskCreationForm addTask={addTask} />
            <TaskList tasks={tasks} removeTask={removeCompletedTask} changeTaskStatus={changeTaskStatus}/>
        </div>
    );
}

