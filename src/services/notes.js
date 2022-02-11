import axios from "axios"


const baseUrl = "http://localhost:3003/persons"


const getContactInformation = () => {
   
    const request = axios.get(baseUrl)

    return request.then((response) =>response.data)
   
}

const postNewCOntact = (newNumInList) =>{
    const request = axios.post(baseUrl, newNumInList)
    return request.then((response) => response.data)

}

const deleteNote = (id) =>{
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then((response) => console.log(response.data))
}

const updateContact = (id , newInformation) => {
    const request = axios.put(`${baseUrl}/${id}`, newInformation)
    return request.then(response=>(response.data))
}

export default {
    getContactInformation,
    postNewCOntact,
    deleteNote,
    updateContact
    
}