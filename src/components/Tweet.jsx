import Actions from "./Actions";
import Message from "./Message";
import User from "./User";
import ProfileImage from "./profileImage";// import User from "./components/User";
import Timestamp from "./Timestamp";

function Tweet(props) {
  const {name, image, handle} = props.tweet.user
  const{timestamp, message} = props.tweet
  return (
    <div className="tweet">
    <ProfileImage image= {image}/>

      <div className="body">
        <div className="top">
      <User name = {name} handle = {handle}/>

          < Timestamp timestamp= {timestamp}/>
        </div>

        <Message message = {message}/>
          
       
<Actions/>

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
