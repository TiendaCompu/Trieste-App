import React from 'react';

export default function Sidebar({ modules, active, onChange }) {
  return (
    <aside className="sidebar premium-sidebar">
      <div className="brand premium-brand">
        <div className="brand-word">ZYTRONIX</div>
        <p>Sistema Electrónico Automatizado</p>
        <small>Centro de Servicio Automotriz Trieste</small>
      </div>

      <div className="nav-section-label">OPERACIÓN</div>

      <nav className="premium-nav">
        {modules.map(item => {
          const name = typeof item === 'string' ? item : item.name;
          const icon = typeof item === 'string' ? '•' : item.icon;

          return (
            <button
              key={name}
              className={active === name ? 'active' : ''}
              onClick={() => onChange(name)}
            >
              <span className="nav-icon">{icon}</span>
              <span>{name}</span>
            </button>
          );
        })}
      </nav>

      <div className="ai-widget">
        <div className="ai-orb">AI</div>
        <div>
          <strong>ZYTRONIX AI</strong>
          <small>Asistente operativo futuro</small>
        </div>
      </div>
    </aside>
  );
}
