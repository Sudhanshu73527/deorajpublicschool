import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ msg: "No token ❌" });
  }

  // 🔥 IMPORTANT FIX
  if (token.startsWith("Bearer ")) {
    token = token.split(" ")[1];
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Invalid token ❌" });
  }
};