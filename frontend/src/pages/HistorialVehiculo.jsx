import React from 'react';

const history = [
  {
    date: '12/01/2026',
    order: 'OT-2026-001',
    reason: 'Recalentamiento',
    work: 'Cambio de radiador, refrigerante y prueba de presión',
    mechanic: 'Carlos Mendoza',
    total: '$349'
  },
  {
    date: '18/10/2025',
    order: 'OT-2025-087',
    reason: 'Mantenimiento preventivo',
    work: 'Cambio de aceite, filtro y revisión general',
    mechanic: 'Luis Herrera',
    total: '$95'
  },
  {
    date: '02/06/2025',
    order: 'OT-2025-041',
    reason: 'Ruido en tren delantero',
    work: 'Diagnóstico de suspensión y ajuste general',
    mechanic: 'Jefe de Taller',
    total: '$60'
  }
];

export default function HistorialVehiculo() {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h3>Historial del Vehículo</h3>
          <p>Consulta cronológica de trabajos, costos, mecánicos y observaciones.</p>
        </div>
      </div>

      <div className="search-row">
        <input placeholder="Buscar por matrícula: ABC-123" />
        <button>Buscar historial</button>
      </div>

      <div className="vehicle-summary">
        <div>
          <span>Matrícula</span>
          <strong>ABC-123</strong>
        </div>
        <div>
          <span>Vehículo</span>
          <strong>Toyota Corolla 2020</strong>
        </div>
        <div>
          <span>Cliente</span>
          <strong>Centro de Servicio Automotriz Trieste</strong>
        </div>
        <div>
          <span>Visitas</span>
          <strong>3</strong>
        </div>
      </div>

      <div className="timeline">
        {history.map(item => (
          <div className="timeline-item" key={item.order}>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-card">
              <div className="panel-header">
                <div>
                  <h4>{item.order} · {item.reason}</h4>
                  <p>{item.work}</p>
                </div>
                <strong>{item.total}</strong>
              </div>
              <small>Mecánico: {item.mechanic}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
