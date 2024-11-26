import React from 'react';
import ToggleView from './components/ToggleView/ToggleView.tsx';
import { useState } from 'react';
import { ViewState } from './components/ToggleView/ToggleViewState.ts';
import UserRow from './components/Row/UserRow.tsx';
import './App.scss';
import HeadRow from './components/Row/HeadRow.tsx';

const avatarIcon = 'https://avatars.githubusercontent.com/u/105651803?v=4';
const initialView = 'grid';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(initialView);

  return (
    <>
      <HeadRow />
      <UserRow
        avatar={avatarIcon}
        fullName={'Roy Guggenheim'}
        age={28}
        city={'Jerusalem'}
        email={'roy.guggen@gmail.com'}
        onDetailsClick={() => console.log('Button clicked!')}
      />
      <UserRow
        avatar={avatarIcon}
        fullName={'Roy Guggenheim'}
        age={28}
        city={'Jerusalem'}
        email={'roy.guggen@gmail.com'}
        onDetailsClick={() => console.log('Button clicked!')}
      />
      <UserRow
        avatar={avatarIcon}
        fullName={'Roy Guggenheim'}
        age={28}
        city={'Jerusalem'}
        email={'roy.guggen@gmail.com'}
        onDetailsClick={() => console.log('Button clicked!')}
      />
      <UserRow
        avatar={avatarIcon}
        fullName={'Roy Guggenheim'}
        age={28}
        city={'Jerusalem'}
        email={'roy.guggen@gmail.com'}
        onDetailsClick={() => console.log('Button clicked!')}
      />
    </>
  )
}

export default App
