import React from 'react';

export default function Sidebar({ modules, active, onChange }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <h1>ZYTRONIX</h1>
        <p>Sistema Electrónico Automatizado</p>
        <small>Centro de Servicio Automotriz Trieste</small>
      </div>

      <nav>
        {modules.map(item => (
          <button
            key={item}
            className={active === item ? 'active' : ''}
            onClick={() => onChange(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}
