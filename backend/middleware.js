import JWT_SECRET from "./config";
import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const authHeader= res.body.authorization;

    if (!authHeader || !authHeader.startsWith("Barer ")) {
        return res.status(403).json({
            msg: "headers not found"
        })
    }
    
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        if (decoded) {
            req.userId = decoded.userId;
            
        next();
        }
    } catch (error) {
        return res.status(402).json({})    
    }


}

