import Test from "../models/Test.js";

export const createTest = async (req, res) => {
   try {
      const {name} = req.body;
      const test = await Test.create({name});
      res.status(201).json({success: true, data: test});
   } catch (error) {
      res.status(500).json({success: false, message: error.message});
   }
};