import tofro from "../assets/to-fro.svg";
function Destination() {
  return (
    <div>
      <form className="dest-form">
        <div className="form-1">
          <div className="form-1-1">
            <label>Destination</label>
            <input type="text" name="destination" className="dest-input" />
          </div>
          <div className="to-fro">
            <img src={tofro} alt="to-sign" />
          </div>
          <div className="form-1-1">
            <label>To</label>
            <input type="text" name="to" className="dest-input" />
          </div>
        </div>
        <div className="route">
          <ul id="route-dt">
            <li>One way</li>
            <li>Return</li>
            <li>Open return</li>
            <li>Season</li>
          </ul>
          <div className="route-details">
            <div className="route-details-1">
              <p>Out</p>
              <input type="date" name="out-date" id="" />
              <input type="time" name="out-time" id="" />
            </div>
            <div className="route-details-1">
              <p>Return</p>
              <input type="date" name="out-date" id="" />
              <input type="time" name="out-time" id="" />
            </div>
            <div className="passengers">
              <p>Add passengers:</p>
              <button className="passenger-btn">Add passengers</button>
            </div>

          </div>
        <input type="submit" value="Submit" className="dest-btn"/>
        </div>
      </form>
    </div>
  );
}

export default Destination;
