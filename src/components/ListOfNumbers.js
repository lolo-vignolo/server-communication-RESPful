import React from 'react';


const ListOfNumbers = ({contact, onClick}) => {
    return (

            <li>
                {`${contact.name}: ${contact.number}`}

                <button 
                    style={{marginLeft:"20px", backgroundColor:"red"  }}
                    onClick={onClick}>
                
                delete</button>
            </li>

    );
};

export default ListOfNumbers