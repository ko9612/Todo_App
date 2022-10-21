/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const CheckButton = styled.button`
  margin-right: 30px;
`;

const TodoItem = ({ todos, onDelete, onCheck }) => {
  const { id, text, checked } = todos;

  return (
    <div>
      <li className={checked ? 'on' : null}>
        <CheckButton onClick={() => onCheck(id)}>
          {checked ? (
            <FontAwesomeIcon className="circle" icon={faCircleCheck} />
          ) : (
            <FontAwesomeIcon className="circle" icon={faCircle} />
          )}
        </CheckButton>
        <check onClick={() => onCheck(id)}>{text}</check>
        <button className="delete" onClick={() => onDelete(id)}>
          <FontAwesomeIcon icon={faDeleteLeft} />
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
