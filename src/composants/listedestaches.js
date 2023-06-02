import React, { useState, useEffect } from 'react';
import Formulaire from './formulaire';
import Composantdetache from './composantdetache';

function Listedestaches() {

    const [taches, setTaches] = useState([]);
    const [toogleEdit, setToogleEdit] = useState('');
    const [completedTask, setCompletedTask] = useState([]);
    

    
const Ajouter = (tache)=>{
    const nouvellesTaches = [tache, ...taches]
    setTaches(nouvellesTaches);
};

const supprimerUneTache = (id)=>{
  const Tachesfiltrer = taches.filter((tache)=>tache.id!== id);
  setTaches(Tachesfiltrer);
}

const matache = taches.map((tache)=>{
  const key = tache.id;
  
  const completeTask = ()=> {
    // find() check in the el is in the array return the el
    // some() check if the el is in array an return true
    const task = taches.find((tache)=>tache.id === key);
    const isPresent = completedTask.some(function(el){ return el.id === key});
    if (isPresent){
      document.getElementById(key).style.removeProperty('text-decoration');
      const updatedTache = completedTask.filter((tache)=>tache.id !== key);
      setCompletedTask(updatedTache);
    } else {
      document.getElementById(key).style.textDecoration = 'line-through';
    setCompletedTask([task, ...completedTask])
    }
  };

  const modifierTache =(updateText)=>{
    const nouvellesTaches = taches.map((tache)=> {
      if(tache.id ===key){
        tache.text=updateText.text
        return tache
      }else{
        return tache
      }
    });
    setTaches(nouvellesTaches);
    setToogleEdit('')
  }


  const editText = ()=>{

    if (toogleEdit ===''){
      setToogleEdit(key)
    }else if (toogleEdit !==''){
      setToogleEdit('')
    }
  }

return <Composantdetache
myid={key}
 color={tache.color} key={key} tache={tache.text}
 supprimer={()=>supprimerUneTache(key)}
 completeTask={completeTask}
 modeEdit={toogleEdit} editText={editText}
 taches={taches} 
 modifie={modifierTache}
 />
}
)
  return (
    <div className='conteneur_app'>
        <Formulaire Ajout={Ajouter} taches ={taches} />
        <div style={{width:'100%'}}>{matache}</div>
    </div>
  )
}

export default Listedestaches