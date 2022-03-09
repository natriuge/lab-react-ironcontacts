import './App.css';
import contacts from './contacts.json';

const newContacts = contacts.slice(0,6)
const trophy = '🏆'




function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className = 'contacts-container'>
        <table cellpadding="0" cellspacing="0">
          <tr>
            <td><h2>Picture</h2></td>
            <td><h2>Name</h2></td>
            <td><h2>Popularity</h2></td>
            <td><h2>Won<br/>Oscar</h2></td>
            <td><h2>Won<br/>Emmy</h2></td>
          </tr>
          
      { newContacts.map(props => {
        const wonOscar = props.wonOscar ? trophy : null
        const wonEmmy = props.wonEmmy ? trophy : null
        return (
          <tr>
            <td><img src = {props.pictureUrl} alt = {props.name}/></td>
            <td><p>{props.name}</p></td>
            <td><p>{Math.round(props.popularity * 100) / 100}</p></td>
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
