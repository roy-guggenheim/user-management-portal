import ToggleView from './components/ToggleView/ToggleView.tsx';
import { useState } from 'react';
import { ViewState } from './components/ToggleView/ToggleViewState.ts';
import './App.scss';

const initialView = 'grid';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(initialView);

  return (
    <ToggleView currentView={currentView} onToggle={setCurrentView} />
  )
}

export default App
