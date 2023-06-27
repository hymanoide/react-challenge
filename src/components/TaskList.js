import Task from "./Task";


export default function TaskList(props) {

    // eslint-disable-next-line array-callback-return
    const taskList = props.tasks.map((task) => {
        if (task?.name) {
            return (<Task
                id={task.id}
                name={task.name}
                status={task.status}
                key={task.id}
                changeTaskStatus={props.changeTaskStatus}

            />)
        }

    });

    return (
        <>
            <div className="task-list">
                {taskList}
            </div>
            <button type="button" className="btn" onClick={props.removeTask} >
                Remove completed
            </button>
        </>

    );

}
