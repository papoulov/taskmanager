import { useState } from "react";
import { myColors } from "../assets/colors";
import { useDate } from "../utils/date";

function Formulaire(props){
    
    const [maTache, setMaTache]= useState('');
    
const todayDate = useDate();


    const handleChange = (e)=>{
        setMaTache(e.target.value)
    };

    //arrow fonction ES6
    const handleSubmit = (e) =>{
        
        e.preventDefault();

        if(maTache !==''){
            props.Ajout({
                id: Math.floor(Math.random()*10000),
                text: maTache,
                color: myColors[Math.floor(Math.random()*10)],
            });

            setMaTache('')
        }
    };

    return(<div style={{backgroundColor:'#eee', width:'100%', display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center'}}>
         <div style={{width:'100%', textAlign:'right', marginRight:20, marginTop:5, fontSize:12}}>
        {todayDate.date} {todayDate.time}
        </div>
        <div style={{marginBottom:5}}>
            <h1>
                Bonjour Papou<br/> {props.taches.length ===0 && `Quel est votre programme aujourd'hui ?`} </h1>
           
            {props.taches.length ===0 ? 'Vous n\'avez aucune tache active. Vous pouvez commencer par ajouter des taches': `Vous avez ${props.taches.length} tache actives`}
        </div>
       
    <form className="form" onSubmit={handleSubmit}>
        <input type="text"
        className="input" 
        placeholder="Enter votre tache" value={maTache} 
        onChange={handleChange}/>
        <button>
            AJOUTER
        </button>
        </form>
        </div>
    ) 
}

export default Formulaire;
