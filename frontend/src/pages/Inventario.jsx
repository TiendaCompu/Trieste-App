import React from 'react';

const inventory = [
  { code: 'REP-001', name: 'Filtro de aceite', category: 'Consumible', stock: 2, min: 10, price: '$8', status: 'Crítico' },
  { code: 'REP-002', name: 'Aceite 5W-30', category: 'Consumible', stock: 3, min: 15, price: '$12', status: 'Crítico' },
  { code: 'REP-003', name: 'Pastillas de freno', category: 'Repuesto', stock: 1, min: 8, price: '$35', status: 'Crítico' },
  { code: 'REP-004', name: 'Bombillo H4', category: 'Eléctrico', stock: 18, min: 6, price: '$5', status: 'Disponible' },
  { code: 'REP-005', name: 'Relé universal', category: 'Eléctrico', stock: 12, min: 5, price: '$7', status: 'Disponible' }
];

export default function Inventario() {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h3>Inventario</h3>
          <p>Control de repuestos, consumibles, stock mínimo y alertas.</p>
        </div>

        <div className="actions-row compact">
          <button className="outline-button">Movimiento</button>
          <button className="primary-button">Nuevo Repuesto</button>
        </div>
      </div>

      <section className="cards mini-cards">
        <div className="card"><h3>Repuestos</h3><strong>142</strong><p>Registrados</p></div>
        <div className="card"><h3>Críticos</h3><strong>3</strong><p>Bajo mínimo</p></div>
        <div className="card"><h3>Valor Stock</h3><strong>$4,820</strong><p>Estimado</p></div>
        <div className="card"><h3>Movimientos</h3><strong>28</strong><p>Este mes</p></div>
      </section>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Stock</th>
            <th>Mínimo</th>
            <th>Precio</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => (
            <tr key={item.code}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.stock}</td>
              <td>{item.min}</td>
              <td>{item.price}</td>
              <td><span className={item.status === 'Crítico' ? 'status-pill danger-pill' : 'status-pill'}>{item.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
