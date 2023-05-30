import React, {useMemo, useRef, useState} from 'react';
import Post from './components/post'
import './style/app.css'
import PostList from './components/PostList'
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import PostFrom from "./components/PostFrom";
import MySelect from "./components/UI/Select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";

function App() {
  const [posts,setPosts] = useState([
    {id:1,title:'Java',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, corrupti.'},
    {id:2,title:'Java1',body:'Lorem wargb ehst dhfb eardfg etdfh brstdgf'},
    {id:3,title:'Java2',body:'aerbdsfv e5rhdfgb e5rdgv eradfgv e5hrdfgb'},
  ])
    const [filter,setFilter] = useState({sort:'',query:''})

    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() =>{
        if(filter.sort){
            return[...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    },[filter.sort,posts])
    const sortedAndSearchesPost = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    },[filter.query,sortedPosts])

    const createPost =(newPost) =>{
      setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p.id!== post.id))
    }

  return (
      <div className="App">
          <MyButton style={{ margin: "15px" }} onClick={() => setModal(true)}>
              Creaza un post
          </MyButton>
          <MyModal visible={modal} setVisibile={setModal}>
              <PostFrom create={createPost} />
          </MyModal>
          <hr style={{margin: '15px 0'}}></hr>
          <PostFilter
          filter={filter}
          setFilter={setFilter}
          />

          <PostList remove={removePost} posts={sortedAndSearchesPost} title="Lista post 1"/>

      </div>
  );
}
export default App;