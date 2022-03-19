import './MainBlocks.css'

function MainBlocks(props){
    return (
        <div className="block facebook">
        <img src={props.icon} alt="" className="logo" /><span>{props.user}</span>
        <div className="number solid">{props.like}</div>
        <div className="follow">Followers</div>
        <div className= {props.arrow==='down'?"yt":"last"}><img src={`../images/icon-${props.arrow}.svg`} alt=""/>{props.today} Today</div>
      </div>
    )
}

export default MainBlocks;