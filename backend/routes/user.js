import express, { Router } from "express";
import JWT_SECRET from "../config";
import { Account, User } from '../db';
import jwt from "jsonwebtoken"
const zod = require("zod");
const router = express.Router();

const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
})
router.post("/signup", async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.json({
      message: "incorrect email/ already taken"
    })
  }


  const user = User.findOne({
    username: body.username
  })

  if (user._id) {
    return res.json({
      message: "email already taken"
    })
  }

  const dbUser = await User.create({
    username: body.username,
    password: body.password,
    firstName: body.firstName,
    lastName: body.lastName
  });
  const userId = dbUser._id;

  await Account.create({
    userId,
    balance: 1+ Math.random() * 10000
  })

  const token = jwt.sign({
    userId
  }, JWT_SECRET)


  res.json({
    message: "User created successfully",
    token: token,
  })
})


const signinSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});
router.post("/signin", async (req, res) => {
  const { success } = signinSchema.safeParse(req.body)
  // if empty just return 
  if (!success) {
    return res.json({
      message: "user doesn't exist"
    })
  }
  // check the database with given credentials
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign({
      userId: user._id
    }, JWT_SECRET)
    res.json({
      token: token
    })
    return;
  }
  res.status(411).json({
    msg: "error cant login"
  })

})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})
export default router;
