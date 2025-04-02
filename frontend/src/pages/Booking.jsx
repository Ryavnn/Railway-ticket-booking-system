import  { useState } from "react";
import { useNavigate } from "react-router";

const RailwayBookingForm = () => {
const navigate = useNavigate()

  const initialPassengerData = {
    firstName: "",
    lastName: "",
    nationalId: "",
    disabilities: "",
    hasDisabilities: false,
    luggageWeight: "",
  };

  const [formData, setFormData] = useState({
    passengers: [{ ...initialPassengerData }],
    email: "",
    phone: "",
    journeyDate: "",
  });

  const [errors, setErrors] = useState({
    passengers: [{}],
    email: "",
    phone: "",
    journeyDate: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e, passengerIndex) => {
    const { name, value, type, checked } = e.target;

    if (passengerIndex !== undefined) {
      // Handle passenger field changes
      const updatedPassengers = [...formData.passengers];
      updatedPassengers[passengerIndex] = {
        ...updatedPassengers[passengerIndex],
        [name]: type === "checkbox" ? checked : value,
      };

      setFormData({
        ...formData,
        passengers: updatedPassengers,
      });
    } else {
      // Handle contact/journey fields
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const addPassenger = () => {
    setFormData({
      ...formData,
      passengers: [...formData.passengers, { ...initialPassengerData }],
    });

    setErrors({
      ...errors,
      passengers: [...errors.passengers, {}],
    });
  };

  const removePassenger = (index) => {
    if (formData.passengers.length > 1) {
      const updatedPassengers = [...formData.passengers];
      updatedPassengers.splice(index, 1);

      const updatedPassengerErrors = [...errors.passengers];
      updatedPassengerErrors.splice(index, 1);

      setFormData({
        ...formData,
        passengers: updatedPassengers,
      });

      setErrors({
        ...errors,
        passengers: updatedPassengerErrors,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      passengers: formData.passengers.map((passenger) => {
        const passengerErrors = {};

        if (!passenger.firstName.trim()) {
          passengerErrors.firstName = "First name is required";
        }

        if (!passenger.lastName.trim()) {
          passengerErrors.lastName = "Last name is required";
        }

        if (!passenger.nationalId.trim()) {
          passengerErrors.nationalId = "National ID is required";
        }

        if (passenger.hasDisabilities && !passenger.disabilities.trim()) {
          passengerErrors.disabilities = "Please specify disabilities";
        }

        if (!passenger.luggageWeight.trim()) {
          passengerErrors.luggageWeight = "Luggage weight is required";
        } else if (
          isNaN(passenger.luggageWeight) ||
          Number(passenger.luggageWeight) < 0
        ) {
          passengerErrors.luggageWeight = "Please enter a valid weight";
        }

        return passengerErrors;
      }),
      email: "",
      phone: "",
      journeyDate: "",
    };

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.journeyDate) {
      newErrors.journeyDate = "Journey date is required";
    }

    return newErrors;
  };

  const hasErrors = (errors) => {
    if (errors.email || errors.phone || errors.journeyDate) {
      return true;
    }

    return errors.passengers.some(
      (passengerErrors) => Object.keys(passengerErrors).length > 0
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (!hasErrors(newErrors)) {
      try {
        // Send booking data to backend
        const response = await fetch("http://localhost:5000/api/bookings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const bookingData = await response.json();
          console.log("Booking successful:", bookingData);

          // Redirect to payment page with booking ID

        } else {
          console.error("Failed to book");
        }
      } catch (error) {
        console.error("Error submitting booking:", error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  if (isSubmitted) {
    return (
      <div className="booking-success">
        <h2>Booking Submitted Successfully!</h2>
        <p>Thank you for your booking.</p>
        <p>A confirmation has been sent to your email: {formData.email}</p>
        <p>Number of passengers: {formData.passengers.length}</p>
        <button
          onClick={() => {
            setFormData({
              passengers: [{ ...initialPassengerData }],
              email: "",
              phone: "",
              journeyDate: "",
            });
            setIsSubmitted(false);
          }}
          className="btn btn-primary"
        >
          Make Another Booking
        </button>
      </div>
    );
  }

  return (
    <div className="booking-form-container">
      <h2>Railway Booking Form</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        {formData.passengers.map((passenger, index) => (
          <div key={index} className="form-section passenger-section">
            <div className="passenger-header">
              <h3>Passenger {index + 1}</h3>
              {formData.passengers.length > 1 && (
                <button
                  type="button"
                  className="btn btn-danger remove-passenger"
                  onClick={() => removePassenger(index)}
                >
                  Remove
                </button>
              )}
            </div>

            <div className="form-group">
              <label htmlFor={`firstName-${index}`}>First Name *</label>
              <input
                type="text"
                id={`firstName-${index}`}
                name="firstName"
                value={passenger.firstName}
                onChange={(e) => handleChange(e, index)}
                className={errors.passengers[index]?.firstName ? "error" : ""}
              />
              {errors.passengers[index]?.firstName && (
                <span className="error-message">
                  {errors.passengers[index].firstName}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor={`lastName-${index}`}>Last Name *</label>
              <input
                type="text"
                id={`lastName-${index}`}
                name="lastName"
                value={passenger.lastName}
                onChange={(e) => handleChange(e, index)}
                className={errors.passengers[index]?.lastName ? "error" : ""}
              />
              {errors.passengers[index]?.lastName && (
                <span className="error-message">
                  {errors.passengers[index].lastName}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor={`nationalId-${index}`}>National ID *</label>
              <input
                type="text"
                id={`nationalId-${index}`}
                name="nationalId"
                value={passenger.nationalId}
                onChange={(e) => handleChange(e, index)}
                className={errors.passengers[index]?.nationalId ? "error" : ""}
              />
              {errors.passengers[index]?.nationalId && (
                <span className="error-message">
                  {errors.passengers[index].nationalId}
                </span>
              )}
            </div>

            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="hasDisabilities"
                  checked={passenger.hasDisabilities}
                  onChange={(e) => handleChange(e, index)}
                />
                Do you have any disabilities?
              </label>
            </div>

            {passenger.hasDisabilities && (
              <div className="form-group">
                <label htmlFor={`disabilities-${index}`}>
                  Please specify your disabilities
                </label>
                <textarea
                  id={`disabilities-${index}`}
                  name="disabilities"
                  value={passenger.disabilities}
                  onChange={(e) => handleChange(e, index)}
                  className={
                    errors.passengers[index]?.disabilities ? "error" : ""
                  }
                />
                {errors.passengers[index]?.disabilities && (
                  <span className="error-message">
                    {errors.passengers[index].disabilities}
                  </span>
                )}
              </div>
            )}

            <div className="form-group">
              <label htmlFor={`luggageWeight-${index}`}>
                Luggage Weight (kg) *
              </label>
              <input
                type="number"
                id={`luggageWeight-${index}`}
                name="luggageWeight"
                value={passenger.luggageWeight}
                onChange={(e) => handleChange(e, index)}
                min="0"
                step="0.1"
                className={
                  errors.passengers[index]?.luggageWeight ? "error" : ""
                }
              />
              {errors.passengers[index]?.luggageWeight && (
                <span className="error-message">
                  {errors.passengers[index].luggageWeight}
                </span>
              )}
            </div>
          </div>
        ))}

        <div className="add-passenger-container">
          <button
            type="button"
            onClick={addPassenger}
            className="booking-btn btn-secondary add-passenger"
          >
            Add Another Passenger
          </button>
        </div>

        <div className="form-section">
          <h3>Contact Details</h3>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => handleChange(e)}
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>
        </div>

        <div className="form-actions">
          <button onClick={() => handleSubmit()} className="booking-btn btn-primary">
            Submit Booking
          </button>
          <button
            type="button"
            onClick={() => {
              setFormData({
                passengers: [{ ...initialPassengerData }],
                email: "",
                phone: "",
                journeyDate: "",
              });
              setErrors({
                passengers: [{}],
                email: "",
                phone: "",
                journeyDate: "",
              });
            }}
            className="booking-btn btn-secondary" 
          >
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default RailwayBookingForm;
