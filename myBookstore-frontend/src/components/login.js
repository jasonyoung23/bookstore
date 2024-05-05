import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const mockUser = {
    username: 'admin',
    password: 'admin',
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === mockUser.username && password === mockUser.password) {
      onLogin();
    } else {
      alert('Incorrect username or password!');
    }
  };

  return (
    <div className="bg-gray-200 flex h-screen justify-center items-center">
      <div className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md">
        <h2 className="text-2xl font-bold mb-6">My Bookstore</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-2 text-sm font-bold text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="p-3 bg-gray-100 rounded outline-none focus:bg-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-sm font-bold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="p-3 bg-gray-100 rounded outline-none focus:bg-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center mb-4"> 
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
