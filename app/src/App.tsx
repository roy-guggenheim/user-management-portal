import React from 'react';
import { useState } from 'react';
import { ViewState } from './components/ToggleView/ToggleViewState.ts';
import './App.scss';

const initialView = 'grid';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(initialView);
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      Hello World!
    </>
  )
}

export default App
