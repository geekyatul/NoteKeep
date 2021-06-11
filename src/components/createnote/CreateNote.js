import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import './CreateNote.css'

const CreateNote = (props) => {
    // here we have to store all the data 
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const InputChange = (event) => {
        // how i will get the value for both input and textarea
        const value = event.target.value;
        const name = event.target.name;
        setNote((prevData) => {

            return {
                ...prevData,
                [name]: value,

            }

        })
}
  const setDataToParent=()=>{
        if(note.title=="" || note.content=="")
        {
            alert("enter title and note...");
        }
        else
        {
          props.getNote(note);
          setNote({
            title: "",
            content: ""
          })
        }
  }

    //console.log("what is store in",note);
 
    return (
        <div className="createnote">
            <form >
                <input type="text" name="title" placeholder="title..." autoComplete="off" value={note.title} onChange={InputChange} />
                <textarea type="text" name="content" placeholder="Enter your notes..." value={note.content} onChange={InputChange} />
                <button type="button" onClick={setDataToParent}><AddIcon /></button>
            </form>
        </div>
    )
}

export default CreateNote