import React from "react";

const PostCard = (props)=>{
    return (
        <div className="post-card">
            <h1>{props.title}</h1>
            <p>{props.body}</p>
        </div>
    )
};
export default PostCard;