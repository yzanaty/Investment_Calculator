import { useState } from "react";

export default function UserInput({ handleChange, user }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
            value={user.initialInvestment}
            required
            type="number"
            min={0}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
            value={user.annualInvestment}
            required
            type="number"
            min={0}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
            value={user.expectedReturn}
            required
            type="number"
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            onChange={(event) => handleChange("duration", event.target.value)}
            value={user.duration}
            required
            type="number"
          />
        </p>
      </div>
    </section>
  );
}
