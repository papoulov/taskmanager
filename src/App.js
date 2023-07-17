import './App.css';
import { useState } from 'react';
import Listedestaches from './composants/listedestaches';
import Entete from './composants/entete';
import { useDate } from './utils/date';
import Composantdetache from './composants/composantdetache';


function App() {

  const [taches, setTaches] = useState([]);
  const [toogleEdit, setToogleEdit] = useState('');
  const [completedTask, setCompletedTask] = useState([]);

  const todayDate = useDate();


  const Ajouter = (tache) => {
    const nouvellesTaches = [tache, ...taches]
    setTaches(nouvellesTaches);
  };



  const supprimerUneTache = (id) => {
    const Tachesfiltrer = taches.filter((tache) => tache.id !== id);
    setTaches(Tachesfiltrer);
  }

  const matache = taches.map((tache) => {
    const key = tache.id;


    const completeTask = () => {
      // find() check in the el is in the array return the el
      // some() check if the el is in array an return true
      const task = taches.find((tache) => tache.id === key);
      const isPresent = completedTask.some(function (el) { return el.id === key });
      if (isPresent) {
        document.getElementById(key).style.removeProperty('text-decoration');
        const updatedTache = completedTask.filter((tache) => tache.id !== key);
        setCompletedTask(updatedTache);
      } else {
        document.getElementById(key).style.textDecoration = 'line-through';
        setCompletedTask([task, ...completedTask])
      }
    };

    const modifierTache = (updateText) => {
      const nouvellesTaches = taches.map((tache) => {
        if (tache.id === key) {
          tache.text = updateText.text
          return tache
        } else {
          return tache
        }
      });
      setTaches(nouvellesTaches);
      setToogleEdit('')
    }


    const editText = () => {
      if (toogleEdit === '') {
        setToogleEdit(key)
      } else if (toogleEdit !== '') {
        setToogleEdit('')
      }
    }

    return <Composantdetache
      key={key}
      color={tache.color}
      tache={tache.text}
      completeTask={completeTask}
      modeEdit={toogleEdit} editText={editText}
      taches={taches}
      modifie={modifierTache}
      supprimer={() => supprimerUneTache(key)}
    />
  }
  )

  return (<div className='app'>
    <div className='contenant_app'>
      <Entete Ajout={Ajouter} />
      <div>
        {todayDate.date}
        {todayDate.time}
      </div>
      {matache}
    </div>
  </div>
  )
}

export default App;
