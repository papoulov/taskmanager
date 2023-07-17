import React from 'react';
import UpdateForm from './updateform';
import AlertDialog from './alertes';
import { BsTrash, } from "react-icons/bs";
import { BiEdit, BiCheckSquare } from "react-icons/bi";


const Composantdetache = ({ tache, color, supprimer, completeTask, myid, modeEdit, editText, modifie }) => {

  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState('');

  const handleOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  }

  return (<>
    <AlertDialog
      open={open}
      handleClose={handleClose}
      handleDelete={supprimer}
      option={option}
      handleComplete={completeTask}
    />
    <div style={{ backgroundColor: color, width: '98%', borderRadius: 5, marginTop: 5, boxShadow: "3px 3px 2px #9E9E9E" }}>
      <div className='composantdetache'><div className='tache' id={myid}>{tache}</div>
        <div id='check' style={{ position: 'relative' }}><button onClick={() => { handleOpen(); setOption('terminer') }}><BiCheckSquare size={18} /></button>
          <div className='tooltip'>Termine ?</div>
        </div>
        <div><button onClick={editText}><BiEdit size={18} /></button></div>
        <div><button onClick={() => { handleOpen(); setOption('supprimer') }}><BsTrash size={16} /></button></div>
      </div>
      {modeEdit === myid &&
        <UpdateForm initialText={tache} update={modifie} />
      }
    </div>
  </>
  )
};

export default Composantdetache