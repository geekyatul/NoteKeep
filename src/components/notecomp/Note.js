import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import './Note.css'


const Note = (props) => {
   
    const deleteItem=(event)=>{
          // how we will get the id to delete the elements 
          props.deleteItem(props.index);
          
    }

    return (
         
        <div className="singlenote">
            <h4>Title:{props.title}</h4>
            <p>Content:{props.content}</p>
            <button type="button" onClick={deleteItem}><DeleteIcon /></button>
        </div>





    )
}

export default Note
