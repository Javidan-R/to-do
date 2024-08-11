import styled, { css } from "styled-components";
import defaultImage from "../../assets/defaultImage.png";
import darkImage from "../../assets/darkImage.png";
import { AppBackgroundProps, ListItemProps } from "interfaces";

const rem = (pxValue: number) => `${pxValue / 16}rem`;

export const baseButtonStyles = css`
  border: none;
  padding: ${rem(8)} ${rem(15)};
  cursor: pointer;
  border-radius: ${rem(5)};
  transition: background-color 0.3s, color 0.3s;
`;

export const AppBackground = styled.div<AppBackgroundProps>`
  position: relative;
  opacity: 0.9;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  width: 100%;
  height: 300px;
  background: ${({ darkMode }) =>
    darkMode ? `url(${darkImage})` : `url(${defaultImage})`}
    center/cover no-repeat;

  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(to right, #55ddff, #c058f3);
    opacity: 0.5;
    transition: opacity 0.3s;
    pointer-events: none;
  }

  @media screen and (max-width: 560px) {
    height: 100vh;
    &::before {
      opacity: 0.7;
    }
  }
`;

export const Container = styled.div`
  width: ${rem(540)};
  margin: auto;
  position: relative;
  z-index: 1;
  top: ${rem(40)};

  @media screen and (max-width: 570px) {
    width: 90%;
    height: 50vh;
  }

  @media screen and (max-width: 370px) {
    width: 90%;
    height: 60vh;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  padding: ${rem(20)} 0;
`;

export const ModeButton = styled.button<{ darkMode: boolean }>`
  ${baseButtonStyles}
  width: ${rem(40)};
  height: ${rem(40)};
  margin: auto 0;
  background-color: transparent;
  text-align: right;

  @media screen and (max-width: 570px) {
    width: ${rem(30)};
    height: ${rem(30)};
  }
`;

export const SectionContainer = styled.div`
  position: relative;
  z-index: 2;
  margin: ${rem(12)} 0;

  @media screen and (max-width: 560px) {
    width: 90%;
    margin: 0 auto;
  }

  @media screen and (max-width: 370px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const ControlBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction:row
  width: 536px;
  margin: ${rem(20)} auto;

  @media screen and (max-width: 570px) {
    width: 90%;
    margin: ${rem(20)} auto;
    flex-direction:column;
    flex-shrink:0;
    flex-wrap:wrap;
&>div{
margin:10px auto;
    width: 90%;
}
&> button{
width: 50%;
  margin: 0 auto;
}
  }
`;

export const ItemsLeft = styled.div<{ darkMode: boolean }>`
  color: ${({ darkMode }) => (darkMode ? "gray" : "black")};
  margin: auto 0;
  font-size: ${rem(18)};

  @media screen and (max-width: 570px) {
    font-size: ${rem(16)};
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 570px) {
    margin: 0 auto;
    width: 90%;
  }

  @media screen and (max-width: 370px) {
    margin: 0 auto;
    width: 90%;
  }
`;

export const ListItem = styled.li<ListItemProps>`
  width: 536px;
  display: flex;
  border-radius: 5px;
  margin: ${rem(13)} auto;
  align-items: center;
  letter-spacing: 2px;
	fontFamily: Arial;
  background: ${({ darkMode }) => (darkMode ? "#25273d" : "white")};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;

  @media screen and (max-width: 570px) {
    margin: 16px auto;
    width: 90%;
  }

  @media screen and (max-width: 370px) {
    margin: 16px auto;
    width: 90%;
  }
`;

export const TaskInfo = styled.div<ListItemProps>`
  ${({ completed, darkMode }) => css`
    -webkit-background-clip: text;
    text-decoration: ${completed ? "line-through" : "none"};
    color: ${completed && darkMode ? "gray" : darkMode ? "#fff" : "#494c6b"};
    width: 90%;
    display: flex;
    margin-left: ${rem(20)};
    position: relative;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, #ff758c, #ff7eb3);
      opacity: 0;
      transition: opacity 0.2s;
      pointer-events: none;
    }
  `}
`;

export const CompleteBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-right: 20px;
  cursor: pointer;
`;


export const TaskTitle = styled.h3<{ completed: boolean; darkMode: boolean }>`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ completed, darkMode }) => (completed ? (darkMode ? '#aaa' : '#555') : (darkMode ? '#fff' : '#000'))};
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;
export const TaskDescription = styled.p<{ completed: boolean; darkMode: boolean }>`
  margin: 5px 0 0;
  font-size: 1rem;
  color: ${({ darkMode }) => (darkMode ? '#ccc' : '#666')};
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;
export const CompletionStatus = styled.p`
  display: inline;
`;


export const StyledForm = styled.form`
  width: 100%;
  max-width: ${rem(400)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${rem(16)};
  background-color: transparen
  padding: ${rem(20)};
  border-radius: ${rem(8)};
  box-shadow: 0 ${rem(4)} ${rem(10)} rgba(0, 0, 0, 0.1);
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    padding: ${rem(16)};
  }
`;

export const StyledInput = styled.input<{ darkMode: boolean }>`
  width: 100%;
  padding: ${rem(10)};
  font-size: ${rem(16)};
  border: 1px solid ${({ darkMode }) => (darkMode ? '#555' : '#ccc')};
  border-radius: ${rem(4)};
  background-color: ${({ darkMode }) => (darkMode ? '#25273d' : '#f9f9f9')};
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#333')};
  outline: none;
  
  &::placeholder {
    color: ${({ darkMode }) => (darkMode ? '#ccc' : '#999')};
  }

  @media screen and (max-width: 480px) {
    font-size: ${rem(14)};
    padding: ${rem(8)};
  }
`;

export const StyledButton = styled.button<{ darkMode: boolean }>`
  padding: ${rem(10)} ${rem(20)};
  margin:${rem(4)};
  font-size: ${rem(16)};
  font-weight: 600;
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#333')};
  background: ${({ darkMode }) =>
    darkMode
      ? 'linear-gradient(to right, #555, #777)'
      : 'linear-gradient(to right, #6C4F94, #b06fc1)'};
  border: none;
  border-radius: ${rem(4)};
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${({ darkMode }) =>
      darkMode
        ? 'linear-gradient(to right, #777, #999)'
        : 'linear-gradient(to right, #b06fc1, #6C4F94)'};
  }

  @media screen and (max-width: 480px) {
    font-size: ${rem(14)};
    padding: ${rem(8)} ${rem(16)};
  }
`;

export const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(8)};
  width: 100%;
`;

export const StyledLabel = styled.label<{ darkMode: boolean }>`
  font-size: ${rem(16)};
  color: ${({ darkMode }) => (darkMode ? '#ccc' : '#333')};

  @media screen and (max-width: 480px) {
    font-size: ${rem(14)};
  }
`;
// ---------------------------------------------------------
export const DarkModeProvider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
