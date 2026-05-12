import React from 'react';

const orders = [
  {
    id: 'OT-2026-001',
    plate: 'ABC-123',
    client: 'Centro de Servicio Automotriz Trieste',
    vehicle: 'Toyota Corolla 2020',
    status: 'En diagnóstico',
    mechanic: 'Jefe de Taller',
    total: '$450'
  },
  {
    id: 'OT-2026-002',
    plate: 'DEF-456',
    client: 'Cliente Jurídico Demo',
    vehicle: 'Mazda 3 2019',
    status: 'Esperando aprobación',
    mechanic: 'Carlos Mendoza',
    total: '$320'
  },
  {
    id: 'OT-2026-003',
    plate: 'GHI-789',
    client: 'Cliente Natural Demo',
    vehicle: 'Chevrolet Spark 2021',
    status: 'Listo para entregar',
    mechanic: 'Luis Herrera',
    total: '$280'
  }
];

export default function OrdenesTrabajo() {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h3>Órdenes de Trabajo</h3>
          <p>Control operativo de diagnóstico, reparación, repuestos y entrega.</p>
        </div>

        <button className="primary-button">Nueva Orden</button>
      </div>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Orden</th>
            <th>Matrícula</th>
            <th>Cliente</th>
            <th>Vehículo</th>
            <th>Estado</th>
            <th>Mecánico</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.plate}</td>
              <td>{order.client}</td>
              <td>{order.vehicle}</td>
              <td><span className="status-pill">{order.status}</span></td>
              <td>{order.mechanic}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
