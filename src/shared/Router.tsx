import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Header from '../componants/common/Header';
import List from '../pages/List';
import Calender from '../pages/Calender';
import Quiz from '../pages/Quiz';
import Game from '../pages/Game';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/list" element={<List />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/quiz" element={<Quiz />} />
        </Route>
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
