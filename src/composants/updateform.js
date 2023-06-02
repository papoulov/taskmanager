import { useState } from "react";

function UpdateForm(props){
    
    const [updateTache, setUpdateTache]= useState(props.initialText);
    

    const handleChange = (e)=>{
        setUpdateTache(e.target.value)
    };

    //arrow fonction ES6
    const handleSubmit = (e) =>{
        
        e.preventDefault();

        if(updateTache !==''){
            props.update({
                text: updateTache,
            });

            setUpdateTache('')
        }
    };


    return(
    <form className="updateform" onSubmit={handleSubmit}>
        <textarea type="text"
        className="textarea"
        cols={40}
        rows={4}
        value={updateTache} 
        onChange={handleChange}
        ></textarea>
        <button style={{marginLeft:5}}>
            Modifier
        </button>
        </form>

    ) 
}

export default UpdateForm;
