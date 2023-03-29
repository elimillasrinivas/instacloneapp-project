import { Link } from 'react-router-dom'
import './header.css'
const Header=()=>{
    return (
      <>
        <nav className="header">
          <section className="logo">
            <Link to="/postview">
              <img id='instalogo' src={require("../../Images/logo.png")} alt="logo" />
            </Link>
            <span className="instaclone">Instaclone</span>
            <hr width={900}/>
          </section>
          <section className="camera-icon">
            <Link to="/createpost">
              <img
                className="camera"
                src={require("../../Images/camera.png")}
                alt="camera-logo"
              />
            </Link>
          </section>
        </nav>
      </>
    );
}
export default Header