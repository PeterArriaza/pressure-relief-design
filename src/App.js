import React from "react";
import "./App.css";

function App() {
  let fireEqn = "$$Q = 21,000*F*A^{0.82}$$";
  let orificeAreaEqn = "$$A = frac{W}{CK_dP_1K_bK_c}sqrt{\frac{TZ}{M}}$$";
  return (
    <div className="App">
      <nav role="navigation">
        <div id="logo">
          <h2>Nav</h2>
        </div>
        <ul>
          <li>Log In</li>
          <li>Sign Up</li>
        </ul>
      </nav>
      <main role="main">
        <header role="banner">
          <h1>Landing Page Hero</h1>
          <p>Don't forget to run git push heroku master</p>
        </header>

        <section>Section 1</section>

        <section>Section 2</section>

        <section>Section 3</section>

        <section>Section 4</section>
      </main>
      <footer role="content-info">Footer</footer>
      <div class="spacer">Scroll for next wireframe</div>
      <section>
        <h1>Login Form</h1>
        <form role="login">
          <input placeholder="Email" />
          <input placeholder="Password" />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section>
        <h2>Sign Up Form</h2>
        <form>
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input placeholder="Email" type="email" />
          <input placeholder="Organization/Company ID" />
          <input placeholder="Job Title" />
          <input placeholder="Password" />
          <input placeholder="Confirm Password" />
          <button type="submit">Submit</button>
        </form>
      </section>
      <div class="spacer">Scroll for next wireframe</div>
      <section id="dashboard">
        <div class="sidebar">
          <h3>Sidebar to view list of projects</h3>
          <p>Ideally collapsable</p>
        </div>
        <div class="detailView">
          Main area to view list of devices
          <ul id="deviceList">
            <li>
              <div class="item">Item 1</div>
            </li>
            <li>
              <div class="item">Item 2</div>
            </li>
            <li>
              <div class="item">Item 3</div>
            </li>
          </ul>
        </div>
      </section>
      <div class="spacer"></div>
      <section>
        <h2>Add New Project Form</h2>
        <form>
          <input placeholder="Project Name" />
          <input placeholder="Client" />
          <input placeholder="Project Number" />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section>
        <h2>Add New Device Form</h2>
        <form>
          <input placeholder="Device Tag" />
          <input placeholder="Equipment Protected" />
          <input placeholder="Alternate ID" />
          <input placeholder="Manufacturer" />
          <input placeholder="Model" />
          <input placeholder="Set Pressure" />
          <input placeholder="Coefficient of Discharge" />
          <label for="status">Construction Status</label>
          <select id="status">
            <option>New</option>
            <option>Existing</option>
          </select>
          <input placeholder="Orifice Area (existing)" />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section>
        <h2>Safety Valve Sizing Form (External Fire Scenario)</h2>
        <form>
          <p>Valve Tag # dynamically imported</p>
          <input placeholder="Equipment Wetted Area in sq. ft." />
          <input placeholder="Relief Temperature" />
          Fluid Properties
          <input placeholder="Molecular Weight" />
          <input placeholder="Compressibility" />
          <input placeholder="Specific Heat Ratio" />
          <input placeholder="Latent Heat of Vaporization" />
          <input placeholder="Environmental Factor" />
          {fireEqn}
          {orificeAreaEqn}
          <input placeholder="Orifice Area (calculated)" />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default App;
