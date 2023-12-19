import React, { useState, useEffect } from 'react'
import '../ReactTodo.js/Todo.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

const Todo = (props) => {
    const [input, setInput] = useState("")
    const [item, setItem] = useState([])
    const [toggle, setToggle] = useState(true)

    const AddItem = () => {

        if (!input) {

        } else {

            setItem([...item, input])
            setInput("")
        }
    }

    const deleteItem = (id) => {
        // console.log("gelete").

        const deleteData = item.filter((elem, index) => {
            return index !== id
        })
        setItem(deleteData)


    }

    const EditItem = (edit) => {
        setInput(edit)

        const deleteData = item.filter((elem) => {
            return elem !== edit

        })
        setItem(deleteData)
        setToggle(false)
    }

    useEffect(() => {
        let storage = localStorage.setItem("list", JSON.stringify(item))


    }, [item])

    const handleCheckbox = (val) => {
        let checkItem = item.map((elem, index) => {
            if (index === val) {
                return { ...elem, completed: !elem.completed }
            } else {
                return elem;
            }

        })
        setItem(checkItem)
    }

    return (
        <div className='main'>

            <h1 className='heading__style'>ToDo List</h1>
            <br />
            <div className='inputType'>
                <input
                    className='input'
                    type="text"
                    placeholder='Add Item'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={AddItem} >ADD</button>
                <br />

                {
                    item?.map((elem, index) => {
                        return (
                            <div className='output'>
                                <input
                                    className='checkbox'
                                    type='checkbox'
                                    ckecked={elem.completed}
                                    onChange={() => handleCheckbox(index)}

                                    />
                                <h5
                                    key={elem.id}> <span  style={{ textDecoration: elem.completed ? "line-through" : null }}> {elem}</span>
                                   </h5>
                                <span> <EditNoteOutlinedIcon onClick={() => EditItem(elem)} className='editItem' /> </span>
                                <span> <DeleteIcon onClick={() => deleteItem(index)} className='deleteIcon' /> </span>
                            </div>

                        )
                    })
                }


            </div>
        </div>
    )
}
export default Todo;