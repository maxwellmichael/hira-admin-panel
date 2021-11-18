import {Admin, Resource} from 'react-admin';
import {dataProvider, validatedAuthProvider} from './config';
import {SetShow, SetList, SetEdit, SetCreate} from './components/sets';
import {CategoryShow, CategoryList, CategoryEdit, CategoryCreate} from './components/categories';
import {BrandShow, BrandList, BrandEdit, BrandCreate} from './components/brands';
import {MaterialShow, MaterialList, MaterialEdit, MaterialCreate} from './components/materials';


import CustomLoginPage from './customLoginPage';

function App() {
 
  return (
    <Admin loginPage={CustomLoginPage} dataProvider={dataProvider} authProvider={validatedAuthProvider}>
      <Resource name="sets" list={SetList} show={SetShow} edit={SetEdit} create={SetCreate} />
      <Resource name="categories" list={CategoryList} show={CategoryShow} edit={CategoryEdit} create={CategoryCreate} />
      <Resource name="brands" list={BrandList} show={BrandShow} edit={BrandEdit} create={BrandCreate} />
      <Resource name="materials" list={MaterialList} show={MaterialShow} edit={MaterialEdit} create={MaterialCreate} />

    </Admin>
  );
}

export default App;
