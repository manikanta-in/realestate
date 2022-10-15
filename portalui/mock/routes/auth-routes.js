module.exports = (server) => {
  server.get('/api/mostViewedProperties', (req, res) => {
    return setTimeout(() => {
      res.jsonp({
        properties: [
          {
            imageUrl: "https://picsum1.photos/200/300?random=1",
            propertyType: "agriculturalLand",
            details: [{ value: "10", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "3", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=2",
            propertyType: "flat",
            details: [{ value: "3000", unit: "Sft" }, { value: "1", unit: "Crore" }, { value: "3.5", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: false
          }, {
            imageUrl: "https://picsum.photos/200/300?random=3",
            propertyType: "plot",
            details: [{ value: "4", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "15", unit: "km  from ORR" }],
            location: "Patancheru",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          }, {
            imageUrl: "https://picsum.photos/200/300?random=4",
            propertyType: "building",
            details: [{ value: "10000", unit: "Sft" }, { value: "1.8", unit: "Crore" }, { value: "4.5", unit: "km  from ORR" }],
            location: "Miyapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: false
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=5",
            propertyType: "agriculturalLand",
            details: [{ value: "10", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "3", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=6",
            propertyType: "flat",
            details: [{ value: "3000", unit: "Sft" }, { value: "1", unit: "Crore" }, { value: "3.5", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: false
          }, {
            imageUrl: "https://picsum.photos/200/300?random=7",
            propertyType: "plot",
            details: [{ value: "4", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "15", unit: "km  from ORR" }],
            location: "Patancheru",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          }, {
            imageUrl: "https://picsum.photos/200/300?random=8",
            propertyType: "building",
            details: [{ value: "10000", unit: "Sft" }, { value: "1.8", unit: "Crore" }, { value: "4.5", unit: "km  from ORR" }],
            location: "Miyapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: false
          }
        ]
      })
    }, 5000);
  });

  server.get('/api/mostViewedPropertiesInBuy', (req, res) => {
    return setTimeout(() => {
      res.jsonp({
        properties: [
          {
            imageUrl: "https://picsum.photos/200/300?random=1",
            propertyType: "agriculturalLand",
            details: [{ value: "10", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "3", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=2",
            propertyType: "flat",
            details: [{ value: "3000", unit: "Sft" }, { value: "1", unit: "Crore" }, { value: "3.5", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: false
          }, {
            imageUrl: "https://picsum.photos/200/300?random=3",
            propertyType: "plot",
            details: [{ value: "4", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "15", unit: "km  from ORR" }],
            location: "Patancheru",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          }, {
            imageUrl: "https://picsum.photos/200/300?random=4",
            propertyType: "building",
            details: [{ value: "10000", unit: "Sft" }, { value: "1.8", unit: "Crore" }, { value: "4.5", unit: "km  from ORR" }],
            location: "Miyapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: false
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=5",
            propertyType: "agriculturalLand",
            details: [{ value: "10", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "3", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=6",
            propertyType: "flat",
            details: [{ value: "3000", unit: "Sft" }, { value: "1", unit: "Crore" }, { value: "3.5", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: false
          }, {
            imageUrl: "https://picsum.photos/200/300?random=7",
            propertyType: "plot",
            details: [{ value: "4", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "15", unit: "km  from ORR" }],
            location: "Patancheru",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          }, {
            imageUrl: "https://picsum.photos/200/300?random=8",
            propertyType: "building",
            details: [{ value: "10000", unit: "Sft" }, { value: "1.8", unit: "Crore" }, { value: "4.5", unit: "km  from ORR" }],
            location: "Miyapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: false
          }
        ]
      })
    }, 5000);
  });

  server.get('/api/mostViewedPropertiesInSearch', (req, res) => {
    return setTimeout(() => {
      res.jsonp({
        properties: [
          {
            imageUrl: "https://picsum.photos/200/300?random=1",
            propertyType: "agriculturalLand",
            details: [{ value: "10", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "3", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=2",
            propertyType: "flat",
            details: [{ value: "3000", unit: "Sft" }, { value: "1", unit: "Crore" }, { value: "3.5", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: false
          }, {
            imageUrl: "https://picsum.photos/200/300?random=3",
            propertyType: "plot",
            details: [{ value: "4", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "15", unit: "km  from ORR" }],
            location: "Patancheru",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=4",
            propertyType: "agriculturalLand",
            details: [{ value: "10", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "3", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=5",
            propertyType: "agriculturalLand",
            details: [{ value: "10", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "3", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=6",
            propertyType: "flat",
            details: [{ value: "3000", unit: "Sft" }, { value: "1", unit: "Crore" }, { value: "3.5", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: false
          }, {
            imageUrl: "https://picsum.photos/200/300?random=7",
            propertyType: "plot",
            details: [{ value: "4", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "15", unit: "km  from ORR" }],
            location: "Patancheru",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=8",
            propertyType: "agriculturalLand",
            details: [{ value: "10", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "3", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          }
        ]
      })
    }, 5000);
  });

  server.post('/api/searchResults', (req, res) => {

    let name = "agriculturalLand";
    if (req.body.name !== undefined) {
      let search = req.body.name;
      if (search == "agriculture house") {
        name = "formHouse";
      } else if (search == "residential plot") {
        name = "plot";
      } else if (search == "residential flat") {
        name = "flat";
      } else if (search == "residential villa") {
        name = "villa";
      } else if (search == "commercial open") {
        name = "openSpace";
      } else if (search == "commercial building") {
        name = "building";
      }

    }

    return setTimeout(() => {
      res.jsonp({
        title: name,
        properties: [
          {
            imageUrl: "https://picsum.photos/200/300?random=1",
            propertyType: name,
            details: [{ value: "10", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "3", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=2",
            propertyType: name,
            details: [{ value: "3000", unit: "Sft" }, { value: "1", unit: "Crore" }, { value: "3.5", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: false
          }, {
            imageUrl: "https://picsum.photos/200/300?random=3",
            propertyType: name,
            details: [{ value: "4", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "15", unit: "km  from ORR" }],
            location: "Patancheru",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=4",
            propertyType: name,
            details: [{ value: "10", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "3", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=5",
            propertyType: name,
            details: [{ value: "10", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "3", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=6",
            propertyType: name,
            details: [{ value: "3000", unit: "Sft" }, { value: "1", unit: "Crore" }, { value: "3.5", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: false
          }, {
            imageUrl: "https://picsum.photos/200/300?random=7",
            propertyType: name,
            details: [{ value: "4", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "15", unit: "km  from ORR" }],
            location: "Patancheru",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=8",
            propertyType: name,
            details: [{ value: "10", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "3", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true
          }
        ],
        areaList: [{ areaSize: 1200, areaCount: 20 }, { areaSize: 1400, areaCount: 10 }, { areaSize: 1600, areaCount: 8 }],
        priceList: [{ price: "60-90 Lakhs", count: 15 }, { price: "90-1 Crore", count: 6 }, { price: "1 Crore Above", count: 20 }],
        distanceFrom: {
          name: "Distance to (ORR)",
          areaList: [{ value: "10 Km", count: 15 }, { value: "5 Km", count: 6 }, { value: "8 Km", count: 20 }]
        },
      })
    }, 5000);
  });

  server.get('/api/property-media-posting-limits', (req, res) => {
    return setTimeout(() => {
      res.jsonp({
        "data": [
          {
            "id": 1,
            "name": "Srinivas",
            "title": "Software Dev",
            "statement": "Best Services",
            "picture": "http://20.197.3.174:8008/media/Admin/73-730482_existing-user-defaultavatar.png",
            "comment": "",
            "status": "Active"
          }
        ],
        "error": null,
        "statusCode": 0
      })
    }, 6000);
  });

  server.get('/api/myProperties', (req, res) => {
    return setTimeout(() => {
      res.jsonp({
        properties: [
          {
            imageUrl: "https://picsum.photos/200/300?random=1",
            propertyType: "Agricultural Land",
            details: [{ value: "10", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "3", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            expiryDate: "9th April",
            categories: ["01-01-2022", "15-01-2022", "29-01-2022", "07-02-2022", "24-02-2022", "28-02-2022", "09-03-2022", "11-03-2022", "13-03-2022"],
            series: [{
              name: 'Views',
              data: [6, 12, 16, 18, 20, 49, 67, 88, 101]
            },
            {
              name: 'Fav',
              data: [2, 3, 5, 8, 11, 14, 25, 30, 48]
            }]
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=2",
            propertyType: "Flat",
            details: [{ value: "3000", unit: "Sft" }, { value: "1", unit: "Crore" }, { value: "3.5", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            expiryDate: "14th April",
            categories: ["01-01-2022", "15-01-2022", "29-01-2022", "07-02-2022", "24-02-2022", "28-02-2022", "09-03-2022", "11-03-2022", "13-03-2022"],
            series: [{
              name: 'Views',
              data: [5, 10, 12, 14, 16, 20, 25, 35, 78]
            },
            {
              name: 'Fav',
              data: [6, 8, 10, 11, 17, 29, 45, 60, 98]
            }]
          }, {
            imageUrl: "https://picsum.photos/200/300?random=3",
            propertyType: "Plot",
            details: [{ value: "4", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "15", unit: "km  from ORR" }],
            location: "Patancheru",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            expiryDate: "11th April",
            categories: ["01-01-2022", "15-01-2022", "29-01-2022", "07-02-2022", "24-02-2022", "28-02-2022", "09-03-2022", "11-03-2022", "13-03-2022"],
            series: [{
              name: 'Views',
              data: [5, 10, 12, 14, 16, 20, 25, 35, 78]
            },
            {
              name: 'Fav',
              data: [2, 3, 5, 8, 11, 14, 25, 30, 48]
            }]
          }
        ]
      })
    }, 5000);
  });

  server.get('/api/myMessages', (req, res) => {
    return setTimeout(() => {
      res.jsonp({
        messages: [
          {
            type: "info",
            day: "14",
            date: "January 2022 10:00 AM",
            message: "Mr. Prakash Rao is showing interest in your 3BHK property, we have shared your contact. He may be contacting you with phone 9866247912"
          },
          {
            type: "warning",
            day: "15",
            date: "January 2022 11:00 AM",
            message: "Only 3 days left for 3BHK Property listing, youe may align the details as needed"
          },
          {
            type: "success",
            day: "12",
            date: "January 2022 11:00 AM",
            message: "our 3BHK property successfully posted, you will start receiving the requests soon."
          },
          {
            type: "info",
            day: "14",
            date: "January 2022 10:00 AM",
            message: "Mr. Prakash Rao is showing interest in your 3BHK property, we have shared your contact. He may be contacting you with phone 9866247912"
          }
        ]

      })
    }, 2000);
  });
  server.get('/api/getPropertyDetails', (req, res) => {
    return setTimeout(() => {
      res.jsonp({
        properties: [
          {
            imageUrl: "https://picsum.photos/200/300?random=1",
            title: "Video"
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=2",
            title: "Kitchen"
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=3",
            title: "Master Bedroom"
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=4",
            title: "Guest Bedroom"
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=5",
            title: "Childrens Bedroom"
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=6",
            title: "Master Bathroom"
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=7",
            title: "Location Pic"
          }
        ],
        nearBy: [{
          title: "Near to Schools",
          iconName: "IconSchool"
        },
        {
          title: "Near to University",
          iconName: "IconUniversity"
        }, {
          title: "Near to Shopping Malls",
          iconName: "ShoppingMall"
        }, {
          title: "Near to Metro Station",
          iconName: "Metro"
        }, {
          title: "Near to Bus Stand",
          iconName: "Busstand"
        }, {
          title: "Near to Hindhu Temples",
          iconName: "Temple"
        }, {
          title: "Near to Church",
          iconName: "Church"
        }],
        favCount: 240,
        position: { lat: 17.385044, lng: 78.486671 },
        nearByProperties: [
          {
            imageUrl: "https://picsum.photos/200/300?random=1",
            propertyType: "agriculturalLand",
            details: [{ value: "10", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "3", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true,
            propertyid: 123456,
            position: { lat: 17.385662418205893, lng: 78.48237088198344 }
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=2",
            propertyType: "flat",
            details: [{ value: "3000", unit: "Sft" }, { value: "1", unit: "Crore" }, { value: "3.5", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: false,
            propertyid: 123458,
            position: { lat: 17.381120478954095, lng: 78.479529885671 }
          }, {
            imageUrl: "https://picsum.photos/200/300?random=3",
            propertyType: "plot",
            details: [{ value: "4", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "15", unit: "km  from ORR" }],
            location: "Patancheru",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true,
            propertyid: 123453,
            position: { lat: 17.389929855175264, lng: 78.49145176777652 }
          },
          {
            imageUrl: "https://picsum.photos/200/300?random=4",
            propertyType: "building",
            details: [{ value: "10", unit: "Acrs" }, { value: "80", unit: "Lakh" }, { value: "3", unit: "km  from ORR" }],
            location: "Kondapur",
            viewCount: 2120,
            favCount: 451,
            commentCount: 62,
            isCertified: true,
            propertyid: 123452,
            position: { lat: 17.39947593875286, lng: 78.4810147555339 }
          }
        ],
        nearByPositions: [{ lat: 17.385662418205893, lng: 78.48237088198344 },
        { lat: 17.381120478954095, lng: 78.479529885671 },
        { lat: 17.389929855175264, lng: 78.49145176777652 },
        { lat: 17.39947593875286, lng: 78.4810147555339 }]
      })
    }, 2000);
  });

  server.get('/api/authUser', (req, res) => {
    return setTimeout(() => {
      res.jsonp({
        user: {
          imageUrl: "https://i.pravatar.cc/150?img=56",
          name: "Sarath"
        }

      })
    }, 5000);
  });

  server.get('/api/getPropertyDetailsMessages', (req, res) => {
    return setTimeout(() => {
      res.jsonp({
        messages: [
          {
            message: "Wow! Made buying a house such a breeze! I was new to home buying, and have heard horror stories from friends and family about terrible agents. (RN) was professional and personal! She never made me feel uncomfortable and helped me every step of the way!"
          },
          {
            message: "The best real estate company I have ever dealt with. Very professional, experienced and helpful agents and brokers. Highly recommend."
          },
          {
            message: "Great environment, professional and nice people, clean and beautiful office set up. They care about their clients and train their agents frequently so they are always updated with what’s going on in the market. I recommend (RN) to anyone looking to do any Real Estate transaction."
          },
          {
            message: "Builder listed my place in April and we were on contract in 3 months, at asking price. He is an excellent negotiator with a very personalized touch. Highly recommended!"
          },
          {
            message: "Wow! Made buying a house such a breeze! I was new to home buying, and have heard horror stories from friends and family about terrible agents. (RN) was professional and personal! She never made me feel uncomfortable and helped me every step of the way!"
          },
          {
            message: "The best real estate company I have ever dealt with. Very professional, experienced and helpful agents and brokers. Highly recommend."
          },
          {
            message: "Great environment, professional and nice people, clean and beautiful office set up. They care about their clients and train their agents frequently so they are always updated with what’s going on in the market. I recommend (RN) to anyone looking to do any Real Estate transaction."
          },
          {
            message: "Builder listed my place in April and we were on contract in 3 months, at asking price. He is an excellent negotiator with a very personalized touch. Highly recommended!"
          },
          {
            message: "Wow! Made buying a house such a breeze! I was new to home buying, and have heard horror stories from friends and family about terrible agents. (RN) was professional and personal! She never made me feel uncomfortable and helped me every step of the way!"
          },
          {
            message: "The best real estate company I have ever dealt with. Very professional, experienced and helpful agents and brokers. Highly recommend."
          },
          {
            message: "Great environment, professional and nice people, clean and beautiful office set up. They care about their clients and train their agents frequently so they are always updated with what’s going on in the market. I recommend (RN) to anyone looking to do any Real Estate transaction."
          },
          {
            message: "Builder listed my place in April and we were on contract in 3 months, at asking price. He is an excellent negotiator with a very personalized touch. Highly recommended!"
          },
          {
            message: "Wow! Made buying a house such a breeze! I was new to home buying, and have heard horror stories from friends and family about terrible agents. (RN) was professional and personal! She never made me feel uncomfortable and helped me every step of the way!"
          },
          {
            message: "The best real estate company I have ever dealt with. Very professional, experienced and helpful agents and brokers. Highly recommend."
          },
          {
            message: "Great environment, professional and nice people, clean and beautiful office set up. They care about their clients and train their agents frequently so they are always updated with what’s going on in the market. I recommend (RN) to anyone looking to do any Real Estate transaction."
          },
          {
            message: "Builder listed my place in April and we were on contract in 3 months, at asking price. He is an excellent negotiator with a very personalized touch. Highly recommended!"
          }
        ]
      })
    }, 5000);
  });

  server.post('/api/uploadFile', (req, res) => {

    return setTimeout(() => {
      res.jsonp({
        imgUrl: "https://picsum.photos/200/300?random=" + req.body.currentIndex
      })
    }, 3000);
  });
  server.post('/api/list1', (req, res) => {

    res.jsonp({
      "name_of_owner": "423",
      "extent_in": "432",
      "road_size": "423",
      "village_locality": "234",
      "mandal": "423",
      "offer_price": "432",
      "near_market_value": "432",
      "distance_from_orr": "432",
      "contact_details": "423",
      "approch_road": "Metal Road"
    })
  });

  server.post('/api/list', (req, res) => {

    res.status(400).jsonp({
      "city_town": [
        "A valid number is required."
      ],
      "contact_details": [
        "This field may not be blank."
      ]
    })
  });

  server.post('/api/SEO-metakeys', (req, res) => {

    res.jsonp({
      "data": [
        {
          "id": 1,
          "page": "Buy",
          "keywords": "Best properties, Verified properties, Open lands, Land for lease"
        },
        {
          "id": 2,
          "page": "Sell",
          "keywords": "Best properties, Verified properties, Open lands, Land for lease"
        }
      ],
      "error": null,
      "statusCode": 0
    })
  });


  server.get('/api/property-types', (req, res) => {

    res.jsonp({
      "data": [
        {
          "propertytype_id": 1,
          "propertytype": "Agriculture",
          "location_property_highlights": [
            {
              "id": 1,
              "description": "Metro Station",
              "mediaurl": "http://134.122.25.72/v2/assets/images/metro.svg",
              "type": "train_station"
            },
            {
              "id": 2,
              "description": "International Airport",
              "mediaurl": "http://134.122.25.72/v2/assets/images/plane.svg",
              "type": "airport"
            },
            
            {
              "id": 3,
              "description": "Hitech City",
              "mediaurl": "http://134.122.25.72/v2/assets/images/buildings.svg",
              "type": "sublocality"
            },
            {
              "id": 4,
              "description": "ORR",
              "mediaurl": "http://134.122.25.72/v2/assets/images/road.svg",
              "type": "route"
            }
          ],
          "property_subtypes": [
            {
              "propertytype_id": 1,
              "propertysubtype_id": 1,
              "propertysubtype": "Agriculture Lands",
              "imageuploadlimit": 5,
              "videouploadlimit": 1,
              "property_known_for": []
            },
            {
              "propertytype_id": 1,
              "propertysubtype_id": 2,
              "propertysubtype": "Form House",
              "imageuploadlimit": 10,
              "videouploadlimit": 3,
              "property_known_for": []
            }
          ]
        },
        {
          "propertytype_id": 2,
          "propertytype": "Residential",
          "location_property_highlights": [
            {
              "id": 5,
              "description": "Metro Station",
              "mediaurl": "http://134.122.25.72/v2/assets/images/metro.svg",
              "type": "train_station"
            },
            {
              "id": 6,
              "description": "International Airport",
              "mediaurl": "http://134.122.25.72/v2/assets/images/plane.svg",
              "type": "airport"
            },
            {
              "id": 7,
              "description": "Hitech City",
              "mediaurl": "http://134.122.25.72/v2/assets/images/buildings.svg",
              "type": "sublocality"
            },
            {
              "id": 8,
              "description": "ORR",
              "mediaurl": "http://134.122.25.72/v2/assets/images/road.svg",
              "type": "route"
            }
          ],
          "property_subtypes": [
            {
              "propertytype_id": 2,
              "propertysubtype_id": 3,
              "propertysubtype": "Plots",
              "imageuploadlimit": 5,
              "videouploadlimit": 1,
              "property_known_for": [
                {
                  "id": 1,
                  "description": "Near to Schools",
                  "iconurl": "http://134.122.25.72/v2/assets/images/icon-school.svg"
                },
                {
                  "id": 2,
                  "description": "Near to University",
                  "iconurl": "http://134.122.25.72/v2/assets/images/icon-university.svg"
                },
                {
                  "id": 3,
                  "description": "Near to Shopping Malls",
                  "iconurl": "http://134.122.25.72/v2/assets/images/icon-shoppingmall.svg"
                }
              ]
            },
            {
              "propertytype_id": 2,
              "propertysubtype_id": 4,
              "propertysubtype": "Flats",
              "imageuploadlimit": 10,
              "videouploadlimit": 3,
              "property_known_for": [
                {
                  "id": 8,
                  "description": "Near to Schools",
                  "iconurl": "http://134.122.25.72/v2/assets/images/icon-school.svg"
                },
                {
                  "id": 9,
                  "description": "Near to University",
                  "iconurl": "http://134.122.25.72/v2/assets/images/icon-university.svg"
                },
                {
                  "id": 10,
                  "description": "Near to Shopping Malls",
                  "iconurl": "http://134.122.25.72/v2/assets/images/icon-shoppingmall.svg"
                }
              ]
            },
            {
              "propertytype_id": 2,
              "propertysubtype_id": 5,
              "propertysubtype": "Villas",
              "imageuploadlimit": 20,
              "videouploadlimit": 5,
              "property_known_for": [
                {
                  "id": 15,
                  "description": "Near to Schools",
                  "iconurl": "http://134.122.25.72/v2/assets/images/icon-school.svg"
                },
                {
                  "id": 16,
                  "description": "Near to University",
                  "iconurl": "http://134.122.25.72/v2/assets/images/icon-university.svg"
                }
              ]
            }
          ]
        },
        {
          "propertytype_id": 3,
          "propertytype": "Commercial",
          "location_property_highlights": [
            {
              "id": 9,
              "description": "Metro Station",
              "mediaurl": "http://134.122.25.72/v2/assets/images/metro.svg",
              "type": "train_station"
            },
            {
              "id": 10,
              "description": "International Airport",
              "mediaurl": "http://134.122.25.72/v2/assets/images/plane.svg",
              "type": "airport"
            },
            {
              "id": 11,
              "description": "Hitech City",
              "mediaurl": "http://134.122.25.72/v2/assets/images/buildings.svg",
              "type": "sublocality"
            },
            {
              "id": 12,
              "description": "ORR",
              "mediaurl": "http://134.122.25.72/v2/assets/images/road.svg",
              "type": "route"
            }
          ],
          "property_subtypes": [
            {
              "propertytype_id": 3,
              "propertysubtype_id": 6,
              "propertysubtype": "Open Spaces",
              "imageuploadlimit": 5,
              "videouploadlimit": 2,
              "property_known_for": []
            },
            {
              "propertytype_id": 3,
              "propertysubtype_id": 7,
              "propertysubtype": "Buildings",
              "imageuploadlimit": 25,
              "videouploadlimit": 5,
              "property_known_for": []
            }
          ]
        }
      ],
      "error": null,
      "statusCode": 0
    }
    )
  });

  server.post('/api/get-OTP', (req, res) => {

    res.status(200).jsonp({
      "data": {
        "status": "success",
        "otp": "165955"
      },
      "error": null,
      "statusCode": 0
    });
  });

  server.post('/api/verify-OTP', (req, res) => {

    res.status(200).jsonp({
      "data": {
        "status": "verified",
        "auth": "XXX796gyufyXXX"
      },
      "error": null,
      "statusCode": 0
    });
  });
}
