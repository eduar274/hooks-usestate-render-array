import './App.css';
import { Persons } from './components/Persons'
import { useState } from 'react';

function App() {

  const [ persons, setPersons ] = useState([
    {
      id: 1,
      name: "Eduar Jaimes",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar6.png",
    },
    {
      id: 2,
      name: "Laura Torres",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
      id: 3,
      name: "Vanessa Landinez",
      role: "UI/UX Designer",
      img: "https://bootdey.com/img/Content/avatar/avatar8.png",
    },
  ]);

  return (
    <div className='App'>
      <div className='container'>
        <Persons persons={persons} setPersons={setPersons} />
      </div>
    </div>
  );
}

export default App;
