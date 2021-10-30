import { useState } from 'react';
import List from './components/List';
import './app.css';
import AddToList from './components/AddToList';

export interface People {
   people: {
      name: string;
      age: number;
      url: string;
      note?: string;
   }[];
}

const App = () => {
   const [people, setPeople] = useState<People['people']>([]);
   return (
      <div className="App">
         <h1>People Invited to my Party</h1>
         <List people={people} />
         <AddToList people={people} setPeople={setPeople} />
      </div>
   );
};

export default App;
