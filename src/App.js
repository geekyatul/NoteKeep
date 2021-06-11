import './App.css';
import React,{useState} from 'react'
import Header from './components/header/Header'
import CreateNote from './components/createnote/CreateNote'
import Note from './components/notecomp/Note'
//import Footer from './components/footer/Footer'


function App() {
   
   const [allnote,setAllNotes]=useState([]);

  const addNote=(note)=>{
    console.log("getting the note",note);
      setAllNotes([note,...allnote]);
  }
  console.log("I am getting in allnote",allnote);

  const deleteItem=(id)=>{
      console.log("I am getting id to delete from array ",id);
       const newnote=allnote.filter((singlenote,index)=>{
             return index!==id; 
         })
         setAllNotes(newnote);

  }

  return (
    <div className="App">
          <Header/>    
          <CreateNote getNote={addNote}/>
          <div className="notes">
           
           {
             allnote.length>0? 
             allnote.map((singlenote,index)=>
                 <Note title={singlenote.title} content={singlenote.content} key={index} index={index} deleteItem={deleteItem}/>
             ):<div className="notfound">
               <h1>Notes Not Found</h1>
             </div>
           }
          </div>
          
         
         </div>
  );
}

export default App;
