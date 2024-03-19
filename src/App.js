import React from 'react';
import SideNavItem from './SideNavItem';
import { tips } from './config';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <SideNavItem title="Help and Tips" helpText="Help and Tips" tips={tips} />
    </div>
  );
};

export default App;
