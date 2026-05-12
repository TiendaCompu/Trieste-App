import React from 'react';

export default function Configuracion() {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h3>Configuración del Taller</h3>
          <p>Personalización de datos, moneda, tasas y preferencias operativas.</p>
        </div>

        <button className="primary-button">Guardar Cambios</button>
      </div>

      <div className="settings-grid">
        <div className="settings-card">
          <h4>Identidad del Taller</h4>
          <div className="form-grid single">
            <input placeholder="Nombre del taller" defaultValue="Centro de Servicio Automotriz Trieste" />
            <input placeholder="RIF / Identificación fiscal" defaultValue="J-00000000-0" />
            <input placeholder="Teléfono / WhatsApp" defaultValue="+58 000-0000000" />
            <input placeholder="Correo" defaultValue="contacto@trieste.com" />
            <textarea className="large-textarea compact-textarea" placeholder="Dirección fiscal"></textarea>
          </div>
        </div>

        <div className="settings-card">
          <h4>Monedas y Tasas</h4>
          <div className="form-grid single">
            <select defaultValue="USD">
              <option value="USD">Moneda principal: USD</option>
              <option value="VES">Moneda principal: VES</option>
              <option value="EUR">Moneda principal: EUR</option>
            </select>
            <input placeholder="Tasa USD / VES" defaultValue="36.50" />
            <input placeholder="Tasa EUR / VES" defaultValue="39.20" />
            <input placeholder="Fecha de tasa" defaultValue="2026-05-12" />
          </div>
        </div>

        <div className="settings-card">
          <h4>Operación</h4>
          <div className="form-grid single">
            <select defaultValue="manual">
              <option value="manual">Aprobación manual de presupuestos</option>
              <option value="digital">Aprobación digital del cliente</option>
            </select>
            <select defaultValue="yes">
              <option value="yes">Controlar comisiones de mecánicos</option>
              <option value="no">No controlar comisiones</option>
            </select>
            <select defaultValue="yes">
              <option value="yes">Alertar stock mínimo</option>
              <option value="no">No alertar stock mínimo</option>
            </select>
          </div>
        </div>

        <div className="settings-card">
          <h4>Marca Visual</h4>
          <div className="brand-preview">
            <strong>ZYTRONIX</strong>
            <span>Sistema Electrónico Automatizado</span>
            <small>El logo e identidad visual del taller serán configurables.</small>
          </div>
        </div>
      </div>
    </section>
  );
}
