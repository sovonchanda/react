import React, { useState } from 'react';

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility
  const [loggedIn, setLoggedIn] = useState(false); // To track login state

  // Function to check password validity
  const checkPasswordValidity = (password) => {
    const capitalLetterCondition = /[A-Z]/.test(password);
    const numberCondition = /[0-9]/.test(password);
    const specialCharacterCondition = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (capitalLetterCondition && numberCondition && specialCharacterCondition) {
      setPasswordStrength('Valid');
    } else {
      setPasswordStrength('Invalid');
    }
  };

  // Handle password input
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordValidity(newPassword);
  };

  // Function to generate a random password
  const generateRandomPassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(),.?":{}|<>';
    let password = '';
    while (true) {
      for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      // Check if the random password meets the requirements
      if (
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!@#$%^&*(),.?":{}|<>]/.test(password)
      ) {
        break;
      }
    }
    setPassword(password);
    setPasswordStrength('Valid');
  };

  // Handle login button click
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission
    setLoggedIn(true); // Set loggedIn to true
  };

  // Handle log out
  const handleLogout = () => {
    setLoggedIn(false); // Set loggedIn to false and show login screen
    setPassword(''); // Optionally clear password field
    setPasswordStrength(''); // Clear password strength state
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Login</h2>
        {loggedIn ? (
          <div className="text-center">
            <div className="text-green-500 mb-4">You are logged in!</div>
            <button
              onClick={handleLogout}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Log out
            </button>
            <div className="mt-4 text-center">
              <button
                onClick={() => setLoggedIn(false)} // Reset the login state
                className="text-sm text-blue-500 hover:underline"
              >
                Another login
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="mb-4 text-left">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                required
                placeholder='Enter email or username'
              />
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder='Enter password'
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {password && (
                <div className={`mt-2 text-sm ${passwordStrength === 'Valid' ? 'text-green-500' : 'text-red-500'}`}>
                  {passwordStrength === 'Valid' ? 'Password is valid!' : 'Password must contain at least one uppercase letter, one number, and one special character.'}
                </div>
              )}
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Login
            </button>
          </form>
        )}
        {!loggedIn && (
          <div className="mt-4 text-center">
            <button
              onClick={generateRandomPassword}
              className="text-sm text-blue-500 hover:underline"
            >
              Generate Random Password
            </button>
          </div>
        )}
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-500 hover:underline">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

