import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1,
      name: "Task 1",
      done: false
    },
    {
      id: 2,
      name: "Task 2",
      done: true
    }
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          To do List
        </C.Header>
        
        {list.map((item, index) =>(
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;