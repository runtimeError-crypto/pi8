"use strict";

var hotels = {};
module.exports = {
  save: function save(hotel) {
    var id = Object.keys(hotels).length + 1;
    hotel.id = id;
    var newHotel = {
      id: id,
      name: hotel.name,
      location: hotel.location,
      description: hotel.description,
      numberOfRooms: hotel.numberOfRooms,
      image: hotel.image,
      createdOn: new Date(),
      reviews: []
    };

    if (hotel.parkingSlots) {
      newHotel.parkingSlots = hotel.parkingSlots;
    }

    hotels[id] = newHotel;
  },
  all: function all(page) {
    var pageSize = 10;
    var startIndex = (page - 1) * pageSize;
    var endIndex = startIndex + pageSize;
    return Object.keys(hotels).map(function (key) {
      return hotels[key];
    }).sort(function (a, b) {
      return b.id - a.id;
    }).slice(startIndex, endIndex);
  },
  findById: function findById(id) {
    return hotels[id];
  },
  addReview: function addReview(id, rating, comment, user) {
    var review = {
      rating: rating,
      comment: comment,
      user: user,
      createdOn: new Date()
    };
    hotels[id].reviews.push(review);
  },
  allReviews: function allReviews(id) {
    return hotels[id].reviews.sort(function (a, b) {
      return b.createdOn - a.createdOn;
    }).slice(0);
  }
};