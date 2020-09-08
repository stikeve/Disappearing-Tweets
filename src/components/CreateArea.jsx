import React, { useState } from "react";


function CreateArea(props) {
     //to get currnent date 
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;     
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
  
    var minDate = year + '-' + month + '-' + day;

    //initial state of tweet (single)
    const [tweet , setTweet] = useState({
        somedate: "",
        content: ""
    });

    //get the user input via onChange
    function handleChange(e){
        const {name , value} = e.target;    

        setTweet(prevTweet => {
            return{
                ...prevTweet,
                [name] : value
            };
        });
    }

    //submit tweet button onClick
    function submitTweet(event){

        var date = event.target.value;
        console.log(date);
        props.onAdd(tweet);
        setTweet({
            //  somedate: "", //tried to reset the date
            content: ""})
        event.preventDefault();
    }

    //component
  return (
    <div>
      <form>
 
        <textarea name="content" onChange={handleChange} value={tweet.content}placeholder="Tweet" rows="3" />
        <p>input Date to be deleted</p>
        <input name="somedate" onChange={handleChange} type="date" min={minDate} ></input>
        <button onClick = {submitTweet}>Add</button>
      </form>
    </div>
  );
}


 
 



  

export default CreateArea;