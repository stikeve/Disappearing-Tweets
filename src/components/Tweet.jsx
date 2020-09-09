import React from "react";


function Tweet(props){
   

    // //delete on click (for testing)
    // function handleClick(){
    //     props.onDelete(props.id);
    // }

    

    //component
    return (
        <div className="tweet">
          
          <p>{props.content}</p>
          <h5>{props.somedate} {props.time}</h5>
          {/* <button onClick={handleClick}>DELETE</button>  for test ing */}
        </div>
      );
}

export default Tweet;

