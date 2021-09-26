import {Admin, Resource} from 'react-admin';
import {dataProvider, validatedAuthProvider} from './config';
import {SetShow, SetList, SetEdit, SetCreate} from './components/sets';
import CustomLoginPage from './customLoginPage';

function App() {
 
  return (
    <Admin loginPage={CustomLoginPage} dataProvider={dataProvider} authProvider={validatedAuthProvider}>
      <Resource name="sets" list={SetList} show={SetShow} edit={SetEdit} create={SetCreate} />

    </Admin>
  );
}

export default App;
