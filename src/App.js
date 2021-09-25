import {Admin, Resource} from 'react-admin';
import {dataProvider, authProvider} from './config';
import {SetShow, SetList, SetEdit, SetCreate} from './components/sets';
import CustomLoginPage from './customLoginPage';

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource loginPage={CustomLoginPage} name="sets" list={SetList} show={SetShow} edit={SetEdit} create={SetCreate} />

    </Admin>
  );
}

export default App;
