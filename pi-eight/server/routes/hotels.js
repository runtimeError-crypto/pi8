import express from "express";
import authCheck from "../middleware/authCheck";
import hotels from "../data/hotels.js"
import passport from 'passport'
const hotelsData = "hotels"






const router = express.Router();



function validateHotelForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = "";

  payload.numberOfRooms = parseInt(payload.numberOfRooms)

  if (!payload.parkingSlots) {
    payload.parkingSlots = parseInt(payload.parkingSlots)
  }

  if (
    !payload ||
    typeof payload.name !== "string" ||
    payload.name < 3) {

    isFormValid = false;
    errors.name = "Name must have more than 3 letters";
  }


  if (
    !payload ||
    typeof payload.image !== "string" ||
    payload.image === 0) {
    isFormValid = false;
    errors.image = "Image URL is required";
  }



  if (
    !payload ||
    typeof payload.description !== "string" ||
    payload.desctiption < 10) {

    isFormValid = false;
    errors.desctription = "Description mus be more than 10 characters"

  }

  if (
    !payload ||
    typeof payload.numberOfRooms || payload.numberOfRooms < 0) {
    isFormValid = false;
    errors.numberOfRooms = "Number of rooms must a positive number";
  }

  if (payload.parkingSlots) {
    if (payload.parkingSlots < 0) {
      isFormValid = false;
      errors.parkingSlots = "Parking slots must be a positive number."
    }
  }

  if (!isFormValid) {
    message = 'Check the form for errors'
  }


  return {
    success: isFormValid,
    message,
    errors,
  };
}

router.post('/create', authCheck, (req, res) => {
  const hotel = req.body

  const validationResult = validateHotelForm(hotel)
  if (!validationResult.success) {
    return res.status(401).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors

    })
  }

  hotelsData.save(hotel)

  res.status(200).json({
    success: true,
    message: 'Hotel added successfully'
  })
})

router.get('/all', (req, res) => {
  const page = parseInt(req.query.page)

  const hotels = hotelsData.all(page)
  res.status(200).json(hotels)
})

router.get('/details/:id', authCheck, (req, res) => {
  const id = req.params.id
  let hotel = hotelsData.findById(id)

  if (!hotel) {
    return res.status(200).json({
      success: false,
      message: 'Hotel does not exist!'
    })
  }

  let response = {
    id,
    name: hotel.name,
    location: hotel.location,
    description: hotel.description,
    numberOfRooms: hotel.numberOfRooms,
    image: hotel.image,
    createdOn: hotel.creatoin

  }

  if (hotel.parkingSlots) {
    response.parkingSlots = hotel.parkingSlots

  }
  res.status(200).json(response)
})

router.post('/details/:id/reviews/create', authCheck, (req, res) => {
  const id = req.params.id
  const user = req.user.name

  let hotel = hotelsData.findById(id)

  if (!hotel) {
    return res.status(200).json({
      success: false,
      message: 'Hotel does not exist'

    })
  }

  let rating = req.body.rating
  const comment = req.body.comment

  if (rating) {
    rating = parseInt(rating)

  }

  if (!rating || rating < 1 || rating > 5) {
    return res.status(200).json({
      success: false
      message: 'Rating must be between 1 and 5.'

    })
  }

  hotelsData.addReview(id, rating, comment, user)

  res.status(200).json({
    success: true,
    message: 'Review added successsfuly',
    review: {
      id,
      rating,
      comment,
      user
    }
  })
})

router.get('/details/:id/reviews', authCheck, (req, res) => {
  const id = req.params.id

  const hotel = hotelsData.findById(id)

  if (!hotel) {
    return res.status(200).json({
      success: false,
      message: 'Hotel does not exist'
    })
  }


  const response = hotelsData.allReviews(id)

  res.status(200).json(response)
})

module.exports = router