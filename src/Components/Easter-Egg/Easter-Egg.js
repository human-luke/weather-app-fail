import modal from "bootstrap";
import Egg from "./Egg.css";

const EasterEgg = () => {
  return (
    <div className="easter">
      <div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
                Did you like my Weather App?
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Please answer with Yes or No below :D</div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Yes
              </button>
              <button class="btn btn-secondary">No</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">
                Simple Easter Egg Completed{" "}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">YAY! I'm so happy you like it!</div>
            <div class="modal-footer">
              {/* <button
                  class="btn btn-primary"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                >
                  Back to first
                </button> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="easter1">
        <div class=""></div> */}
      <button
        type="button"
        class="myButton"
        data-bs-toggle="modal"
        href="#exampleModalToggle"
        // role="button"
      >
        {" "}
        hi
      </button>
      {/* </div> */}
    </div>
  );
};
export default EasterEgg;
