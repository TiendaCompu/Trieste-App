import React from 'react';
import StatsGrid from '../components/StatsGrid.jsx';
import { recentOrders, stats } from '../data/modules.js';

export default function Dashboard() {
  return (
    <>
      <StatsGrid stats={stats} />

      <section className="dashboard-grid">
        <div className="panel large-panel">
          <div className="panel-header">
            <div>
              <h3>Órdenes Recientes</h3>
              <p>Movimiento operativo del taller</p>
            </div>
            <button className="outline-button">Ver todas</button>
          </div>

          <table className="orders-table">
            <thead>
              <tr>
                <th>Orden</th>
                <th>Matrícula</th>
                <th>Vehículo</th>
                <th>Estado</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.plate}</td>
                  <td>{order.vehicle}</td>
                  <td><span className="status-pill">{order.status}</span></td>
                  <td>{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="panel side-panel">
          <h3>Alertas Operativas</h3>

          <div className="alert danger">
            <strong>3 órdenes detenidas</strong>
            <span>Esperando aprobación del cliente</span>
          </div>

          <div className="alert warning">
            <strong>5 repuestos pendientes</strong>
            <span>Compras debe confirmar proveedores</span>
          </div>

          <div className="alert info">
            <strong>2 vehículos listos</strong>
            <span>Pendientes por entregar</span>
          </div>
        </div>
      </section>

      <section className="panel">
        <h3>Búsqueda rápida por matrícula</h3>
        <p>El flujo principal de ZYTRONIX comienza buscando el vehículo por su matrícula.</p>

        <div className="search-row">
          <input placeholder="Ejemplo: ABC-123" />
          <button>Buscar vehículo</button>
        </div>
      </section>
    </>
  );
}
