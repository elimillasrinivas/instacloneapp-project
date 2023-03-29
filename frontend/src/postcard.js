import './postcard.css'
const Postcard=({post})=>{
    return (
      <>
        <section className="card">
          <section className="card-header">
            <div>
              <div className="card-header-name">{post.name}</div>
              <div className="card-header-place">{post.location}</div>
            </div>
            <span className="fa fa-ellipsis-h" aria-hidden="true"></span>
          </section>
          <section className="card-image">
            <img
              width={400}
              src={`https://instaclone-ywit.onrender.com/image/${post.file_name}`}
              alt="pictures"
            />
          </section>
          <section className="card-actions">
            <span>
              <i className="fa fa-heart-o" aria-hidden="true" ></i>
            </span>
            <span>
              <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
            </span>
            <span>{post.date.slice(0, 15)}</span>
          </section>
          <section className="likes">{post.likes} Likes</section>
          <section className="description">{post.description}</section>
        </section>
      </>
    );
}
export default Postcard