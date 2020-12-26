import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Home, Scene, NotFound } from './pages'
import { Provider } from './context'
import './style/index.scss'

function App() {
  return (
    <div className="App">
      <Provider>
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/home" render={ () => <Redirect to="/" /> } />
            <Route path="/scene" component={ Scene } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
