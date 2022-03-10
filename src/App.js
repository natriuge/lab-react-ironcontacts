import './App.css';
import contacts from './contacts.json';
import { useState } from 'react';

const trophy = '🏆'

function App() {

  const [newContacts, setNewContacts] = useState (contacts.slice(0,5))
  const cloneNewContacts = [...newContacts]
  
  function addRandom() {
   
    const RandomContact = contacts[Math.floor(Math.random() * contacts.length)]

    for (let newContact of newContacts) {
      if (newContact.name === RandomContact.name) {
        return addRandom()
      } 
    }
    
    cloneNewContacts.push(RandomContact)
    return setNewContacts(cloneNewContacts)
  }

  function SortingByPop() {

    cloneNewContacts.sort((a,b) => b.popularity - a.popularity)
    return setNewContacts(cloneNewContacts)
  }

  function SortingByName() {

    cloneNewContacts.sort((a,b) => a.name.localeCompare(b.name))
    return setNewContacts(cloneNewContacts)
    
  }

  function Remove(event) {
   const idRemove = event.target.attributes[0].value

   const newArray = cloneNewContacts.filter(currentElement =>
      currentElement.id !== idRemove
    )

    return setNewContacts(newArray)
  }

    
   
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className = 'contacts-container'>
        <button onClick ={addRandom} className ='button-layout'>Add Random Contact</button>
        <button onClick = {SortingByPop} className = 'button-layout'>Sorty by popularity</button>
        <button onClick = {SortingByName} className = 'button-layout'>Sorty by name</button>
        <table cellPadding = "0" cellSpacing = "0">
          <tr>
            <td><h2>Picture</h2></td>
            <td><h2>Name</h2></td>
            <td><h2>Popularity</h2></td>
            <td><h2>Won<br/>Oscar</h2></td>
            <td><h2>Won<br/>Emmy</h2></td>
            <td><h2>Actions</h2></td>
          </tr>
          
      { cloneNewContacts.map(currentElement => {
        const wonOscar = currentElement.wonOscar ? trophy : null
        const wonEmmy = currentElement.wonEmmy ? trophy : null 
        
        return (
          <tr key = {currentElement.id}>
            <td><img src = {currentElement.pictureUrl} alt = {currentElement.name}/></td>
            <td><p>{currentElement.name}</p></td>
            <td><p>{Math.round(currentElement.popularity * 100) / 100}</p></td>
            <td><span>{wonOscar}</span></td>
            <td><span>{wonEmmy}</span></td>
            <td><button onClick = {Remove} dataid = {currentElement.id} className = 'delete-button' type = 'button'>Delete</button></td>
          </tr>
        )
      })}
        </table>
      </div>
    </div>
  )
}

export default App;
