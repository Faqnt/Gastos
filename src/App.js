import { useState, useEffect } from 'react';
import './App.css';
import AppRoutes from './routes';
import { BrowserRouter, Link } from 'react-router-dom';


function App() {
  // Al iniciar, intenta cargar los gastos guardados
  const [gastos, setGastos] = useState(() => {
    const gastosGuardados = localStorage.getItem('gastos');
    return gastosGuardados ? JSON.parse(gastosGuardados) : [];
  });

  // Cada vez que gastos cambia, lo guarda en localStorage
  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos));
  }, [gastos]);

  const agregarGasto = (gasto) => {
    setGastos([...gastos, gasto]);
    alert('Gasto agregado exitosamente');
  };

  const eliminarGasto = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este gasto?')) {
      setGastos(gastos.filter(gasto => gasto.id !== id));
    }
  };

 return (
  <BrowserRouter>
      <div className="app-container">
        <div className="sidebar">
          <div className="sidebar-header">
            <h2>Dashboard</h2>
          </div>

          {/* Menú */}
          <ul className="sidebar-menu">
            <li><Link to="/form" className="menu-link">Añadir gasto</Link></li>
            <li><Link to="/list" className="menu-link">Lista</Link></li>
            <li><Link to="/graph" className="menu-link">Gráficos</Link></li>
            <li><Link to="/export" className="menu-link">Exportar/Importar</Link></li>
            <li><Link className="menu-link">Configuración</Link></li>
          </ul>
        </div>
        {/* CONTENIDO PRINCIPAL (DERECHA) */}
        <div className="main-content">

          {/* Cabecera Blanca */}
          <div className="top-header">
            <h1>Gastos App</h1>
            {/*Funcion de iniciar sesion PROXIMAMENTE*/}
            {/*<div className="user-circle">U</div>*/}
          </div>
          {/* Se cargan las funciones */}
          <div className="page-container">
            <div className="card-blanca">
             <AppRoutes 
                gastos={gastos} 
                agregarGasto={agregarGasto} 
                eliminarGasto={eliminarGasto}
                setGastos={setGastos}
             />
          </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
);
}
export default App;
