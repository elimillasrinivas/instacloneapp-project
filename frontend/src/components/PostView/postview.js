import React,{useEffect, useState} from 'react'
import Postcard from '../../postcard';
import Header from '../Header/header';
import './postview.css'
const PostView=()=>{
  const [posts,setposts]=useState([]);
  useEffect(()=>{
      fetch("https://instaclone-ywit.onrender.com/all")
        .then((res) => res.json())
        .then((data) => {
          setposts(data);
        })
        .catch((err) => console.log(err));
  },[])

  return (
    <>
      <div className='postview'>
        <Header />
        <div className="card-container">
          {posts?.result
            ?.map?.((post, _id) => {
              return <Postcard post={post} key={post._id} />;
            })
            .reverse()}
        </div>
      </div>
    </>
  );
}
export default PostView