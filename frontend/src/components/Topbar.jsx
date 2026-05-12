import React from 'react';

export default function Topbar({ title }) {
  return (
    <header className="topbar premium-topbar">
      <div>
        <h2>{title}</h2>
        <p>Plataforma SaaS para talleres automotrices</p>
      </div>

      <div className="topbar-actions">
        <div className="search-box">
          <input placeholder="Buscar vehículo, orden o cliente..." />
        </div>

        <div className="notification-dot">3</div>

        <div className="userbox premium-userbox">
          <div className="avatar premium-avatar"></div>

          <div>
            <strong>Administrador</strong>
            <small>admin@zytronix.online</small>
          </div>
        </div>
      </div>
    </header>
  );
}
