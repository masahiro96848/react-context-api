import React from 'react'

function App() {
    return (
        <div className="App">
            <h1>Todo List</h1>

            <form autoComplete="off">
                <input
                    type="text"
                    name="todos"
                    id="todos"
                    required
                    placeholder="what needs to be done?"
                />
                <button type="submit">Create</button>
            </form>

            <ul>
                <li>
                    <label htmlFor="">
                        <input type="checkbox" id="" />
                        Cooking Todo
                    </label>
                    <button>Edit</button>
                </li>
                <li>
                    <label htmlFor="">
                        <input type="checkbox" id="" />
                        Cooking Todo
                    </label>
                    <button>Edit</button>
                </li>
            </ul>

            <div className="row">
                <label htmlFor="all">
                    <input type="checkbox" name="all" id="" />
                    ALL
                </label>
                <p>You have 0 todo</p>
                <button id="delete">Delete</button>
            </div>
        </div>
    )
}

export default App
