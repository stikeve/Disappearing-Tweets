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

   

    // function checkDate(){
    //     if(tweet.somedate)
    //     {
    //         return true;
    //     }
    //     else return false;
    // }

    // function checkTime(){
    //     if(tweet.time)
    //     {
    //         return true;
    //     }
    //     else return false;
    // }
    //submit tweet button onClick
    function submitTweet(event){
        
        // && tweet.somedate !== undefined || tweet.somedate !== '' 
        // && tweet.time !== undefined || tweet.time !== ''
        
       
         if(tweet.content === ''  ){
        alert(" ERROR : cannot submit empty Tweet.")
        }else if(tweet.somedate === undefined || tweet.somedate === '' ){
            alert(" ERROR : Date cannot be empty.")
        }else if(tweet.time === undefined || tweet.time === ''){
            alert(" ERROR : Time cannot be empty.")
        }else if(Date.parse(tweet.somedate+' '+tweet.time+':00') < Date.parse(mindate+' '+mintime+':00'))
        {
            alert(" ERROR : Past time not accepted.")
        }
        else{           
            props.onAdd(tweet);
        }
        
        
       
        document.test.reset(); //to reset state of form name (test)
        setTweet({
            somedate: "",
            content: "",
            time:""
        });
        event.preventDefault();
    }

    
  


    //component
  return (
    <div>
      <form name="test">
 
        <textarea name="content" onChange={handleChange} value={tweet.content}placeholder="Tweet (Enter tweet here)" rows="3" />
        <p>input <em>Date and Time</em> to be deleted</p>
        <h6>(Past time not valid) </h6>
        <input name="somedate" onChange={handleChange} type="date" min={mindate} ></input>
        <input id="timelim" type="time" onChange={handleChange} min={mintime} name="time" />
      
        <button onClick = {submitTweet}>Tweet</button>
      </form>
    </div>
  );
}


 
 



  

export default CreateArea;