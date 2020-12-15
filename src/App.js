
import './App.less';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from './login/login'
import Main from './main/main'
import Register from './register/register'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/main" component={Main} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
