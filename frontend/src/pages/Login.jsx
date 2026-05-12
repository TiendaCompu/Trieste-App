import React from 'react';

export default function Login({ onLogin }) {
  return (
    <main className="login-page">
      <section className="login-hero">
        <div className="login-brand">
          <h1>ZYTRONIX</h1>
          <p>Sistema Electrónico Automatizado</p>
        </div>

        <div className="login-copy">
          <span className="eyebrow">Workshop SaaS Platform</span>
          <h2>Control inteligente para talleres modernos.</h2>
          <p>
            Gestiona ingresos, órdenes, presupuestos, inventario, historial de vehículos y operación diaria desde una sola plataforma.
          </p>
        </div>

        <div className="login-kpis">
          <div><strong>24/7</strong><span>Acceso online</span></div>
          <div><strong>Multi</strong><span>Taller / empresa</span></div>
          <div><strong>IA</strong><span>Roadmap inteligente</span></div>
        </div>
      </section>

      <section className="login-card">
        <div>
          <h3>Ingresar a ZYTRONIX</h3>
          <p>Demo operativa del Centro de Servicio Automotriz Trieste.</p>
        </div>

        <label>Correo electrónico</label>
        <input defaultValue="admin@zytronix.online" />

        <label>Contraseña</label>
        <input type="password" defaultValue="demo1234" />

        <button className="primary-button login-button" onClick={onLogin}>
          Entrar al sistema
        </button>

        <div className="login-footnote">
          <span>Modo demo</span>
          <strong>Sin conexión a base de datos todavía</strong>
        </div>
      </section>
    </main>
  );
}
