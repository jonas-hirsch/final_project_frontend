import React from "react";

const Contact = () => {
  return (
      <div>
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "center",
            margin: "50px auto",
          }}
        >
          <span>
            <h3>Contact</h3>
          </span>
          <div>
            <p>Email: 'benjamin@gmail.com'</p>
            <p>+ 49 178 87 83 456</p>
          </div>

          <div
            style={{
              display: "flex",
              width: "40%",
              justifyContent: "space-around",
              margin: "50px auto",
            }}
          >
            {/* <a href='#'>Twitter</a>
                        <a href='#'>Instagram</a>
                        <a href='#'>Facebook</a> */}
          </div>
          <div
            style={{
              display: "block",
              width: "50vw",
              justifyContent: "space-around",
              margin: "50px auto",
            }}
          >
            <input
              type="text"
              placeholder="Your Email"
              style={{
                width: "50vw",
                justifyContent: "space-around",
                margin: "10px auto",
              }}
            />
            <br />
            <textarea
              style={{ width: "50vw", height: "100px" }}
              type="textarea"
              placeholder="Write your Message here...."
            ></textarea>
            <br />
            <button>Send Message</button>
          </div>
        </div>
        </div>
  );
};

export default Contact;
