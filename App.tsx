
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './views/Home';
import Shop from './views/Shop';
import Forum from './views/Forum';
import Games from './views/Games';
import Catalog from './views/Catalog';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
