import React from 'react';
import UserCard from './components/UserCard/UserCard';
import { useState } from 'react';
import { ViewState } from './components/ToggleView/ToggleViewState.ts';
import './App.scss';

const avatarDefaultIcon = 'https://avatars.githubusercontent.com/u/105651803?v=4';
const initialView = 'grid';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(initialView);

  return (
    <div className="grid">
      <UserCard
        bgImage={'https://picsum.photos/350/250'}
        avatar={avatarDefaultIcon}
        fullName={'Roy Guggenheim'}
        age={28}
        city={'Jerusalem'}
        email={'roy.guggen@gmail.com'}
        onDetailsClick={() => console.log('Button clicked!')}
      ></UserCard>
      <UserCard
        bgImage={'https://picsum.photos/350/250'}
        avatar={avatarDefaultIcon}
        fullName={'Roy Guggenheim'}
        age={28}
        city={'Jerusalem'}
        email={'roy.guggen@gmail.com'}
        onDetailsClick={() => console.log('Button clicked!')}
      ></UserCard>
      <UserCard
        bgImage={'https://picsum.photos/350/250'}
        avatar={avatarDefaultIcon}
        fullName={'Roy Guggenheim'}
        age={28}
        city={'Jerusalem'}
        email={'roy.guggen@gmail.com'}
        onDetailsClick={() => console.log('Button clicked!')}
      ></UserCard>
      <UserCard
        bgImage={'https://picsum.photos/350/250'}
        avatar={avatarDefaultIcon}
        fullName={'Roy Guggenheim'}
        age={28}
        city={'Jerusalem'}
        email={'roy.guggen@gmail.com'}
        onDetailsClick={() => console.log('Button clicked!')}
      ></UserCard>
      <UserCard
        bgImage={'https://picsum.photos/350/250'}
        avatar={avatarDefaultIcon}
        fullName={'Roy Guggenheim'}
        age={28}
        city={'Jerusalem'}
        email={'roy.guggen@gmail.com'}
        onDetailsClick={() => console.log('Button clicked!')}
      ></UserCard>
    </div>
  )
}

export default App
