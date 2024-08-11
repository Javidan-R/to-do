import React, { createContext, useContext, useReducer } from 'react';
import { todoReducer } from './TodoReducer';
import { TodoContextState, TodoAction, TodoProviderProps } from 'interfaces';


const TodoContext = createContext<{
  state: TodoContextState;
  dispatch: React.Dispatch<TodoAction>;
} | undefined>(undefined);

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};
