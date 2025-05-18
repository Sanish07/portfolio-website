import { FormLabel, Switch } from '@mui/material';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './AppRouter';
import Navbar from './components/Navbar';

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </>
  );
}

export default App;
