import React from 'react';


const ListOfNumbers = ({constacts}) => {
    return (
        <>
            {
                constacts.map((contact)=>{
                    return(
                        <li key={contact.id}>
                            {`${contact.name}: ${contact.number}`}
                        </li>
                    )
                      
                    
                })
            }
        </>
    );
};

export default ListOfNumbers;