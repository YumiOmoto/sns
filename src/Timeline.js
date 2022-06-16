import React from 'react';
import Tweet from './Tweet';
// import App from './App';

function Timeline(props) {
    const tweetList = props.tweets.map((tw) => (
        <Tweet
            key={tw.id}
            icon={tw.icon}
            displayName={tw.displayName}
            accountName={tw.accountName}
            content={tw.content}
        />
    ));

    return <div className="timeline">{tweetList}</div>;
}

export default Timeline;