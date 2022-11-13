
import './App.css';
import NavBar from './components/NavBar/NavBar';
import NavBarMain from './components/NavBarMain/NavBarMain';

function App() {
  return (
    <div className="App">
      <div className='header-main'>
        <NavBar/>
        <NavBarMain/>
      </div>
    </div>
  );
}

export default App;
