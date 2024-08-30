import React from 'react';


const Header = () => {
  return (
    <header className="top-bar">
      <div className="logo">
        <img src="favicon.ico" alt="GoCab Logo" style={{ width: '150px' }} />
      </div>
      <div><h1 className="main">GO -&#62; CAB</h1></div>
      <nav className="top-buttons">
        <button className="buttons1">Get a ride</button>
        <button className="buttons1">Publish A Ride</button>
        <button className="buttons1">LOG IN</button>
        <button className="buttons1">SIGN UP</button>
      </nav>
    </header>
  );
};

export default Header;
