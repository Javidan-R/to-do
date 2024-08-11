import React, { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import { Todo, CreateTodoProps } from 'interfaces';
import {
  StyledButton,
  StyledInput,
  StyledForm,
  StyledCheckboxWrapper,
  StyledLabel,
} from '../styles/components';

const initialFormData: Omit<Todo, 'id'> = {
  title: '',
  description: '',
  completed: false,
};

export const CreateTodo: FC<CreateTodoProps> = ({ createTodo }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [darkMode, setDarkMode] = useState(false);

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.title.trim()) {
      return;
    }
    const newTodo: Todo = {
      id: nanoid(),
      ...formData,
    };
    createTodo(newTodo);
    setFormData(initialFormData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <StyledForm onSubmit={formSubmitHandler}>
      <StyledInput
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        darkMode={darkMode}
        placeholder="Title"
      />
      <StyledInput
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        darkMode={darkMode}
        placeholder="Description"
      />
      <StyledCheckboxWrapper>
        <StyledLabel darkMode={darkMode} htmlFor="completed">
          Completed
        </StyledLabel>
        <StyledInput
          type="checkbox"
          name="completed"
          checked={formData.completed}
          onChange={handleInputChange}
          darkMode={darkMode}
          id="completed"
        />
      </StyledCheckboxWrapper>
      <StyledButton type="submit" darkMode={darkMode}>
        Create Todo
      </StyledButton>
    </StyledForm>
  );
};
