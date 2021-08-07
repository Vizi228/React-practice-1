import './App.css';
import Content from './Components/Content/Content.jsx';
import Header from './Components/Header/Header.jsx';
import Sidebar from './Components/Sidebar/Sidebar';


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
