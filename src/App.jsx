import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';

function App() {
  return (
    <div className="container-fluid px-4">
      <NavBar />
      <ItemsListContainer greeting="Hola, Damian." />
    </div>
  )
}

export default App
