import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './routers/router';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
