import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Content from './Components/Content/Content.jsx';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header.jsx';
import Sitebar from './Components/Sitebar/Sitebar';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">

        <div className="App__container _container">
          <Header />
          <div className="Content__body">
            <Sitebar state={props.state.sitebar}/>
            <div className="Content__pages">
              <Route path='/Profile'render={ () => <Content state={props.state.profilePage}/>} />
              <Route path='/Dialogs' render={ () => <Dialogs state={ props.state.dialogsPage} />} />
            </div>
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}



export default App;
