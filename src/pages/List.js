import '../Styles/List.css';

function List({ gastos, eliminarGasto }) {
  {/* Calcula el total */}
  const total = gastos.reduce((suma, gasto) => suma + gasto.monto, 0);
  if (gastos.length === 0) {
    return (
      <div className="lista-vacia">
        <h2>No hay gastos registrados aún</h2>
      </div>
    );
  }
  return (
    <div className="lista-gastos">
      <h2>Historial de Gastos</h2>
      {gastos.map((gasto) => (
        <div key={gasto.id} className="gasto-item">
          <div className="gasto-info">
            <h3>{gasto.descripcion}</h3>
          </div>
          <div className="gasto-acciones">
            <span className="monto">${gasto.monto.toFixed(2)}</span>
            <button 
              className="btn-eliminar"
              onClick={() => eliminarGasto(gasto.id)}
            >🗑️</button>
          </div>
        </div>
      ))}
      <div className="info-total">
        <p><strong>Total gastado en (mes): ${total}</strong></p>
      </div>
    </div>
  );
}
export default List;