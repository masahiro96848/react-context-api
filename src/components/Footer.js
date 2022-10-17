import React from 'react'

export default function Footer() {
    return (
        <div className="row">
            <label htmlFor="all">
                <input type="checkbox" name="all" id="" />
                ALL
            </label>
            <p>You have 0 todo</p>
            <button id="delete">Delete</button>
        </div>
    )
}
