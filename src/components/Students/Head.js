import React from "react";

const Head = () => {
  return (
    <div className="student__head">
      <div className="head__body">
        <div className="logo">logo</div>
        <div className="name">
          <div className="notication">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-bell-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </div>
          <div className="person">
            <div className="person__icon text-center">
              <svg
                width="1.2em"
                height="1.2em"
                viewBox="0 0 16 16"
                class="bi bi-person-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
              </svg>
            </div>
            <div className="person__name">Person Name</div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Head;
