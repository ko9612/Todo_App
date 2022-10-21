/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import './Todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const TodoInput = ({ onAdd }) => {
  const textRef = useRef();
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    if (!text) return; //text에 아무것도 없을 때 - 공백 입력 방지

    onAdd(text);
    setText('');
    e.preventDefault(); //새로고침 방지
    textRef.current.focus();
  };

  return (
    <form className="TodoInput" onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        placeholder="New Task(only ENG)"
        onChange={onChange}
        ref={textRef}
      />
      <button>
        <FontAwesomeIcon icon={faCirclePlus} />
      </button>
    </form>
  );
};

export default TodoInput;
