import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import Todolist from '../containers/Todolist'

const App = () => (
  <div>
    <AddTodo />
    <Todolist />
    <Footer />
  </div>
)

export default App