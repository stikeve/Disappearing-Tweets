import React  , {useState}from "react";
import Header from "./Header";
import Footer from "./Footer";
import Tweet from "./Tweet";
import CreateArea from "./CreateArea";

function App() {



    //to store tweet(object) in a array using state to update the page
    const [tweets , setTweets] = useState([]);

    //add tweet recieved from createArea.jsx
    function addTweet(newTweet){
        setTweets(prevTweets => {
            return [...prevTweets , newTweet]
        })
    }

    //deletes tweet on the id recieved from delete function in tweet.jsx
    // function deleteTweet(id){
    //    setTweets(prevTweets => {
    //      return prevTweets.filter((oneTweet , index)=>{
    //             return index !== id ;
    //        })
    //    })
    // }
   

    window.setInterval(function(){ // Set interval for checking
        
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
      
        var randate = year + '-' + month + '-' + day;
        var rantime = hours+ ':' + min;
        // var emtime =  hours+ ':' + min+1 ;
        
        setTweets(prevTweets => {
            var id ;
            for(var i = 0 ; i < prevTweets.length ; i++){
             if(prevTweets[i].somedate === randate && prevTweets[i].time === rantime){
             id = prevTweets[i].somedate + prevTweets[i].time; 
        //  console.log(id); testing if it works
             }
        
        }
            
         return prevTweets.filter((oneTweet)=>{
             var check = oneTweet.somedate+oneTweet.time;
            return check !== id ;
       })
   })
        
    }, 500);

    


  return (
    <div>

      <Header />
      <CreateArea 
       onAdd={addTweet}   
      />
     { tweets.length > 0 ? tweets.map((oneTweet, index)=>{
          return ( <Tweet 
          key={index}
          id={index} 
          somedate={oneTweet.somedate} 
          content={oneTweet.content}
          time={oneTweet.time}
        //   onDelete = {deleteTweet}
      

          />
          )
      }):null}
    
      <Footer />
    </div>
  );
}

export default App;
