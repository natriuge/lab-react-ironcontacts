import './App.css';
import contacts from './contacts.json';
import { useState } from 'react';


const trophy = '🏆'


function App() {

  const [newContacts, setNewContacts] = useState (contacts.slice(0,5))

  function addRandom() {

    const randomContact = contacts[Math.floor(Math.random() * contacts.length)]

    for (let newContact of newContacts) {
      if (newContact.name === randomContact.name) {
        return addRandom()
      } 
    }
    const cloneNewContacts = [...newContacts]
    cloneNewContacts.push(randomContact)
    return setNewContacts(cloneNewContacts)
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className = 'contacts-container'>
        <button onClick ={addRandom} className ='button-layout'>Add Random Contact</button>
        <table cellPadding = "0" cellSpacing = "0">
          <tr>
            <td><h2>Picture</h2></td>
            <td><h2>Name</h2></td>
            <td><h2>Popularity</h2></td>
            <td><h2>Won<br/>Oscar</h2></td>
            <td><h2>Won<br/>Emmy</h2></td>
          </tr>
          
      { newContacts.map(currentElement => {
        const wonOscar = currentElement.wonOscar ? trophy : null
        const wonEmmy = currentElement.wonEmmy ? trophy : null 

        return (
          <tr>
            <td><img src = {currentElement.pictureUrl} alt = {currentElement.name}/></td>
            <td><p>{currentElement.name}</p></td>
            <td><p>{Math.round(currentElement.popularity * 100) / 100}</p></td>
            <td><span>{wonOscar}</span></td>
            <td><span>{wonEmmy}</span></td>
          </tr>
        )
      })}
        </table>
      </div>
    </div>
  )
}

export default App;
