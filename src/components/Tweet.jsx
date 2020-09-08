import React from "react";


function Tweet(props){
     //to get currnent date 
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;     
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
  
    var randate = year + '-' + month + '-' + day;

    //delete on click
    function handleClick(){
        props.onDelete(props.id);
    }

    //was testing with intervel
    // window.setInterval(function(){ // Set interval for checking
     
    //     props.onDelete();
        
    // }, 5000);

    //component
    return (
        <div className="tweet">
          
          <p>{props.content}</p>
          <h5>{props.somedate}</h5>
          <button onClick={handleClick}>DELETE</button>
        </div>
      );
}

export default Tweet;

