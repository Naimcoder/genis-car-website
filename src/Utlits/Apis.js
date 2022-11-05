export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  console.log(currentUser);
  fetch("https://genis-car-server.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("genis-Car-Token", data.token);
    });
};
