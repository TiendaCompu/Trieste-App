import React from 'react';

const items = [
  { type: 'Servicio', description: 'Diagnóstico general', qty: 1, cost: '$25', margin: '0%', total: '$25' },
  { type: 'Repuesto', description: 'Radiador principal', qty: 1, cost: '$180', margin: '30%', total: '$234' },
  { type: 'Mano de obra', description: 'Instalación y prueba', qty: 1, cost: '$60', margin: '0%', total: '$60' },
  { type: 'Consumible', description: 'Refrigerante', qty: 2, cost: '$12', margin: '25%', total: '$30' }
];

export default function Presupuestos() {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h3>Presupuesto</h3>
          <p>Documento operativo para aprobación del cliente.</p>
        </div>

        <div className="actions-row compact">
          <button className="outline-button">Guardar</button>
          <button className="primary-button">Enviar al Cliente</button>
        </div>
      </div>

      <div className="quote-header">
        <div>
          <label>Cliente</label>
          <strong>Centro de Servicio Automotriz Trieste</strong>
        </div>
        <div>
          <label>Matrícula</label>
          <strong>ABC-123</strong>
        </div>
        <div>
          <label>Vehículo</label>
          <strong>Toyota Corolla 2020</strong>
        </div>
        <div>
          <label>Moneda</label>
          <strong>USD</strong>
        </div>
      </div>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Costo</th>
            <th>Utilidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.description}</td>
              <td>{item.qty}</td>
              <td>{item.cost}</td>
              <td>{item.margin}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="totals-box">
        <div>
          <span>Subtotal</span>
          <strong>$349</strong>
        </div>
        <div>
          <span>Descuento</span>
          <strong>$0</strong>
        </div>
        <div className="grand-total">
          <span>Total</span>
          <strong>$349</strong>
        </div>
      </div>
    </section>
  );
}
