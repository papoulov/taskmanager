import { useState } from "react";
import { myColors } from "../assets/colors";
import { IoIosAddCircleOutline } from "react-icons/io";

function Formulaire(props) {

    const [maTache, setMaTache] = useState('');


    const handleChange = (e) => {
        setMaTache(e.target.value)
    };

    //arrow fonction ES6
    const handleSubmit = (e) => {

        e.preventDefault();

        if (maTache !== '') {
            props.Ajout({
                id: Math.floor(Math.random() * 10000),
                text: maTache,
                color: myColors[Math.floor(Math.random() * 10)],
            });
            setMaTache('')
        }
    };

    return (<div>
        <form className="my_form" onSubmit={handleSubmit}>
            <input type="text"
                className="input"
                placeholder="Enter votre tache" value={maTache}
                onChange={handleChange}
            />
            <button className="add_task">
                <IoIosAddCircleOutline style={{ fontSize: 20, marginRight: 5 }} />AJOUTER
            </button>
        </form>
    </div>
    )
};

export default Formulaire;
