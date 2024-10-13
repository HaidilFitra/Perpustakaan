import axios from "axios";

export const Register = (data, callback) => {
  axios
    .post("http://localhost:8000/api/v1/register", data)
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const login = (data, callback) => {
  axios
    .post("http://localhost:8000/api/v1/login", data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((err) => {
      console.log("Login error details:", err);

      const errorMessage =
        err.response &&
        err.response.data &&
        typeof err.response.data.message === "string"
          ? err.response.data.message
          : "Login failed. Please try again.";

      callback(false, errorMessage);
    });
};
