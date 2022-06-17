import React from 'react';

const Registration = () => {
  return (
    <section>
      <h2>Working with POST request</h2>
      <div>
        <form>
          <label>
            <input type="text" required />
          </label>
          <label>
            <input type="email" required />
          </label>
          <label>
            <input type="phone" required />
            +38 (XXX) XXX - XX - XX
          </label>
          <h3>Select your position</h3>
          <label>
            <input type="radio" />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </section>
  );
};

export default Registration;
