export const modules = [
  'Dashboard',
  'Ingreso al Taller',
  'Órdenes de Trabajo',
  'Presupuestos',
  'Clientes',
  'Vehículos',
  'Inventario',
  'Mecánicos',
  'Configuración'
];

export const stats = [
  { title: 'Órdenes Activas', value: '15', note: 'Vehículos en proceso' },
  { title: 'Ingresos Hoy', value: '8', note: 'Nuevos vehículos' },
  { title: 'Por Entregar', value: '5', note: 'Listos para cliente' },
  { title: 'Estimado Diario', value: '$2,450', note: 'Monto operativo' }
];

export const recentOrders = [
  { id: 'OT-2026-001', plate: 'ABC-123', vehicle: 'Toyota Corolla 2020', status: 'En proceso', total: '$450' },
  { id: 'OT-2026-002', plate: 'DEF-456', vehicle: 'Mazda 3 2019', status: 'Por entregar', total: '$320' },
  { id: 'OT-2026-003', plate: 'GHI-789', vehicle: 'Chevrolet Spark 2021', status: 'Pendiente', total: '$280' }
];
