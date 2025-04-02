

function Payment() {
  return (
      <>
          <div className="payment">
              <div className="payment-cont">
                  <h2 className="payment-label">Payment form</h2>
                  <form className="payment-form">
                      <div className="form-group">
                          <label htmlFor="phone-number">Enter phone number</label>
                      <input type="number" name="phone-number" id="phone-number" />
                      </div>
                      <button type="button" className="payment-button">Make Payment</button>
                  </form>
              </div>
          </div>
      </>
  )
}

export default Payment