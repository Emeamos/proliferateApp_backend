import Tutor from "../model/tutor.js"

export const getTutorId = async (req, res) => {
  const result = await Tutor.findById(req.params.id).populate('subject')
  return res.status(200).json(result)
}