import { Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import EditExpert from './EditExpert';
import ListExpert from './ListExpert';
import Menu from './Menu';
import NewExpert from './NewExpert';
const App=()=>{
  return(
    <>
      <Menu/>
      <Switch>
        <Route path="/" exact component={()=><ListExpert/>}/>
        <Route path="/new" exact component={()=><NewExpert/>}/>
        <Route path="/edit/:id" exact component={()=><EditExpert/>}/>
      </Switch>
    </>
  );
}
export default App;
