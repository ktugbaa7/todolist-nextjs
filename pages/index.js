import Head from 'next/head'
import { useState } from 'react';


export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    e.preventDefault()
    setTodo(e.target.value)
  }
  const removeTodo = (todo) => {
    setTodos(todos.filter(t => t != todo))
  }
  
  return (
    <div className="container">

      <h1>To Do List</h1>
      <div className="input-text">
        <input className="input" value={todo} onChange={handleChange} placeholder=" Add a task..." />
        <button onClick={() => setTodos([...todos, todo])}>Add</button>
      </div>

      {todos.map((todo) => (
        <div className="inputbox">
          <div className="todot">
            <input type="checkbox" />
            <p>{todo}</p>
          </div>
          <div>
          
          </div>
          <div className="bars">
            <ul>
              <button>Pin on the top</button>
              <button>Add a memo</button>
              <button className="remove" onClick={() => removeTodo(todo)}>Delete</button>
            </ul>
          </div>

        </div>
      ))}


      <style jsx>{`
        .bars ul{
          display: none;

        }
        .container {
          width: 420px;
          height: 540px;
          background-color: #3C424A;
          border-radius: 5px;
        }
        .input-text{
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        .input{
          width:70%;
          line-height: 30px;
          background-color: #343A40;
          border: none;
          color: #EEEEEE;
          border-radius: 5px;
          border: 1px solid #2E3238;
        }
        h1{
          border-bottom: 1px solid #343940;
          color: #EEEEEE;
          display: flex;
          justify-content: center;
          font-size: 16px;
          padding: 7px 0 7px;
          font-weight: normal;
        }
        .inputbox{
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 80%;
          margin: auto;
          height: 40px;
        }
        .todot{
          display: flex;
          justify-content: center;
          align-items: center;
        }
        p{
          color: #EEEEEE;
          margin-left: 5px;
        }
        .remove{
          width: 50px;
          height: 20px;
          background-color: #484F59;
          border: #383D45;
          color: #A9B1BA;
        }
        input[type="checkbox"]{
          appearance: none;
          height: 17px;
          width: 17px;
          background-color: #484F59;
          border: 1px solid #2E3238;
          border-radius: 2px;
          cursor: pointer;
        }
        .bars{
          
          text-align: center;
        }
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        body{
          background-color: #F06292;
          position: relative;
          width: 100%;
          height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
