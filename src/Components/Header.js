import "./Header.css"
import  {useState} from 'react'
const Header = (props) => {
  const [isValid,setIsValid]=useState(true);

  const modeChanger=()=>{
  props.func(isValid);
    setIsValid(!isValid);
  }
    return (
      <div className="section1 ">
        <div className="social">
             <h1 className="solid">Social Media Dashboard</h1>
             <p>Total Followers: 23,004</p>
        </div>
        <div className="dark">
          <span className="d1">Dark Mode</span>
            <label className="switch">
              <input type="checkbox" checked />
              <span className="slider" onClick={modeChanger}></span>
            </label>
       </div>
     </div>
    )
}

export default Header;