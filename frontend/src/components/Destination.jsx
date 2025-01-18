import tofro from "../assets/to-fro.svg"
function Destination() {
  return (
    <div>
      <form className="dest-form">
        <div className="form-1">
          <div className="form-1-1">
            <label>Destination</label>
            <input type="text" name="destination" />
          </div>
          <div className="to-fro">
            <img src={tofro} alt="to-sign" />
          </div>
          <div className="form-1-1">
            <label>To</label>
            <input type="text" name="to" />
          </div>
        </div>
        <div className="route">
            <ul id="route-dt">
                <li>One way</li>
                <li>Return</li>
                <li>Open return</li>
                <li>Season</li>
            </ul>
                  
        </div>
      </form>
    </div>
  );
}

export default Destination;
