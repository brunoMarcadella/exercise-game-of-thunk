import { CharacterType, Dispatch } from '../../types';

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

const requestStarted = () => {
  return {
    type: REQUEST_STARTED,
  };
};

const requestSuccessful = (character: CharacterType) => {
  return {
    type: REQUEST_SUCCESSFUL,
    character,
  };
};

const requestFailed = (error: string) => {
  return {
    type: REQUEST_FAILED,
    error,
  };
};

export const fetchGameOfThunksAPI = (characterName: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${characterName}`);
      const data: CharacterType[] = await response.json();
      dispatch(requestSuccessful(data[0]));
    } catch (error: any) {
      dispatch(requestFailed(error.message));
    }
  };
};
