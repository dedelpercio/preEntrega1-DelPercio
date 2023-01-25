import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Categories from './components/Categories/Categories.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="container-fluid px-4">
      <NavBar />
      <ItemListContainer greeting="Hola, Damian." />
      <Categories title="Categorias" />
    </div>
  )
}

export default App
