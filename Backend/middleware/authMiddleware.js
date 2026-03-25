import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ msg: "No token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.adminId = decoded.id;

    next();
  } catch (error) {
    res.status(401).json({ msg: "Invalid token" });
  }
};

export default authMiddleware;