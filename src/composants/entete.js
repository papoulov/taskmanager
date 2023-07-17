import React from 'react';
import { useDate } from "../utils/date";
import Formulaire from './formulaire';


function Entete({ img_url, Ajout }) {

    const todayDate = useDate();

    return (
        <div className='entete'>
            <div className='section_utilisateur'>
                <img
                    className='img_user'
                    src={require('../assets/user.jpeg')}
                    alt='Utilisateur'
                />
                <div className='user_info'>
                    Bonjour <br />
                    Papou Kponton

                </div>
                <div className='menu1'>
                    <button>Mes taches</button>
                    <button>Mes taches</button>
                    <button>Taches planifiees</button>
                </div>
            </div>

            <Formulaire Ajout={Ajout} />

        </div>
    )
};

/*
<div className='menu'>
                    <button>
                        Mes taches
                    </button>
                    <button>
                        taches
                    </button>
                    <button>
                        taches
                    </button>
                </div>
*/

export default Entete