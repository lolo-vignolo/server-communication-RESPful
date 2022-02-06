import React, {  useState } from 'react'
import './App.css';
import ListOfNumbers from './components/ListOfNumbers';
import Search from './components/Search';
import initialState from './asset/peopleInformation';
import Input from './components/Input';

function App() {

  const [listName , setListname] = useState(initialState)

  const [ name , setName] = useState ("");

  const [ number, setNumber] = useState (0);
  
  const [search, seatSearch] = useState("")

  

  const handleSubmit = (e)=> {
    e.preventDefault()
 
    
    const newNumInList = {
        id: listName.length + 1 ,
        name,
        number
    }

    for(let n of listName){
      if(n.name != newNumInList.name){
        setListname (listName.concat(newNumInList))
        setName("");
        setNumber (0)
      }else{
        setName("");
        setNumber (0)
        return(
          window.alert(`${newNumInList.name} alrready exist!`)
        )
         
      }
  }}

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

  

  const filtrar = (terminoBusqueda)=>{
    let resultadosBusqueda= listName.filter((user)=>{
      if(user.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return user;
      }
    });
    setListname(resultadosBusqueda);
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
              <ListOfNumbers constacts={listName} searchName={search} />
            </ul>

        </section>

      
    </>

  );
}

export default App;
