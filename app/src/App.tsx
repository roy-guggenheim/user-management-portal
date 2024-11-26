import React from 'react';
import ToggleView from './components/ToggleView/ToggleView.tsx';
import { useState } from 'react';
import { ViewState } from './components/ToggleView/ToggleViewState.ts';
import Row from './components/TableRow/Row/Row.tsx';
import './App.scss';
import TableHeadRow from './components/TableRow/TableHeadRow/TableHeadRow.tsx';

const avatarIcon = 'https://avatars.githubusercontent.com/u/105651803?v=4';
const initialView = 'grid';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(initialView);

  return (
    <>
      <TableHeadRow />
      <Row
        avatar={avatarIcon}
        fullName={'Roy Guggenheim'}
        age={28}
        location={'Jerusalem'}
        email={'roy.guggen@gmail.com'}
        onDetailsClick={() => console.log('Button clicked!')}
      />
      <Row
        avatar={avatarIcon}
        fullName={'Roy Guggenheim'}
        age={28}
        location={'Jerusalem'}
        email={'roy.guggen@gmail.com'}
        onDetailsClick={() => console.log('Button clicked!')}
      />
      <Row
        avatar={avatarIcon}
        fullName={'Roy Guggenheim'}
        age={28}
        location={'Jerusalem'}
        email={'roy.guggen@gmail.com'}
        onDetailsClick={() => console.log('Button clicked!')}
      />
      <Row
        avatar={avatarIcon}
        fullName={'Roy Guggenheim'}
        age={28}
        location={'Jerusalem'}
        email={'roy.guggen@gmail.com'}
        onDetailsClick={() => console.log('Button clicked!')}
      />
    </>
  )
}

export default App
