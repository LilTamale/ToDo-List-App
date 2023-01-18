import React, {useState, useEffect} from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
import { Todo } from './components/todo'
import {db} from './firebase'
import {query, collection, QuerySnapshot, onSnapshot, updateDoc, doc} from 'firebase/firestore'


const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#F280ED] to-[#512889]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form:  `flex justify-between`,
  input: `border p-2 w-full text-xl rounded-lg`,
  button:`border p-4 ml-2 bg-blue-400 text-slate-100 rounded-lg`,
  count: ``
}

function App() {

  const [todos,setTodos] = useState([]);

// Create todo


// Read todo from firebase
useEffect(() => {
  const  q = query(collection (db, 'todos'))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let todosArr = []
    querySnapshot.forEach((doc) => {
      todosArr.push({...doc.data(), id: doc.id})
    });
    setTodos(todosArr) //returns todosArr from DB in firebase
  })
  return () => unsubscribe() //Updates lists
}, [])
// Update todo in firebase
const toggleComplete = async (todo) => {
  await updateDoc(doc(db, 'todos', 'todo.id'), {
    completed: !todo.completed
  });
};
// Delete todo

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>To-Do App</h3>
        <form className={style.form}>
          <input type="text" placeholder='Add To-Do' className={style.input} />
          <button className={style.button}>< AiFillPlusCircle size={30}/></button>
        </form>
        <ul>
          <li>
            {todos.map((todo, index) => (
              <Todo key={index} todo={todo} toggleComplete = {toggleComplete} />
            ))}
          </li>
        </ul>
        <p className={style.count}>You Have 2 todos</p>
      </div>
         
    </div>
  );
}

export default App;
