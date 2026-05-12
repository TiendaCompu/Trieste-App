import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import IngresoVehiculo from './pages/IngresoVehiculo.jsx';
import OrdenesTrabajo from './pages/OrdenesTrabajo.jsx';
import { modules } from './data/modules.js';

export default function App() {
  const [active, setActive] = useState('Dashboard');

  const renderPage = () => {
    switch (active) {
      case 'Dashboard':
        return <Dashboard />;

      case 'Ingreso al Taller':
        return <IngresoVehiculo />;

      case 'Órdenes de Trabajo':
        return <OrdenesTrabajo />;

      default:
        return (
          <section className="panel">
            <h3>{active}</h3>
            <p>Módulo en construcción para la plataforma ZYTRONIX.</p>
          </section>
        );
    }
  };

  return (
    <div className="layout">
      <Sidebar modules={modules} active={active} onChange={setActive} />

      <main className="content">
        <Topbar title={active} />

        {renderPage()}
      </main>
    </div>
  );
}
