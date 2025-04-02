import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function TourCards() {
  const [allTrains, setAllTrains] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/trains")
      .then((response) => response.json())
      .then((data) => {
        setAllTrains(data);
      })
      .catch((error) => console.error("Error fetching trains:", error));
  }, []);
  const handleTrainBook = (train) => {
    navigate("/booking", { state: { train } });
  };

  return (
    <>
      {allTrains.map((train) => (
        <div
          key={train.id}
          className="tour"
          onClick={() => handleTrainBook(train)}
        >
          <div className="tour-image">
            <img src={train.image} alt={train.name} />
          </div>
          <div className="tour-details">
            <h3>
              {train.departure} to {train.destination}
            </h3>
            <p>From ksh {train.price}</p>
            <p>
              Rating:{" "}
              <span id="rating">
                {train.rating
                  ? train.rating
                  : (Math.random() * 2 + 7).toFixed(1)}
              </span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default TourCards;
