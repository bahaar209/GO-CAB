import React from 'react';
import './App.css'; // Import your CSS file

// Import your components
import Header from './components/Header';
import TopImage from './components/TopImage';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <TopImage />
      <SearchBar />
    </div>
  );
}

export default App;
