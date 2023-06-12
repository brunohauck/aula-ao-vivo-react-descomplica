import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const title = 'Aula 01 Descomplica';
  return (
    <div className="App">
       <Header title={title} />
       <Body />
    </div>
  );
}

export default App;
