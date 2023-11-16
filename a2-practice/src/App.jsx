import { Admin, EditGuesser, Resource, ShowGuesser } from 'react-admin';
import { PocketBaseProvider } from './ra-pocketbase';
import { TodoList, TodoEdit, TodoCreate, TodoShow } from './todos';
import { UserList } from './users';

const pbProvider = PocketBaseProvider('https://fuzzy-goldfish-5gq4695pwj5ghv6rp-8090.app.github.dev/')

function App() {
  return (
    <Admin dataProvider={pbProvider.dataProvider} >
      <Resource name='todos' list={TodoList} edit={TodoEdit} create={TodoCreate} show={TodoShow} recordRepresentation='description'/>
      <Resource name='users' list={UserList} recordRepresentation='full_names' />
    </Admin>    
  )
};

export default App;
