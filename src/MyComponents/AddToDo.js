import React, { useState } from 'react'

const AddToDo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();

        if (!title || !desc) {
            alert("Title or Description can't be blank");
            return;
        }

        // Send data to Parent (App.js)
        props.addToDo(title, desc);

        // Clear fields
        setTitle("");
        setDesc("");
    }

    return (
        <div className="container my-3">
            <h3>Add To Do Task</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        To Do Task
                    </label>

                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        id="title"
                    />

                    <label htmlFor="desc" className="form-label mt-2">
                        Task Description
                    </label>

                    <input
                        type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="form-control"
                        id="desc"
                    />
                </div>

                <button type="submit" className="btn btn-sm btn-success">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddToDo;
