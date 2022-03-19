import './OverviewBlock.css'
function OverviewBlock(props){
    return (
        <div className="block2">
        <div className="flexy">
          <div className="view">{props.state}</div>
          <img src={props.icon} alt=""/>
        </div>
        <div className="flexy">
          <div className="digit solid">{props.like}</div>
          <div className= {props.arrow==='down'?"yt":"percent"}>
            <img src={`../images/icon-${props.arrow}.svg`}  alt="" />
            {props.today}
          </div>
        </div>
      </div>
    )
}

export default OverviewBlock;