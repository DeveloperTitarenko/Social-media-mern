import './post.css'
import {MoreVert} from '@material-ui/icons'
import {Users} from "../../dummyData";
import {useState} from "react";

const Post = ({post}) => {
  const [like, setLike] = useState(post.like)
  const [isliked, setIsLiked] = useState(false)
  const user = Users.filter(user => user.id === post.userId)[0]

  const likeHandler = () => {
    setLike(isliked ? (prev) => prev - 1 : (prev) => prev + 1)
    setIsLiked(prev => !prev)
  }
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={user.profilePicture} alt=""/>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt=""/>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" onClick={likeHandler}/>
            <img className="likeIcon" src="assets/heart.png" alt="" onClick={likeHandler}/>
            <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post