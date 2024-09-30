import './App.css';
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Homepage  from './pages/Homepage.js';
import { Chatpage } from './pages/Chatpage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact/>
      <Route path="/chats" component={Chatpage}/>
    </div>
  );
}

export default App;
