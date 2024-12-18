import React from "react";

const Jumbotron = (props) =>{
    const {welcome, jumbotronDescription}= props;
    return (
    <div className="card d-flex bg-success bg-opacity-10 mt-4 mb-4">

  <div className="card-body" style={{minHeight:"300px"}}>
    <div className="card-text" style={{fontSize:"60px"}}>{welcome}</div>
    <p className="card-text" style={{fontSize:"20px"}}>{jumbotronDescription}</p>
    <a href="#" className="btn btn-success">Conoce más sobre nosotros!</a>
  </div>
</div>
    )
};

export default Jumbotron;