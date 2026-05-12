import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { modules } from './data/modules.js';

export default function App() {
  const [active, setActive] = useState('Dashboard');

  return (
    <div className="layout">
      <Sidebar modules={modules} active={active} onChange={setActive} />

      <main className="content">
        <Topbar title={active} />

        {active === 'Dashboard' ? (
          <Dashboard />
        ) : (
          <section className="panel">
            <h3>{active}</h3>
            <p>Módulo en construcción para la plataforma ZYTRONIX.</p>
          </section>
        )}
      </main>
    </div>
  );
}
