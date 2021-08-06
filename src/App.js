import './App.css';
import Content from './Components/Content.jsx';
import Header from './Components/Header.jsx';
import Sidebar from './Components/Sidebar';


const App = () => {
  return (
    <div className="App">
      <div className="App__container _container">
      <Header />
      <div className="Content__body">
        <Sidebar />
        <Content />
      </div>

      </div>
    </div>
  );
}



export default App;
