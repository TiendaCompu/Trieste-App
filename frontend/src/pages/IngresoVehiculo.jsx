import React from 'react';

export default function IngresoVehiculo() {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h3>Ingreso al Taller</h3>
          <p>Registro inicial operativo del vehículo.</p>
        </div>

        <button className="outline-button">
          Buscar Matrícula
        </button>
      </div>

      <div className="form-grid">
        <input placeholder="Matrícula" />
        <input placeholder="Kilometraje" />
        <input placeholder="Marca" />
        <input placeholder="Modelo" />
        <input placeholder="Año" />
        <input placeholder="Color" />
        <input placeholder="Serial de carrocería" />
        <input placeholder="Cliente / Empresa" />
      </div>

      <textarea
        className="large-textarea"
        placeholder="Observaciones indicadas por el cliente"
      ></textarea>

      <div className="actions-row">
        <button className="primary-button">
          Crear Orden de Trabajo
        </button>

        <button className="outline-button">
          Guardar Borrador
        </button>
      </div>
    </section>
  );
}
