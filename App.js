import { BrowserRouter,Route,Switch}  from 'react-router-dom';
import './App.css';
// import  {styled}  from 'styled-components';
import Headers from './Components/Headers';
import SimpleBottomNavigation from './Components/MainNav';
import { Container } from 'react-bootstrap';
import Movies from './Components/Pages/Movies/Movies';
import Trending from './Components/Pages/Trending/Trending';
import Search from './Components/Pages/Search/Search';
import Series from './Components/Pages/Series/Series'; 
function App() {
  return(
      <>
      <BrowserRouter>
    <Headers/>
    <div className="app">
   <Container>
     <Switch>
       <Route path='/Trending' component={Trending} exact  />
       <Route path='/Movies' component={Movies}/>
       <Route path='/Series' component={Series}/>
       <Route path='/Search' component={Search}/>
     </Switch>
   </Container>
    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>
    </>
  );
}

export default App;
