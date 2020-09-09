import React, { useState } from "react";



function CreateArea(props) {
     //to get currnent date 
     var dtToday = new Date();
        var month = dtToday.getMonth() + 1;     
        var day = dtToday.getDate();
        var year = dtToday.getFullYear();
        var min = dtToday.getMinutes();
        var hours = dtToday.getHours();
        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
            day = '0' + day.toString();
        if(min < 10)
            min = '0' + min.toString();
        if(hours < 10)
            hours = '0' + hours.toString();
      
        var mindate = year + '-' + month + '-' + day;
        var mintime = hours+ ':' + min;

    //initial state of tweet (single)
    const [tweet , setTweet] = useState({
        somedate: "",
        content: "",
        time:""
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

       
      
        if(tweet.content !== '' && tweet.somedate !== '' &&tweet.somedate !== undefined && tweet.time !== undefined && tweet.time !== ''){
        props.onAdd(tweet);
        }else{alert("there could be any of these 2 problems    1. cannot submit empty Tweet or date/time         2. date or time invalid ")}
        document.test.reset(); //to reset state of form name (test)
        setTweet({
            //  somedate: "", //tried to reset the date
            content: "",
        })
        event.preventDefault();
    }

    //component
  return (
    <div>
      <form name="test">
 
        <textarea name="content" onChange={handleChange} value={tweet.content}placeholder="Tweet" rows="3" />
        <p>input <em>Date and Time</em> to be deleted</p>
        <input name="somedate" onChange={handleChange} type="date" min={mindate} ></input>
        <input type="time" onChange={handleChange} min={mintime} name="time" />
        <button onClick = {submitTweet}>Tweet</button>
      </form>
    </div>
  );
}


 
 



  

export default CreateArea;