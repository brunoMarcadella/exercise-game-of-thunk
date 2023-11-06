import { useSelector } from 'react-redux';
import { ReduxState } from '../types';

function CharacterCard() {
  const { character, isFetching, errorMessage } = useSelector(
    (state: ReduxState) => state,
  );

  if (errorMessage) { return <div>{errorMessage}</div>; }
  if (isFetching) { return <h3>Loading...</h3>; }

  if (character) {
    return (
      <div>
        <h2>
          {character.name}
        </h2>
        <p>{`Gender: ${character.gender}`}</p>
        {character.culture !== '' && <p>{`Culture: ${character.culture}`}</p>}
        <p>{`Born ${character.born}`}</p>
        {character.died !== '' && <p>{`Died ${character.died}`}</p>}
        <h3>Titles:</h3>
        <ol>
          {character.titles.map((title) => (
            <li key={ `${title}` }>{title}</li>
          ))}
        </ol>
        <h3>Aliases:</h3>
        <ol>
          {character.aliases.map((alias) => (
            <li key={ `${alias}` }>{alias}</li>
          ))}
        </ol>
      </div>
    );
  }

  return <div>Type a character name and click to search!</div>;
}

export default CharacterCard;
