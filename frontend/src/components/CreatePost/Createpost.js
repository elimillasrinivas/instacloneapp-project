import { React, useState} from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header/header';
import './createpost.css'

function Createpost () {
  const [name,setName]=useState("")
  const [location,setLocation]=useState("")
  const [image,setImage]=useState("")
  const [description, setDescription] = useState("")
    const uploadPost=()=>{
      const formdata = new FormData();

      formdata.append("name", name);
      formdata.append("location", name);
      formdata.append("image_files", image);
      formdata.append("description", description);



      fetch("https://instaclone-ywit.onrender.com/uploads", {
        method: "POST",
        body: formdata,
      });
    }
    
    return (
      <>
        <div className="createpost">
          <Header />
          <div className="container">
            <input
              placeholder="author name"
              type="text" required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              placeholder="location"
              type="text" required
              value={location}
              onChange={(e) => {
                setLocation(e.target.value)
              }}
            />
            <br />
            <br />
            <textarea
              placeholder="description"
              value={description} required
              onChange={(e) => {
                setDescription(e.target.value)
              }}
            />
            <br />
            <br />
            <input
              type="file" required
              onChange={(e) => {
                setImage(e.target.files[0])
              }}
            />
            <br />
            <br />
            <Link to="/postview">
              <button className="postbtn" onClick={uploadPost} >
                Post
              </button>
            </Link>
          </div>
        </div>
      </>
    );
}

export default Createpost
