import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ShowIndidualproduct() {
  const getIndividualProduct = useLocation();
  const [displayIndividualObject, setdisplayIndividualObject] = useState({})
  useEffect(()=>{
    setdisplayIndividualObject(getIndividualProduct.state[0])
  },[]);
  const increament = ()=>{
    displayIndividualObject["count"] = (displayIndividualObject["count"]||0)+1;
    setdisplayIndividualObject({...displayIndividualObject}) 

  }
  const decreament = ()=>{
    displayIndividualObject["count"] = (displayIndividualObject["count"]||0)-1;
    setdisplayIndividualObject({...displayIndividualObject}) 

  }
  return (
    <div>
      <div className="row">
        <div style={{ display: "flex" }}>
          <div className="card col-5 col-md-3">
            <p style={{ color: "red" }}>product name is:{displayIndividualObject.name}</p>
            <div style={{ display: "flex" }}>
              <img
                src={displayIndividualObject.photo_url}
                style={{ height: "100px", width: "100px" }}
              />
              <button onClick={increament }>+</button>
              <button onClick={ decreament}> - </button>
              <p>count :{displayIndividualObject.count >= 0 ? displayIndividualObject.count : 0}</p>
            </div>
            <p>{displayIndividualObject.quantity}</p>
            <p>{displayIndividualObject.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowIndidualproduct;
