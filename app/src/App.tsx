import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import SearchPage from './components/SearchPage/SearchPage.tsx';
import CreatorPage from './components/CreatorPage/CreatorPage.tsx';
import { User, fetchUsers } from './api/usersApi.ts';
import { ViewState } from './components/ToggleView/ToggleViewState.ts';
import './App.scss';

const USERS_PER_FETCH: number = 208;

function CreatorPageWrapper({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  const { userId } = useParams();

  return (
    <CreatorPage
      userId={Number(userId)}
      onBackText="Back to search"
      onBackClick={() => navigate('/')}
      onEditClick={() => console.log('Edit clicked')}
    />
  );
}

function AppContent() {
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [currentView, setCurrentView] = useState<ViewState>('grid');

  const handleUserClick = (user: User) => {
    navigate(`/creator/${user.id}`);
  };

  // Initial users fetch
  useEffect(() => {
    const fetchUsersAsync = async () => setAllUsers(await fetchUsers(0, USERS_PER_FETCH));
    fetchUsersAsync();
  }, []);

  return (
    <>
      <Header userInitials="RG" onAvatarClick={() => console.log('Avatar clicked')} />
      <Routes>
        <Route
          path="/"
          element={
            <SearchPage
              users={allUsers}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              currentView={currentView}
              setCurrentView={setCurrentView}
              onUserClick={handleUserClick}
            />
          }
        />
        <Route
          path="/creator/:userId"
          element={<CreatorPageWrapper navigate={navigate} />}
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;