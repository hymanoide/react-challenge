import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  const mockTasks = [
    { id: 1, name: 'Task 1', status: 'in progress' },
    { id: 2, name: 'Task 2', status: 'completed' }
  ];

  test('renders without errors', () => {
    render(<App tasks={mockTasks} />);
  });

  test('adds a task when addTask is called', () => {
    const { getByText, getByPlaceholderText } = render(<App tasks={mockTasks} />);

    const input = getByPlaceholderText('Type your new task here');
    const addButton = getByText('Add');

    fireEvent.change(input, { target: { value: 'New testing task' } });
    fireEvent.click(addButton);

    const newTask = getByText('New testing task');
    expect(newTask).toBeInTheDocument();
  });


  test('changes task status when changeTaskStatus is called', () => {
    const { getByText } = render(<App tasks={mockTasks} />);

    const task1 = getByText('Task 1');
    fireEvent.click(task1);

    const updatedTask1 = getByText('Task 1');
    expect(updatedTask1).toBeInTheDocument('completed');
  });
});


