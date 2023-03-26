
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchVideoContainer from './components/WatchVideoContainer';
import MainContainer from './components/MainContainer';
const appRouter=createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[{
    path:'/',
    element:<MainContainer/>,
  },
  {
    path:'/watch',
    element:<WatchVideoContainer/>
 }]
}])
function App() {
  
  return (
    <>
      <Header/>
      <RouterProvider router={appRouter} />    
    </>
  );
}

export default App;
