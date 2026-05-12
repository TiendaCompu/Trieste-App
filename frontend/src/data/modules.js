export const modules = [
  { name: 'Dashboard', icon: '⌂' },
  { name: 'Ingreso al Taller', icon: '🚘' },
  { name: 'Órdenes de Trabajo', icon: '▤' },
  { name: 'Presupuestos', icon: '◈' },
  { name: 'Historial Vehículo', icon: '◷' },
  { name: 'Clientes', icon: '♧' },
  { name: 'Vehículos', icon: '▱' },
  { name: 'Inventario', icon: '▦' },
  { name: 'Mecánicos', icon: '⚙' },
  { name: 'Configuración', icon: '◉' }
];

export const stats = [
  { title: 'Órdenes Activas', value: '15', note: 'Vehículos en proceso', icon: '🔧' },
  { title: 'Ingresos Hoy', value: '8', note: 'Nuevos vehículos', icon: '🚗' },
  { title: 'Por Entregar', value: '5', note: 'Listos para cliente', icon: '✅' },
  { title: 'Estimado Diario', value: '$2,450', note: 'Monto operativo', icon: '$' }
];

export const recentOrders = [
  { id: 'OT-2026-001', plate: 'ABC-123', vehicle: 'Toyota Corolla 2020', status: 'En proceso', total: '$450' },
  { id: 'OT-2026-002', plate: 'DEF-456', vehicle: 'Mazda 3 2019', status: 'Por entregar', total: '$320' },
  { id: 'OT-2026-003', plate: 'GHI-789', vehicle: 'Chevrolet Spark 2021', status: 'Pendiente', total: '$280' }
];
