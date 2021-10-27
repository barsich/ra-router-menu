import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DriftPage from './pages/DriftPage';
import ForzaPage from './pages/ForzaPage';
import HomePage from './pages/HomePage';
import TimeAttackPage from './pages/TimeAttackPage';
import Menu from './components/Menu';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Switch>
            <Route path="/drift" component={DriftPage} />
            <Route path="/timeattack" component={TimeAttackPage} />
            <Route path="/forza" component={ForzaPage} />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
