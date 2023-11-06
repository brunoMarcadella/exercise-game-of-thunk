import { ActionType, CharacterType } from '../../types';
import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED } from '../actions/index';

const initialState = {
  name: '',
  gender: '',
  culture: '',
  born: '',
  died: '',
  titles: [],
  aliases: [],
};

const gameOfThunksReducer = (state: CharacterType = initialState, action: ActionType) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
      };

    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        character: action.character || null,
      };

    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage || 'Erro desconhecido',
      };

    default:
      return state;
  }
};

export default gameOfThunksReducer;
