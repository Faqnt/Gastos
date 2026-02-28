import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import '../Styles/Graph.css';

const COLORES = ['#f52e0b', '#9727f3', '#0af316', '#eed708', '#dd8c0a', '#2abfe4'];

function Graph({ gastos }) {

  // Agrupa los montos por categoría
  const datosPorCategoria = gastos.reduce((acc, gasto) => {
    const existente = acc.find((item) => item.name === gasto.categoria);
    if (existente) {
      existente.value += gasto.monto;
    } else {
      acc.push({ name: gasto.categoria, value: gasto.monto });
    }
    return acc;
  }, []);

  if (gastos.length === 0) {
    return (
      <div className="graph-container-empty">
        <h2>No hay gastos para mostrar</h2>
      </div>
    );
  }

  return (
    <div className="graph-container">
      <h2>Gastos por Categoría</h2>
      <PieChart width={500} height={400}>
        <Pie
          data={datosPorCategoria}
          cx={250}
          cy={200}
          outerRadius={120}
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {datosPorCategoria.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORES[index % COLORES.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
        <Legend formatter={(value) => {
    const item = datosPorCategoria.find((d) => d.name === value);
    return `${value} - $${item.value.toFixed(0)}`;}} />
      </PieChart>
    </div>
  );
}

export default Graph;