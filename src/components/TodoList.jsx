import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleImportant, toggleCompleted } from '../redux/reducer';

const TodoList = () => {
  const { tasks, filter } = useSelector(state => state);
  const dispatch = useDispatch();
  
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'Active':
        return !task.completed && !task.deleted;
      case 'Completed':
        return task.completed && !task.deleted;
      case 'Trash':
        return task.deleted;
      default:
        return !task.deleted;
    }
  });

  const handleEdit = (index) => {
    if (editIndex === index) {
      dispatch(editTask(index, editValue));
      setEditIndex(null);
    } else {
      setEditIndex(index);
      setEditValue(tasks[index].text);
    }
  };

  return (
    <ul>
      {filteredTasks.map((task, index) => (
        <li key={index} className={task.important ? 'important' : ''}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleCompleted(index))}
          />
          {editIndex === index ? (
            <div>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button onClick={() => handleEdit(index)}>Сохранить</button>
              <button onClick={() => setEditIndex(null)}>Отмена</button>
            </div>
          ) : (
            <span>{task.text}</span>
          )}
          <button onClick={() => dispatch(toggleImportant(index))}>!</button>
          <button onClick={() => dispatch(deleteTask(index))}>x</button>
          <button onClick={() => handleEdit(index)}>
            {editIndex === index ? 'Сохранить' : 'Редактировать'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
