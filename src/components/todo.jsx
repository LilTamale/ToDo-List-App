import React from 'react'

import {BsFillTrashFill} from 'react-icons/bs'
const style = {
    li:`flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liComplete:`flex justify-between bg-slate-400 p-4 my-2 capitalize`,
    row: `flex`,
    text:`ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`
}

export const Todo = ({todo, toggleComplete}) => {

  return (
    <li className={todo.completed ? style.liComplete : style.li}>
        <div className={style.row}>
            <input onChange = {() => toggleComplete(todo)} type="checkbox" checked = {todo.completed ? 'checkled' : ''} />
            <p onClick ={() => toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>{todo.text}</p>
        </div>
        <button><BsFillTrashFill/></button>


    </li>
  )
}
