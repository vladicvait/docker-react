import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";
import PostList from "./PostList";

const PostFrom = ({create}) => {
    const [post,setPost] = useState({title:'',body:''})
    const addNewPost = (e) =>{
        e.preventDefault()
        if (!post.title || !post.body) {
            alert('Vă rugăm să completați ambele câmpuri înainte de a crea un post!');
            return;
        }
    const newPost = {
            ...post,id:Date.now()
    }
    create(newPost)
        setPost({title:'',body:''})
    }
    return (
        <div>
            <form>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post,title:e.target.value})}
                    type="text"
                    placeholder="Int Title"
                />

                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post,body:e.target.value})}
                    type="text"
                    placeholder="Int Text"
                />
                <MyButton onClick={addNewPost}>Create Post</MyButton>
            </form>
        </div>
    );
};

export default PostFrom;