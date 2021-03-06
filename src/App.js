// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import TweetInput from './TweetInput';
import Timeline from './Timeline';



function App() {
  
const [tweets, setTweets] = React.useState([
  {
        id : 0,
        icon:"ð½",
        displayName:"ããããå¤ªé",
        accountName:"morokoshi",
        content:"ä»æ¥ã1æ¥ããããããã¾ã"
  },
  {
        id : 1,
        icon: "ð¦",
        displayName:"ã¨ããã³ã¹",
        accountName:"evidence",
        content:"ãã«ã¿ããã¹ãã",

    }
  ]);

  const addTweet = React.useCallback((tweet) => setTweets((prev) => [tweet, ...prev]),[setTweets]);
  
  return (
  <React.Fragment>
      <TweetInput addTweet={addTweet} />
      <Timeline tweets={tweets}/>
  </React.Fragment>
  );
}

// ä¸ããããã³ã³ãã¼ãã³ããå¯¾è±¡ã®HTMLè¦ç´ ã®ä¸­ã«æç»(render)
const target = document.querySelector('#app');
ReactDOM.render(<App/>, target);

export default App;
