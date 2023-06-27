import React, { useState } from "react";


export default function TaskCreationForm(props) {

    const [name, setName] = useState("");

    function handleChange(e) {
        console.log(e.target.value)
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name)
        props.addTask(name);
        setName("");
    }

    return (
        <form onSubmit={handleSubmit} className={"creation-form"}>
            <input
                type="text"
                id="new-task-input"
                className="input-description"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
                placeholder={"Type your new task here"} // for testing

            />
            <button type="submit" className="btn">
                Add
            </button>
        </form>
    );

}


