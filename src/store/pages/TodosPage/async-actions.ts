import { Dispatch } from 'redux';
import { TodosActionTypes, IFetchTodosActions, IFetchTodoParams } from './interfaces';
import { TodosService } from './todos-service';

export const fetchTodos = ({ _page, _limit }: IFetchTodoParams) => {
  return async (dispatch: Dispatch<IFetchTodosActions>) => {
    try {
      dispatch({ type: TodosActionTypes.FETCH_TODOS });
      const response = await TodosService.getTodos(_page, _limit);
      dispatch({ type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data });
    } catch {
      dispatch({ type: TodosActionTypes.FETCH_TODOS_FAILURE, payload: 'Ошибка!' });
    }
  };
};
