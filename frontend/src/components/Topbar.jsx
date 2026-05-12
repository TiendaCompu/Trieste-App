import React from 'react';

export default function Topbar({ title }) {
  return (
    <header className="topbar">
      <div>
        <h2>{title}</h2>
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
  );
}
