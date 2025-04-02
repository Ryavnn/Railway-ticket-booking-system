import { useState } from "react";
import {
  Home,
  TicketCheck,
  QrCode,
  Users,
  User,
  Search,
  CreditCard,
  Clock,
} from "lucide-react";
import "./ClerkDashboard.css";


const mockTickets = [



];

const ClerkDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [ticketSearch, setTicketSearch] = useState("");
  const [tickets, setTickets] = useState(mockTickets);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleTicketSearch = (e) => {
    e.preventDefault();
    // In real application, this would be an API call
    const foundTicket = tickets.find(
      (ticket) => ticket.id.toLowerCase() === ticketSearch.toLowerCase()
    );
    setSelectedTicket(foundTicket);
  };

  const renderDashboardContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="dashboard-overview">
            <h2>Clerk Dashboard Overview</h2>
            <div className="analytics-grid">
              <div className="analytics-card">
                <TicketCheck />
                <div>
                  <h3>{tickets.length}</h3>
                  <p>Total Tickets</p>
                </div>
              </div>
              <div className="analytics-card">
                <QrCode />
                <div>
                  <h3>{tickets.filter((t) => t.status === "Valid").length}</h3>
                  <p>Validated Tickets</p>
                </div>
              </div>
              <div className="analytics-card">
                <CreditCard />
                <div>
                  <h3>ksh 45,678</h3>
                  <p>Total Collection</p>
                </div>
              </div>
              <div className="analytics-card">
                <Clock />
                <div>
                  <h3>
                    {tickets.filter((t) => t.status === "Pending").length}
                  </h3>
                  <p>Pending Tickets</p>
                </div>
              </div>
            </div>
          </div>
        );

      case "ticket-validation":
        return (
          <div className="ticket-validation">
            <h2>Ticket Validation</h2>

            <form onSubmit={handleTicketSearch} className="ticket-search-form">
              <input
                type="text"
                placeholder="Enter Ticket ID"
                value={ticketSearch}
                onChange={(e) => setTicketSearch(e.target.value)}
                required
              />
              <button type="submit">
                <Search /> Search
              </button>
            </form>

            {selectedTicket && (
              <div className="ticket-details">
                <h3>Ticket Details</h3>
                <div className="ticket-info">
                  <p>
                    <strong>Ticket ID:</strong> {selectedTicket.id}
                  </p>
                  <p>
                    <strong>Passenger Name:</strong>{" "}
                    {selectedTicket.passengerName}
                  </p>
                  <p>
                    <strong>Train:</strong> {selectedTicket.trainName}
                  </p>
                  <p>
                    <strong>Route:</strong> {selectedTicket.route}
                  </p>
                  <p>
                    <strong>Date:</strong> {selectedTicket.date}
                  </p>
                  <p>
                    <strong>Status:</strong>
                    <span
                      className={`status-${selectedTicket.status.toLowerCase()}`}
                    >
                      {selectedTicket.status}
                    </span>
                  </p>
                </div>
                <div className="ticket-actions">
                  <button className="validate-btn">Validate Ticket</button>
                  <button className="reject-btn">Reject Ticket</button>
                </div>
              </div>
            )}
          </div>
        );

      case "recent-tickets":
        return (
          <div className="recent-tickets">
            <h2>Recent Tickets</h2>
            <table className="tickets-table">
              <thead>
                <tr>
                  <th>Ticket ID</th>
                  <th>Passenger Name</th>
                  <th>Train</th>
                  <th>Route</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket.id}>
                    <td>{ticket.id}</td>
                    <td>{ticket.passengerName}</td>
                    <td>{ticket.trainName}</td>
                    <td>{ticket.route}</td>
                    <td>{ticket.date}</td>
                    <td>
                      <span className={`status-${ticket.status.toLowerCase()}`}>
                        {ticket.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="clerk-dashboard">
      <aside className="sidebar">
        <div className="logo">RailClerk</div>
        <nav>
          <button
            className={activeSection === "dashboard" ? "active" : ""}
            onClick={() => setActiveSection("dashboard")}
          >
            <Home /> Dashboard
          </button>
          <button
            className={activeSection === "ticket-validation" ? "active" : ""}
            onClick={() => setActiveSection("ticket-validation")}
          >
            <TicketCheck /> Ticket Validation
          </button>
          <button
            className={activeSection === "recent-tickets" ? "active" : ""}
            onClick={() => setActiveSection("recent-tickets")}
          >
            <Users /> Recent Tickets
          </button>
        </nav>
      </aside>

      <main className="main-content">
        <header>
          <h1>Clerk Dashboard</h1>
          <div className="user-profile">
            <User />
            <span>Station Clerk</span>
          </div>
        </header>

        {renderDashboardContent()}
      </main>
    </div>
  );
};

export default ClerkDashboard;
