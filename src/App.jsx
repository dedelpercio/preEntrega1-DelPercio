import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemContainer from './components/ItemContainer/ItemContainer';

function App() {
  return (
    <div className="container-fluid px-4">
      <NavBar />
      <ItemsListContainer greeting="Hola, Damian." />
      <ItemContainer />
    </div>
  )
}

export default App
