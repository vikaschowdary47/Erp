import React from "react";
import "./StudentTable.css";

const StudentTable = () => {
  return (
    <div className="filter__fields">
      <form>
        <div class="row mt-4">
          <div class="col">
            <input type="text" class="form-control" placeholder="Name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Age" />
          </div>
          <div class="col">
            <input
              type="text"
              name="inst"
              class="form-control"
              list="institution"
              placeholder="School"
            />
            <datalist id="institution">
              <option value="School" />
              <option value="School1" />
              <option value="School2" />
            </datalist>
          </div>
          <div class="col">
            <input
              type="text"
              name="inst"
              class="form-control"
              list="class"
              placeholder="Class"
            />
            <datalist id="class">
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" />
              <option value="6" />
              <option value="7" />
              <option value="8" />
              <option value="9" />
              <option value="10" />
            </datalist>
          </div>
          <div class="col">
            <input
              type="text"
              name="inst"
              class="form-control"
              list="division"
              placeholder="Division"
            />
            <datalist id="division">
              <option value="A" />
              <option value="B" />
              <option value="C" />
              <option value="D" />
              <option value="E" />
            </datalist>
          </div>
          <div class="col">
            <button class="btn btn-secondary ml-3">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentTable;
