import { useEffect } from 'react';
import './App.css';
import Users from './components/Users/Users';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './actions/user';

function App() {
  const dispatch = useDispatch()
  const {users,loading} = useSelector(state => state.users)


   useEffect(() => {
    dispatch(getUsers())
  
  }, [])
  return (
    <div className="App">
      {
        loading === false && users &&  <Users />
      }
     
    </div>
  );
}

export default App;
