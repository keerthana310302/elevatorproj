export function Config(){
    return(
          <div className="back">
            <h1 className="setting">Lift Configuration and Settings</h1>
             <div className="box">
                <div className="bat_level">
                    <img src="https://wiki.radioreference.com/images/thumb/2/2e/APX7000BattMeter.png/30px-APX7000BattMeter.png" float="left" height="79px" width="50px"></img>
                        Battery level
                    </div>
                <div className="brand">
                    <img src="https://th.bing.com/th/id/OIP.vfYaxS53l30SKJ8fdmNZcQHaH0?pid=ImgDet&rs=1" height="79px" width="60px"></img>Lift Brand</div>
                <div className="speed">
                    <img src="https://thumbs.dreamstime.com/b/scale-speed-flat-style-vector-speedometer-isolated-illustration-symbol-174311100.jpg" height="79px" width="80px"></img>Maximum Speed</div>
                <div className="capacity">Lift Capacity</div>
                <div className="power">Power Consumed</div>
             </div>
          </div>
    );
}