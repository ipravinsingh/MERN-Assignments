const user = "../models/user.js";
const signupController = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(403).send("Email and Password are required");
    return;
  }
  const id = Math.floor(Math.random() * 1000);
  user.push({
    id,
    email,
    password,
  });

  res.status(200).json({
    id,
  });
};

const loginController = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(403).send("Email and Password are required");
    return;
  }

  const user = user.find((item) => item.email === email);
  if (!user) {
    res.status(404).send("User not found");
    return;
  }
  if (user.password !== password) {
    res.status(401).send("Incorrect Password");
    return;
  }

  res.status(200).json(user);
};

module.exports = { signupController, loginController };
