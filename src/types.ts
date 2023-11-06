import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type CharacterType = {
  name: string,
  gender: string,
  culture: string,
  born: string,
  died: string,
  titles: string[],
  aliases: string[],
};

export type ReduxState = {
  isFetching: boolean,
  character: CharacterType | null,
  errorMessage: string | null,
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;

export type ActionType = {
  type: string,
  character?: CharacterType,
  errorMessage?: string,
};
