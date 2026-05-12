import React from 'react';

export default function Welcome({ onStart }) {
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
          <h3>Demo ZYTRONIX</h3>
          <p>Centro de Servicio Automotriz Trieste.</p>
        </div>

        <label>Usuario demo</label>
        <input defaultValue="Administrador" />

        <label>Taller activo</label>
        <input defaultValue="Centro de Servicio Automotriz Trieste" />

        <button className="primary-button login-button" onClick={onStart}>
          Entrar al sistema
        </button>

        <div className="login-footnote">
          <span>Vista demostrativa</span>
          <strong>Datos simulados para presentación</strong>
        </div>
      </section>
    </main>
  );
}
