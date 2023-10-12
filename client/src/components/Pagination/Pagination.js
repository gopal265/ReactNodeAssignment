import React, { useState, useEffect } from "react";
import { selectPage } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import "./Pagination.css"

const Pagination = ({users}) => {
  // get the index and users state from the store
  const {index} = useSelector(state => state.index)
 const dispatch = useDispatch()
  // here we have only three users per page so we divide total users by 3 to get total pages and store them in an array
  const len = users.length/3;
  const pages = [];
  for(let i =0; i < len;i++){
    pages.push(i+1)
  }


 

  const handlePrevPage = () => {
    dispatch(dispatch => selectPage(dispatch,index - 3))
    
  };

  const handleNextPage = () => {
    dispatch((dispatch) =>selectPage(dispatch,index +3));
  };
  return (
    <div className="container-fluid center pagination-wrapper">
      <div className="pagination">
        {/* prev button and it is disabled when index == 0  */}
        <button className="pr-2 real-button"
          onClick={handlePrevPage}
          disabled={index === 0}
        >
            <Button pageno={<i class="fa-solid fa-arrow-left"></i>} />
         
        </button>
        {/* code to get set of buttons for the no of pages i.e no of elements in the pages array */}
        {
            pages.map(num =>(
                <div className="pr-2">
                       <Button pageno={num} />
                </div>
             
            ))
        }
        {/* next button and is disabled if index+3 is greater than no of users because since there will be 3 
         per page  */}
        <button className="real-button"
          onClick={handleNextPage}
          disabled={index+3 > users.length}
        >
            <Button pageno= {<i class="fa-solid fa-arrow-right"></i>} />
        
        </button>
      </div>
    </div>
  );
};

export default Pagination;
