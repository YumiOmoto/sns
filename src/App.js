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
        icon:"🌽",
        displayName:"もろこし太郎",
        accountName:"morokoshi",
        content:"今日も1日もろこしがうまい"
  },
  {
        id : 1,
        icon: "🦐",
        displayName:"エビデンス",
        accountName:"evidence",
        content:"かにみそたべたい",

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

// 与えられたコンポーネントを対象のHTML要素の中に描画(render)
const target = document.querySelector('#app');
ReactDOM.render(<App/>, target);

export default App;
