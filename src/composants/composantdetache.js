import React from 'react';
import UpdateForm from './updateform';
import { AiOutlineCheck, AiFillEdit, AiOutlineClose  } from "react-icons/ai";

const Composantdetache = ({tache, color, supprimer, completeTask, myid, modeEdit, editText, modifie}) => {
  
  return (
    <div  style={{backgroundColor:color, width:'100%'}}>
       <div className = 'composantdetache'><div className='tache' id={myid}>{tache}</div>
       <div id='check' style={{position:'relative'}}><button onClick={completeTask}><AiOutlineCheck size={18}/></button>
       <div className='tooltip'>Termine ?</div>
       </div>
       <div><button onClick={editText}><AiFillEdit size={18}/></button></div>
       <div><button onClick={supprimer}><AiOutlineClose size={18}/></button></div>
       </div>
       {modeEdit ===  myid &&
       <UpdateForm initialText={tache} update={modifie} />
       }
    </div>
  )
};

export default Composantdetache