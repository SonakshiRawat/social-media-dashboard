import './OverviewBlock.css'
function OverviewBlock(props){
    return (
        <div className="block2">
        <div className="flexy">
          <div className="view">{props.state}</div>
          <img src="images/icon-facebook.svg" alt=""/>
        </div>
        <div className="flexy">
          <div className="digit solid">{props.like}</div>
          <div className="percent">
            <img src="images/icon-up.svg" alt="" />
            {props.today}
          </div>
        </div>
      </div>
    )
}

export default OverviewBlock;