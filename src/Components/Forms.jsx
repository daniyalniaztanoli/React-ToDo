import React, { useEffect, useState } from 'react'
import '../App.css'
export const Forms = () => {
    const [todo, settodo] = useState([])
    const [newtitle, setnewtitle] = useState("")
    const [newdescription, setnewdescription] = useState("")
    const [completetodo, setcompletetodo] = useState([])

    const delete_handle = (index) =>{
        let reducedTodo = [...todo]
        reducedTodo.splice(index,1);
        localStorage.setItem("todolist", JSON.stringify (reducedTodo));
        settodo(reducedTodo)
    }
    const edit_handle = (index) => {
        const currentTodo = todo[index];
        const editedTitle = prompt('Edit title:', currentTodo.title);
        const editedDescription = prompt('Edit description:', currentTodo.description);

        if (editedTitle !== null && editedDescription !== null) {
            let updatedTodo = [...todo];
            updatedTodo[index] = { ...currentTodo, title: editedTitle, description: editedDescription };
            localStorage.setItem("todolist", JSON.stringify(updatedTodo));
            settodo(updatedTodo);
        }
    }
    
    
    
    const Store_Handle_Value = () => {
        if (!newtitle.trim() || !newdescription.trim()) {
            alert("Please fill in both title and description.");
        }
        else {
            let newtodoitem = {
                title: newtitle,
                description: newdescription,
            };
            let updatedTodo = [...todo];
            updatedTodo.push(newtodoitem);
            settodo(updatedTodo);
            localStorage.setItem("todolist", JSON.stringify(updatedTodo));
            
            setnewtitle("");
            setnewdescription("");
        }
    };    
    useEffect(() => {
            let savetodo = JSON.parse(localStorage.getItem("todolist"));
            if (savetodo) {
                settodo(savetodo);
            }
            },[]);
    
  return (
    <div className=''>
    <div className='md:flex md:justify-center mx-10 mt-5 md:mx-0 md:mt-10 space-y-2 md:space-y-0 md:space-x-2'>
        <div className='flex flex-col'>
            <label className='md:text-2xl text-white'>Title : </label>
            <input type="text" value={newtitle}  onChange={(e)=>setnewtitle(e.target.value)} placeholder='Enter Your Title Task.....' className='md:py-3 md:pe-10 md:ps-4 p-1 rounded focus:outline-2 focus:outline-cyan-500' />
        </div>
        <div className='flex flex-col'>
        <label className='md:text-2xl text-white'>Description : </label>
            <input type="text" value={newdescription} onChange={(e)=>setnewdescription(e.target.value)} placeholder='Enter Your Description Task.....' className='md:py-3 md:pe-10 md:ps-4 p-1 text-left rounded focus:outline-2  focus:outline-cyan-500'/>
        </div>
        <div className='flex md:mt-7 justify-center'>
            <button type='button' onClick={Store_Handle_Value} className='md:py-3 md:px-6 md:mt-7 px-10 py-1 bg-cyan-400 rounded-xl hover:bg-cyan-500 text-white'>Add</button>
        </div>
    </div>
    <div className='md:my-10 w-[60%] mx-auto hidden md:block'>
        <hr/>
        </div>
    
    
        {
    todo.map((item, index) => {
        return (
            <div key={index} className='flex justify-between mx-auto px-3 mt-4 border-b w-[80%]'>
                <div className='w-[80%] mt-3 rounded text-white'>
                    <ul>
                        <li>
                            <h1 className='text-cyan-400 md:text-3xl'>{item.title}</h1>
                        </li>
                        <li>
                            <p>{item.description}</p>
                        </li>
                    </ul>
                </div>
                <div className='flex space-x-2 mt-5 cursor-pointer'>
                    <i onClick={() => delete_handle(index)} className="fa-solid fa-trash text-white text-xl"></i>
                    <i onClick={() => edit_handle(index)} className="fa-solid fa-edit text-green-500 text-xl"></i>
                </div>
            </div>
        );
    })
}

        
    </div>
  )
}



