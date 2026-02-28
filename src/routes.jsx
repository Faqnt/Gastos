import { Routes, Route } from 'react-router-dom';
import Form from './pages/Form';
import Graph from './pages/Graph';
import List from './pages/List';
import Export from './pages/Export';
import Home from './pages/Home';

// Recibimos las props desde App.js
const AppRoutes = ({ gastos, agregarGasto, eliminarGasto, setGastos }) => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/form" element={<Form agregarGasto={agregarGasto} />} />
      <Route path="/graph" element={<Graph gastos={gastos} />} />
      <Route path="/list" element={<List gastos={gastos} eliminarGasto={eliminarGasto} />} />
      <Route path="/export" element={<Export gastos={gastos} setGastos={setGastos} />} />
    </Routes>
  );
};
export default AppRoutes;