import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type ReduxState = {
  isFetching: boolean,
  name: string,
  gender: string,
  culture: string,
  born: string,
  died: string,
  titles: string[],
  aliases: string[],
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
