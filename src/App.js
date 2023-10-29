import { useEffect, useState } from 'react';
import './App.scss';
import { Welcome } from './welcome/Welcome';
import { Main } from './main/Main';
import { Route, Routes } from 'react-router-dom';
import { MainContent } from './main/MainContent';
import { Statistics } from './statistics/Statistics';
import { Interview } from './interview/Interview';
import { About } from './about/About';
import { Questions } from './questions/Questions';

const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    tg.ready();
    tg.expand();
  }, [])

  return (
    <div className="wrapper">
      <Routes>
        <Route index element={<Welcome />} />
        <Route path={'main'} element={<Main />}>
          <Route path="/main/statistics" element={<Statistics />} />
          <Route path="/main/interview" element={<Interview />} />
          <Route path="/main/about" element={<About />} />
          <Route path="/main/questions" element={<Questions />} />
          <Route path="/main/*" element={<MainContent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
