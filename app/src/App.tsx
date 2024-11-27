import React from 'react';
import CreatorCard from './components/CreatorCard/CreatorCard.tsx';
import { useState } from 'react';
import { ViewState } from './components/ToggleView/ToggleViewState.ts';
import './App.scss';

const avatarDefaultIcon = 'https://avatars.githubusercontent.com/u/105651803?v=4';
const initialView = 'grid';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(initialView);

  return (
    <div className="grid">
      <CreatorCard
        backgroundImageUrl={'https://picsum.photos/350/250'}
        avatarUrl={avatarDefaultIcon}
        title={'Roy Guggenheim'}
        subtitlte='28 | Jerusalem'
        email={'roy.guggen@gmail.com'}
        onDetailsClick={() => console.log('Button clicked!')}
      ></CreatorCard>
      <CreatorCard
        backgroundImageUrl={'https://picsum.photos/350/250'}
        avatarUrl={avatarDefaultIcon}
        title={'Roy Guggenheim'}
        subtitlte='28 | Jerusalem'
        email={'roy.guggen@gmail.com'}
        onDetailsClick={() => console.log('Button clicked!')}
      ></CreatorCard>
      <CreatorCard
        backgroundImageUrl={'https://picsum.photos/350/250'}
        avatarUrl={avatarDefaultIcon}
        title={'Roy Guggenheim'}
        subtitlte='28 | Jerusalem'
        email={'roy.guggen@gmail.com'}
        onDetailsClick={() => console.log('Button clicked!')}
      ></CreatorCard>
      <CreatorCard
        backgroundImageUrl={'https://picsum.photos/350/250'}
        avatarUrl={avatarDefaultIcon}
        title={'Roy Guggenheim'}
        subtitlte='28 | Jerusalem'
        email={'roy.guggen@gmail.com'}
        onDetailsClick={() => console.log('Button clicked!')}
      ></CreatorCard>
      <CreatorCard
        backgroundImageUrl={'https://picsum.photos/350/250'}
        avatarUrl={avatarDefaultIcon}
        title={'Roy Guggenheim'}
        subtitlte='28 | Jerusalem'
        email={'roy.guggen@gmail.com'}
        onDetailsClick={() => console.log('Button clicked!')}
      ></CreatorCard>
    </div>
  )
}

export default App
