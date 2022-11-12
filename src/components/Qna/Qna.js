import React from "react";
import "./Qns.css";
const Qna = () => {
  return (
    <div className="container-fluid my-5 qna-section">
      <div className="row d-flex align-items-center">
        <div className="col-md-7 col-12">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h5 className="fw-bold">How Does REACT Work?</h5>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    ReactJS divides the UI into isolated reusable pieces of code
                    known as components. React components work similarly to
                    JavaScript functions as they accept arbitrary inputs called
                    properties or props. It's possible to have as many
                    components as necessary without cluttering your code.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <h5 className="fw-bold">
                    What Is The Difference Between Props & State?
                  </h5>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    While both hold information that influences the output of
                    render, they are different in one important way: props get
                    passed to the component (similar to function parameters)
                    whereas state is managed within the component (similar to
                    variables declared within a function).
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <h5 className="fw-bold">
                    Why Use useEffect In REACT Without Data Fetch?{" "}
                  </h5>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    useEffect() is for side-effects. A functional React
                    component uses props and/or state to calculate the output.
                    If the functional component makes calculations that don't
                    target the output value, then these calculations are named
                    side-effects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-12">
          <img
            className="img-fluid"
            src="https://i.ibb.co/wyMdqZL/pexels-william-choquette-1954524.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Qna;
