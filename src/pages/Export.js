import '../Styles/Export.css';

function Export({ gastos, setGastos }) {

  const exportarJSON = () => {
    const blob = new Blob([JSON.stringify(gastos, null, 2)], { type: 'application/json' });
    descargar(blob, 'gastos.json');
  };

  const importarJSON = (e) => {
    const archivo = e.target.files[0];
    if (!archivo) return;

    const reader = new FileReader();
    reader.onload = (evento) => {
      try {
        const datos = JSON.parse(evento.target.result);
        if (window.confirm(`¿Importar ${datos.length} gastos? Esto reemplazará los actuales.`)) {
          setGastos(datos);
        }
      } catch (error) {
        alert('El archivo no es válido');
      }
    };
    reader.readAsText(archivo);
  };

  const descargar = (blob, nombreArchivo) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nombreArchivo;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      <h2>Exportar / Importar Gastos</h2>
      <div className="container-buttons">
        <button className="exportCSV-btn" onClick={exportarJSON}>Exportar JSON</button>
        <input 
          type="file" 
          accept=".json" 
          id="importar-input"
          style={{ display: 'none' }} 
          onChange={importarJSON} 
        />
        <button className="exportCSV-btn" onClick={() => document.getElementById('importar-input').click()}>
          Importar JSON
        </button>
      </div>
    </div>
  );
}


export default Export;