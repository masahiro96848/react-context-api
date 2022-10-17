import React from 'react'
import FormInput from './components/FormInput'
import List from './components/List'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <h1>Todo List</h1>
            <FormInput />
            <List />
            <Footer />
        </div>
    )
}

export default App
