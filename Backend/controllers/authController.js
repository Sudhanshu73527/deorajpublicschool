export const loginAdmin = (req, res) => {
  const { email, password } = req.body;

  // ✅ Hardcoded admin
  const adminEmail = "admin@gmail.com";
  const adminPassword = "1234567";

  if (email === adminEmail && password === adminPassword) {
    return res.json({
      success: true,
      message: "Login Successful",
    });
  } else {
    return res.status(400).json({
      success: false,
      message: "Invalid Email or Password",
    });
  }
};