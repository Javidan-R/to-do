import React from 'react';
import CompIcon from '../assets/CompIcon.svg';
import Oval from '../assets/Oval.svg';
import Delete from '../assets/Delete.svg';
import { ListItem, TaskInfo, TaskTitle, TaskDescription, CompleteBtn, DeleteBtn } from '../styles/components';
import { useDarkMode } from './DarkModeContext';
import { TodoItemProps } from 'index';

export const TodoItem: React.FC<TodoItemProps> = ({ id, title, description, completed, deleteTodo, toggleComplete }) => {
  const { darkMode } = useDarkMode();

  return (
    <ListItem darkMode={darkMode} completed={completed}>
      <TaskInfo completed={completed} darkMode={darkMode} onClick={toggleComplete}>
        <CompleteBtn>
          {completed ? <img src={CompIcon} alt="Completed" /> : <img src={Oval} alt="Incomplete" style={{ border: '2px solid #000', borderRadius: '50%', width: '20px', height: '20px' }} />}
        </CompleteBtn>
        <div style={{marginLeft:'10px'}}>
          <TaskTitle completed={completed} darkMode={darkMode}>
            {title}
          </TaskTitle>
          <TaskDescription completed={completed} darkMode={darkMode}>
            {description}
          </TaskDescription>
        </div>
      </TaskInfo>
      <DeleteBtn onClick={() => deleteTodo(id)}>
        <img src={Delete} alt="Delete" />
      </DeleteBtn>
    </ListItem>
  );
};
