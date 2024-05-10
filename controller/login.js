import bcrypt from "bcrypt";
import User from "../model/user.js";
import loginValidation from "../validation/login.js";
import generateToken from "../utilis/generatetoken.js";

export const userLoginController = async (req, res) => {
    const { error } = loginValidation.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const { email, password } = req.body;
  
    const user = await User.findOne({ email});
    try {
      if (!user) {
        return res.status(401).json({ message: "Wrong details" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      } else {
        res.json({
          status: "success",
          data: {
            name: user.firstname,
            email: user.email,
            token: generateToken(user.id),
          },
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
