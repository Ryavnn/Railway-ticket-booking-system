import { useEffect, useState } from "react";
import { Home, Train, Users, User } from "lucide-react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [trains, setTrains] = useState([]);
  const [clerks, setClerks] = useState([]);

  const [newTrain, setNewTrain] = useState({
    name: "",
    to: "",
    fro:"",
    price: "",
    seats: "",
  });

  const [newClerk, setNewClerk] = useState({
    name: "",
    email: "",
    station: "",
  });

  // Fetch Trains
  const fetchTrains = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/trains");
      const data = await response.json();
      if (response.ok) {
        setTrains(data);
      }
    } catch (error) {
      console.error("Error fetching trains:", error);
    }
  };

  // Fetch Clerks
  const fetchClerks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/clerks");
      const data = await response.json();
      if (response.ok) {
        setClerks(data);
      }
    } catch (error) {
      console.error("Error fetching clerks:", error);
    }
  };

  useEffect(() => {
    fetchTrains();
    fetchClerks();
  }, []);

  const handleAddTrain = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/api/trains", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTrain),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Train added successfully!");
        setNewTrain({ name: "", route: "", price: "", seats: "" });
        fetchTrains();
      } else {
        alert(data.message || "Failed to add train");
      }
    } catch (error) {
      console.error("Error adding train:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleAddClerk = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/api/clerks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newClerk),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Clerk added successfully!");
        setNewClerk({ name: "", email: "", station: "" });
        fetchClerks(); // Refresh the clerks list
      } else {
        alert(data.message || "Failed to add clerk");
      }
    } catch (error) {
      console.error("Error adding clerk:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <div className="logo">RailAdmin</div>
        <nav>
          <button
            className={activeSection === "dashboard" ? "active" : ""}
            onClick={() => setActiveSection("dashboard")}
          >
            <Home /> Dashboard
          </button>
          <button
            className={activeSection === "trains" ? "active" : ""}
            onClick={() => setActiveSection("trains")}
          >
            <Train /> Trains
          </button>
          <button
            className={activeSection === "clerks" ? "active" : ""}
            onClick={() => setActiveSection("clerks")}
          >
            <Users /> Clerks
          </button>
        </nav>
      </aside>

      <main className="main-content">
        <header>
          <h1>Admin Dashboard</h1>
          <div className="user-profile">
            <User />
            <span>Admin User</span>
          </div>
        </header>

        {activeSection === "dashboard" && (
          <div className="dashboard-overview">
            <h2>Dashboard Overview</h2>
            <div className="analytics-grid">
              <div className="analytics-card">
                <Train />
                <div>
                  <h3>{trains.length}</h3>
                  <p>Total Trains</p>
                </div>
              </div>
              <div className="analytics-card">
                <Users />
                <div>
                  <h3>{clerks.length}</h3>
                  <p>Total Clerks</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "trains" && (
          <div className="trains-management">
            <h2>Train Management</h2>
            <form onSubmit={handleAddTrain} className="add-train-form">
              <input
                type="text"
                placeholder="Train Name"
                value={newTrain.name}
                onChange={(e) =>
                  setNewTrain({ ...newTrain, name: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Route"
                value={newTrain.route}
                onChange={(e) =>
                  setNewTrain({ ...newTrain, route: e.target.value })
                }
                required
              />
              <input
                type="number"
                placeholder="Price"
                value={newTrain.price}
                onChange={(e) =>
                  setNewTrain({ ...newTrain, price: e.target.value })
                }
                required
              />
              <input
                type="number"
                placeholder="Total Seats"
                value={newTrain.seats}
                onChange={(e) =>
                  setNewTrain({ ...newTrain, seats: e.target.value })
                }
                required
              />
              <button type="submit">Add Train</button>
            </form>
          </div>
        )}

        {activeSection === "clerks" && (
          <div className="clerks-management">
            <h2>Clerk Management</h2>
            <form onSubmit={handleAddClerk} className="add-clerk-form">
              <input
                type="text"
                placeholder="Clerk Name"
                value={newClerk.name}
                onChange={(e) =>
                  setNewClerk({ ...newClerk, name: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={newClerk.email}
                onChange={(e) =>
                  setNewClerk({ ...newClerk, email: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Station"
                value={newClerk.station}
                onChange={(e) =>
                  setNewClerk({ ...newClerk, station: e.target.value })
                }
                required
              />
              <button type="submit">Add Clerk</button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
