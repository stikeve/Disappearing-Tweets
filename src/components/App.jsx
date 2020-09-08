import React  , {useState}from "react";
import Header from "./Header";
import Footer from "./Footer";
import Tweet from "./Tweet";
import CreateArea from "./CreateArea";

function App() {

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

    //to store tweet(object) in a array using state to update the page
    const [tweets , setTweets] = useState([]);

    //add tweet recieved from createArea.jsx
    function addTweet(newTweet){
        setTweets(prevTweets => {
            return [...prevTweets , newTweet]
        })
    }

    //deletes tweet on the id recieved from delete function in tweet.jsx
    function deleteTweet(id){
       setTweets(prevTweets => {
         return prevTweets.filter((oneTweet , index)=>{
                return index !== id ;
           })
       })
    }
    
    //all test functions to delete tweet with a date 
    // function test3(){
    //     setTweets(test)
    // }

    // function test(){
    //     if(tweets.length !== 0){
    // for(var i = 0 ; i < tweets.length ; i++){
    //     if(tweets[i].somedate === randate ){
    //         tweets.splice(i , 1);
    //         test();
    //     }
    // }
    // return tweets;
    // }else{
    //     return [];
    // }
   
    // }
    // function test1(){
    //     for(var i = 0 ; i < tweets.length ; i++){
    //        console.log(tweets[i].somedate);
            
    //     }
    //     console.log("_____________")
   

    // }
    
    //deletes all the elements
    // function deleteTweet(id){
    //     setTweets(prevTweets => {
    //       return prevTweets.filter((oneTweet , index)=>{              
    //          if(id !== date){
    //          return index ;
    //          }
    //         })
    //     })
    //  }

  return (
    <div>
        {/* <button onClick={test}>test</button>
        <button onClick={test1}>test1</button>  test buttons*/}
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
          onDelete = {deleteTweet}
        //   test = {test3} for testing

          />
          )
      }):null}
    
      <Footer />
    </div>
  );
}

export default App;
