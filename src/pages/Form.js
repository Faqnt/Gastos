import { useState } from 'react';
import '../Styles/Form.css';

const categorias = ['Comida', 'Transporte', 'Salud', 'Entretenimiento', 'Servicios', 'Otro'];

function Form({ agregarGasto }) {
  const [descripcion, setDescripcion] = useState('');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = (e) => { // Evitar que el formulario se recargue
    e.preventDefault();
    
    // Validar que todos los campos estén llenos
    if (!descripcion || !monto || !categoria) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Crear el objeto del gasto
    const nuevoGasto = {
      id: Date.now(),
      descripcion, //crea una variable descripcion con el valor de la variable descripcion
      monto: parseFloat(monto),
      categoria,
    };

    // Llamar a la función que nos pasaron desde App y le pasamos el nuevo gasto
    agregarGasto(nuevoGasto);

    // Limpiar el formulario
    setDescripcion('');
    setMonto('');
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="campo">
        <label>Descripción:</label>
        <input
          type="text"
          placeholder="Ej: Supermercado"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Monto:</label>
        <input
          type="number"
          placeholder="$0"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />
      </div>
      
      <div className="campo">
        <label>Categoría:</label>
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="">Seleccionar...</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>))}
        </select>
      </div>

      <button type="submit">Agregar Gasto</button>
    </form>
  );
}

export default Form;