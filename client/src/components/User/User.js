import React, { useState } from 'react'
import "./User.css"
import UserDetails from '../UserDetails/UserDetails'
import { useDispatch } from 'react-redux'
import { getSingleUser } from '../../actions/user'
const User = ({ user }) => {
    const dispatch = useDispatch()
    const [click,setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
        dispatch(getSingleUser(user.id))
    }
    return (
        <>
            <div className='container-fluid user-wrapper '>
                <div className='row full-height '>
                    <div className='col-lg-2 col-sm-4  center-v full-height p-2' >
                        <br />
                        <div>{user.name}</div>
                    </div>
                    <div className='col-lg-2 col-sm-4 center-v full-height p-2'>
                        <div className='user-heading pb-1'>Company</div>
                        <div>{user.company.name}</div>
                    </div>
                    <div className='col-lg-2 col-sm-4 center-v full-height p-2'>
                        <div className='user-heading pb-1'>Email</div>
                        <div> {user.email}</div>
                    </div>
                    <div className='col-lg-2 col-sm-4 center-v full-height p-2'>
                        <div className='user-heading pb-1'>Phone Number</div>
                        <div>{user.phone}</div>
                    </div>
                    <div className='col-lg-2 col-sm-4 center-v full-height p-2'>
                        <div className='user-heading pb-1'>Website</div>
                        <div>{user.website}</div>
                    </div>
                    {/* button to toggle the collapse class */}
                    <div className='col-lg-2  col-sm-4 center-v full-height p-3' onClick={handleClick}> <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle={`collapse`} // 
                        data-target={`#myCollapse${user.id}`} // Use unique data-target values
                        aria-expanded="false"
                    >
                        {click ? "Hide Details" : "View Details"}
                    </button>

                    </div>
                </div>
                {/*  used the collapse componment in bootstrap to hide and show the  below code */}
                <div key={user.id} className='pt-4 pl-2 pr-2'>

                    <div id={`myCollapse${user.id}`} className="collapse hide-wrapper p-3">
                        <UserDetails />
                    </div>
                </div>
            </div>




        </>
    )
}

export default User
