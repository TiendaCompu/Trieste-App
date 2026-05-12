import React, { useState } from 'react';

const menu = [
  'Dashboard',
  'Ingreso al Taller',
  'Órdenes de Trabajo',
  'Presupuestos',
  'Clientes',
  'Vehículos',
  'Inventario',
  'Mecánicos',
  'Configuración'
];

export default function App() {
  const [active, setActive] = useState('Dashboard');

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="brand">
          <h1>ZYTRONIX</h1>
          <p>Sistema Electrónico Automatizado</p>
          <small>Centro de Servicio Automotriz Trieste</small>
        </div>

        <nav>
          {menu.map(item => (
            <button
              key={item}
              className={active === item ? 'active' : ''}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="content">
        <header className="topbar">
          <div>
            <h2>{active}</h2>
            <p>Plataforma SaaS para talleres automotrices</p>
          </div>

          <div className="userbox">
            <span className="badge">3</span>
            <div className="avatar"></div>
            <div>
              <strong>Administrador</strong>
              <small>admin@zytronix.online</small>
            </div>
          </div>
        </header>

        <section className="cards">
          <div className="card">
            <h3>Órdenes Activas</h3>
            <strong>15</strong>
          </div>

          <div className="card">
            <h3>Vehículos Hoy</h3>
            <strong>8</strong>
          </div>

          <div className="card">
            <h3>Por Entregar</h3>
            <strong>5</strong>
          </div>

          <div className="card">
            <h3>Ingresos</h3>
            <strong>$2,450</strong>
          </div>
        </section>

        <section className="panel">
          <h3>{active}</h3>
          <p>
            Módulo en construcción para la plataforma ZYTRONIX.
          </p>
        </section>
      </main>
    </div>
  );
}
