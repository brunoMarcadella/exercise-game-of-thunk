import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Dispatch } from './types';
import { fetchGameOfThunksAPI } from './redux/actions';
import CharacterCard from './components/CharacterCard';
import './App.css';

function App() {
  const dispatch: Dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleClick = () => {
    dispatch(fetchGameOfThunksAPI(name));
    setName('');
  };

  return (
    <>
      <label>
        {' '}
        Personagem:
        <input
          type="text"
          value={ name }
          onChange={ (event) => setName(event.target.value) }
          placeholder="Digite o nome do personagem"
        />
      </label>
      <button onClick={ handleClick }>Procurar</button>
      <CharacterCard />
    </>
  );
}

export default App;
