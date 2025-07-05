import React from 'react';
import './App.css';
import Counter from './Counter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>This is a simple React Counter application.</p>
      </header>
      <main>
        <p>Counter Component will be implemented here.</p>
        <Counter />
        
        <p>Feel free to modify the counter component as needed.</p>
      </main>
      <footer className="App-footer">
        <p>&copy; 2025 My React App</p>
      </footer>
    </div>
  );
}

export default App;
