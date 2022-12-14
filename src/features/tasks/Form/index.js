import { useState, useRef } from "react";
import { StyledForm, NewTask, Button } from "./styled";
import { addTask } from "../tasksSlice";
import { useDispatch } from "react-redux";

const Form = () => {
  const [taskContent, setTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const focusInput = () => inputRef.current.focus();

  const onInputChange = (event) => {
    setTaskContent(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const contentTrimmed = taskContent.trim();

    if (contentTrimmed) {
      dispatch(addTask(contentTrimmed));
    }

    setTaskContent("");
    focusInput();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <NewTask
        autoFocus
        ref={inputRef}
        placeholder="Co jest do zrobienia?"
        value={taskContent}
        onChange={onInputChange}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;
