import React from "react";
import "./AddStudent.css";

const AddStudent = () => {
  return (
    <div>
      <form>
        <div class="row mb-3">
          <label for="name" class="col-sm-2 col-form-label">
            Full Name
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="name" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
