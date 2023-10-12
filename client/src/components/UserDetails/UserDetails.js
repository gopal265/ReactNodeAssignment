import React from 'react'
import { useSelector } from 'react-redux'
import "./UserDetails.css"
const UserDetails = () => {
  const { user,loading } = useSelector(state => state.user)
  return (
    <>
    {
      (loading === false && user) &&

    <div className='container-fluid'>
      <div className='row head'>
        <div className='heading'>User Details</div>
   
        <div className='sub-heading'>Company Name : <span className='value'>{user.company.name}</span></div>
        <div></div>
        <div>{user.company.catchPhrase} {user.company.bs}</div>
      </div>
      <div className='row pt-3'>
        <div className='col-5'>
          <div className='heading'>Contact Details</div>
          <div className='sub-heading'>Name : <span className='value '>{user.name}</span></div>
          <div  className='sub-heading'>UserName :<span className='value'>{user.username}</span></div>
          <div  className='sub-heading'>Email :<span className='value'>{user.email}</span></div>
          <div  className='sub-heading'>Phone Number :<span className='value'>{user.phone}</span></div>
          <div  className='sub-heading'>Website :<span className='value'>{user.website}</span></div>

        </div>
        <div>
          <div className='heading'>Address</div>
          <div  className='sub-heading'>House :<span className='value'>{user.address.suite}</span></div>
          <div  className='sub-heading'>Street :<span className='value'>{user.address.street}</span></div>
          <div  className='sub-heading'>PinCode :<span className='value'>{user.address.zipcode}</span></div>
          <div className='sub-heading'>City :<span className='value'>{user.address.city}</span></div>
          <div className='heading'>Geo Location</div>
          <div className='sub-heading'>latitude : <span className='value'>{user.address.geo.lat} </span>   longitutde : <span className='value'>{user.address.geo.lng}</span> </div>

        </div>

      </div>
    </div>
    }
    </>
    
  )
}

export default UserDetails;
