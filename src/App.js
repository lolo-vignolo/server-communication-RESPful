import React, {  useEffect, useState } from 'react'

import ListOfNumbers from './components/ListOfNumbers';
import Search from './components/Search';
import Input from './components/Input';
import setComunication from "../src/services/notes"
import './App.css';

function App() {
  const [listName , setListname] = useState([])
  const [dinamicUsers , setDinamicUsers] = useState([])
  const [search, seatSearch] = useState("")
  const [ name , setName] = useState ("");
  const [ number, setNumber] = useState ("");
  const [error, setError] = useState ("")

  useEffect(()=>{
    setError("")
   setComunication.getContactInformation().then((information)=>{
      setListname(information);
      setDinamicUsers(information)
    })
  .catch((err)=> {setError(err)})
  }, [])

  const handleSubmit = (e)=> {
    e.preventDefault()
    console.log(e.target.data);
    const newNumInList = {
        id: new Date(),
        name,
        number,
    }

   const findName = listName.find((n)=>n.name === name || n.number === number )
    console.log(findName);

   if(findName){
    const itemChanged = {
          ...findName,
          name:name,
          number:number
    }

    window.confirm("That name or number already exist, would you like to update it?")
    ?
    setComunication.updateContact(findName.id,itemChanged )

    .then((infoResponse)=>{setListname(listName.map((item) => item.id !== findName.id? item: infoResponse))
      setName("")
      setNumber("")})
    : 
    console.log("new name");
          setComunication.postNewCOntact(newNumInList)
          .then(newContact =>{     
                  setListname(listName.concat(newContact));
                  setName("")
                  setNumber("")   
          }) 
          .catch((err)=> console.log(err))
      
   }else{
          console.log("new name");
          setComunication.postNewCOntact(newNumInList)
          .then(newContact =>{     
                  setListname(listName.concat(newContact));
                  setName("")
                  setNumber("")   
          }) 
          .catch((err)=> console.log(err))  
        }
 }

  const handleName = (e) => {
      setName(e.target.value) 
    } 

  const handleNumber = (e) => { 
    setNumber(e.target.value)
  }

  const handleSearch = (e) => {
    seatSearch(e.target.value)
    filtrar(e.target.value)
  }

  //el dinamico sirve al estatico.
  const filtrar = (terminoBusqueda)=>{
    let resultadosBusqueda = dinamicUsers.filter((user)=>{
      if(user.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return user;
      }
    });
    setListname(resultadosBusqueda);
  }

const handleDelete = (id) =>{
    setComunication
    .deleteNote(id)  
    const noteToDelete = listName.filter((n) => n.id !== id )
    setListname(noteToDelete)
}

  return (
    <>
      <header style= {{display : "flex" , alignItems:"center"}}>
          <h2>Phonebook</h2>
          <Search search={search}  handleSearch={handleSearch}/>
      </header>
      <form onSubmit={handleSubmit}>

            <Input 
                labelText= "Add here a new name: "
                onChange={handleName}
                value = {name}
                placeholder= "Write your name here!"
              />
            <Input 
                labelText= "Add here a new number:"
                onChange={handleNumber}
                value = {number}
                placeholder= "Write your num here!"
              />

          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <section>   
            <h2>Numbers</h2>
            <ul>
            {
              listName.map((contact)=>{
               
                return(
                  <ListOfNumbers
                      key={contact.id} 
                      contact={contact}
                      searchName={search}
                      onClick={()=>window.confirm('Delete the item?')&&handleDelete(contact.id)} 
                  />) })
            }
            </ul>
            <h3>{error}</h3>
        </section>
    </>
  );
}

export default App;
