export default function Task(props) {
    return (
        <li className="task-item" onClick={ e =>  props.changeTaskStatus(props.name)}>
                <label className="task-label">
                    <span>
                        {props.name}
                    </span>
                </label>
                <label className="task-status">
                    status:
                    <br/>
                    <span className={"status"}>{props.status}</span>
                </label>

        </li>
    );

}
