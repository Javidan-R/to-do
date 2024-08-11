import { ReactNode } from "react";

export interface Todo {
	id: string;
	title: string;
	description: string;
	completed: boolean;
}

export interface TodoContextState {
	todos: Todo[];
}
export  type DarkModeContextProps = {
	darkMode: boolean;
	toggleDarkMode: () => void;
  };
  
export type TodoAction =
	| { type: 'ADD_TODO'; payload: Todo }
	| { type: 'TOGGLE_TODO'; payload: string }
	| { type: 'DELETE_TODO'; payload: string };


export interface CreateTodoProps {
	createTodo: (data: Todo) => void;
}

export interface TodoProviderProps {
	children: ReactNode;
  }
  

export interface DarkModeProviderProps {
	children: ReactNode;
}


export interface TodoItemProps extends Todo {
	deleteTodo: (id: string) => void;
	toggleComplete: () => void;
}



export interface TodoListProps {
	data: Todo[];
	deleteTodo: (id: string) => void;
	toggleComplete: (id: string) => void;
}



export interface AppBackgroundProps {
	darkMode: boolean;
}

export interface ListItemProps {
	darkMode: boolean;
	completed: boolean;
}