import React from 'react';
import MyButton from "./UI/Button/MyButton";

const Post = (props) =>{

    return(
        <div className="post">
            <div className="post_content">
                <strong>{props.number} {props.post.title}</strong>
                <div>
                {props.post.body}
                </div>
            </div>
            <div className="post_btns"> 
                <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
            </div>
        </div>
);
};
export default Post;