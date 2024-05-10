import bcrypt from "bcrypt";
import User from "../model/user.js";
import registerValidation from "../validation/register.js";

export const userRegisterController = async (req, res) => {
    const { error } = registerValidation.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const { email, password, firstname, lastname } = req.body;
  
    try {
      // Check if user already exists
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
        // Hash password and save user
      } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
  
        // Create new user
        const user = await User.create({
          firstname,
          lastname,
          email,
        //   confirmPassword: hashedPassword,
          password: hashedPassword,
        });
        res.json({
          status: "success",
          data: user,
        });
      }
    } catch (error) {
      res.json(error.message);
    }
  };