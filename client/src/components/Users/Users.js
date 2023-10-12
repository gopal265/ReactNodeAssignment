import React, { useEffect ,useState} from 'react'
import { getUsers } from '../../actions/user'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import User from '../User/User'
import Pagination from '../Pagination/Pagination'
import "./Users.css"
const Users = () => {

  const { users, loading } = useSelector(state => state.users)
  const { index } = useSelector(state => state.index)
  const dispatch = useDispatch()

  // State variables to manage filtering and sorting
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [sortBy, setSortBy] = useState('name');
  const [search,setSearch] = useState("")
  
  // Function to handle filtering based on a search term
  const handleFilter = (searchTerm) => {
     setSearch(searchTerm)
     console.log(searchTerm)
    if(searchTerm == "" ){
      setFilteredUsers(users)
      return
    }
      const filtered = users.filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
   
      setFilteredUsers(filtered);
  };

  // Function to handle sorting based on a property
  const handleSort = (property) => {
      const sorted = [...filteredUsers].sort((a, b) =>
          a[property] > b[property] ? 1 : -1
      );
      setSortBy(property);
      setFilteredUsers(sorted);
  };

  // Function to clear filters and show all users
  const clearFilters = () => {
  
      setFilteredUsers(users);
      setSearch('')
      setSortBy('name');
  };

 
  return (
    <div className='container-fluid'>
      <div className='search p-3 '>
        <input
          type="text"
          placeholder="Filter by name"
          value={search}
          onChange={(e) => handleFilter(e.target.value)}
        />
        <button className="btn btn-info ml-3" onClick={() => handleSort('name')}>
          Sort by Name
        </button>
        <button className="btn btn-info ml-3" onClick={() => handleSort('email')}>
          Sort by Email
        </button>
        <button className="btn btn-info ml-3" onClick={clearFilters}>Clear Filters</button>
 </div>

      { filteredUsers.slice(index, index + 3).map(user => (
        <div className='container-fluid p-2'>
          <User user={user} key={user.id} />
        </div>
      ))}
      {loading == false && users &&
        <Pagination  users={filteredUsers}/>}

    </div>
  )
}

export default Users
