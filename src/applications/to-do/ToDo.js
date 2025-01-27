import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // Load todos from local storage on component mount
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(savedTodos);
  }, []);

  // Save todos to local storage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodo = {
      id: uuidv4(),
      text: input,
      completed: false,
      createdAt: new Date().toISOString()
    };

    setTodos([...todos, newTodo]);
    setInput('');
  };

  // Toggle todo completion
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Start editing a todo
  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  // Save edited todo
  const saveEdit = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditingId(null);
  };

  // Filter todos
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Clear completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 my-12">
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-blue-500 text-white text-center py-4">
          <h1 className="text-3xl font-bold">Todo List</h1>
        </div>

        {/* Add Todo Form */}
        <form onSubmit={addTodo} className="p-6 border-b">
          <div className="flex">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What needs to be done?"
              className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors"
            >
              Add
            </button>
          </div>
        </form>

        {/* Todo List */}
        <div className="divide-y">
          {filteredTodos.map(todo => (
            <div 
              key={todo.id} 
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              {editingId === todo.id ? (
                // Editing mode
                <div className="flex-grow flex">
                  <input 
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-grow px-2 py-1 border rounded mr-2"
                  />
                  <button 
                    onClick={() => saveEdit(todo.id)}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Save
                  </button>
                  <button 
                    onClick={() => setEditingId(null)}
                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                // Normal mode
                <>
                  <div className="flex items-center flex-grow">
                    <input 
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleComplete(todo.id)}
                      className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span 
                      className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}
                    >
                      {todo.text}
                    </span>
                  </div>
                  <div>
                    <button 
                      onClick={() => startEditing(todo)}
                      className="text-blue-500 hover:text-blue-700 mr-2"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => deleteTodo(todo.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        {todos.length > 0 && (
          <div className="p-4 bg-gray-100 flex justify-between items-center">
            <span className="text-gray-600">
              {todos.filter(todo => !todo.completed).length} items left
            </span>
            <div className="flex space-x-2">
              <button 
                onClick={() => setFilter('all')}
                className={`px-2 py-1 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('active')}
                className={`px-2 py-1 rounded ${filter === 'active' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
              >
                Active
              </button>
              <button 
                onClick={() => setFilter('completed')}
                className={`px-2 py-1 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
              >
                Completed
              </button>
            </div>
            <button 
              onClick={clearCompleted}
              className="text-red-500 hover:text-red-700"
            >
              Clear Completed
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ToDo;