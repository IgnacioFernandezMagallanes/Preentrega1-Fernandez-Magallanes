import './App.css';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemsListContainer/ItemsListContainer';

function App() {

  return (
    <div className="App">
      <NavBar  navbarLogo={'Nutri Luna'}/>
      <ItemListContainer greeting={'Esto es el greeting de prueba'} />
    </div>
  );
}

export default App;
