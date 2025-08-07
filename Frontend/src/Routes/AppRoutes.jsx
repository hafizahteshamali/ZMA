import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../pages/home/Home';
import AIDevelopment from '../pages/service/AiDevelopment/AIDevelopment';
import WebDevelopment from '../pages/service/WebDevelopment/WebDevelopment';
import ITSolutions from '../pages/service/ItSolutions/ITSolutions';
import GraphicDesigning from '../pages/service/GraphicDesigning/GraphicDesigning';
import Error from '../pages/Error/Error';
import About from '../pages/about/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="service/ai-development" element={<AIDevelopment />} />
        <Route path="service/web-development" element={<WebDevelopment />} />
        <Route path="service/it-solutions" element={<ITSolutions />} />
        <Route path="service/graphic-designing" element={<GraphicDesigning />} />
        <Route path='/about-us' element={<About />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
