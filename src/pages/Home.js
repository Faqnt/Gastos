import '../Styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
        <h2>Bienvenido a tu App de Gastos</h2>
        <Link to="/form" className="home-btn">Comenzar</Link>
    </div>
  );
}

export default Home;