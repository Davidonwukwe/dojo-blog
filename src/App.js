
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';



function App() {
  const allRoutes = [
    {
      path: '/',
      component: <Home/>
    },
    {
      path: '/create',
      component: <Create/>
    },
    {
      path: '/blogs/:id',
      component: <BlogDetails/>
    },
    {
      path: '*',
      component: <NotFound/>
    }
  ]

 const allRoutesPaths = () => {
    return  allRoutes.map ((route, index) =>
      (<Route exact key={index} path={route.path}>
        {route.component}
    </Route>)
    )
  }

  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          { allRoutesPaths()} 
        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;