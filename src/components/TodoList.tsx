import React from 'react';
import { TodoItem } from './TodoItem';
import { List } from '../styles/components';
import { TodoListProps } from 'index';

export const TodoList: React.FC<TodoListProps> = ({ data, deleteTodo, toggleComplete }) => {
  return (
    <List>
      {data.map((item) => (
        <TodoItem key={item.id} {...item} deleteTodo={deleteTodo} toggleComplete={() => toggleComplete(item.id)} />
      ))}
    </List>
  );
};

