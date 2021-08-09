import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Content from './Components/Content/Content.jsx';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header.jsx';
import Sidebar from './Components/Sidebar/Sidebar';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">

        <div className="App__container _container">
          <Header />
          <div className="Content__body">
            <Sidebar />
            <div className="Content__pages">
              <Route path='/Profile'component={Content} />
              <Route path='/Dialogs' component={Dialogs} />
            </div>
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}



export default App;
