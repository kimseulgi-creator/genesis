import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import List from '../pages/List';
import Calender from '../pages/Calender';
import Quiz from '../pages/Quiz';
import Loading1 from '../componants/Loading/Loading1';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading1 />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list" element={<List />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
