import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Time = () => <span className="time">3h ago</span>;
const ReplyButton = () => <i className="fa fa-reply reply-button" />;
const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;
const LikeButton = () => <i className="fa fa-heart like-button" />;
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

function Avatar({ hash }) {
  var url = `https://www.gravatar.com/avatar/${hash}`;
  return (
  <img
  src={url}
  className="avatar"
  alt="avatar" />
  );
  }
// add the testTweet object, which
// will serve as our fake data
var testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
  handle: "catperson",
  name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37"
  }

function Tweet({tweet}) { //1. update the Tweet component to accept a tweet prop
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <NameWithHandle />
        <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Message() {
  return <div className="message">This is less than 150 characters.</div>;
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Kapil</span>
      <span className="handle">@yourKapil</span>
    </span>
  );
}

// update the call to ReactDOM.render to pass
// the testTweet object into the tweet prop.

ReactDOM.render(<Tweet tweet = {testTweet} />, document.querySelector("#root"));
