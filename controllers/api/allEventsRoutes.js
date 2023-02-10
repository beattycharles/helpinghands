const router = require("express").Router();
const { Event } = require("../../models");



// create routes to all events page That will go to homepage

// get all route by sort category
// router.get("/", async (req, res) => {


//   try {
//     console.log("All events!")


//     // Get all events
//     const allEventData = await Event.findAll({
//       attributes: [

//         "id",
//         "event_name",
//         "event_description",
//         "event_type",
//         "vol_need",
//         "event_date",
//         "event_address"

//     ],
//       // order: [["event_name", "ASC"]],
//       // where clause for category
      
//     });

//     console.log({allEventData})

//     const events = allEventData.map((event) => {
//     return event.get({ plain: true });
      

//     });

//     console.log({events})

//     // Pass serialized data into Handlebars.js template
//     //res.render("all-event-details", { events });
//     res.status(200).json(events)
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



// Volunteer routes: 


// Should we do a GET for single events?? then show modal???

// router.get('/modal???', async (req, res) => {
//   try {
//     // Get all  My events          //or findAll?? then filter with where??
//     const eventData = await Event.findByPK(req.params.user_id, {
//       model: Event ,
//       attributes: ['id', 'name', 'category', 'volunteersNeed', 'volunteersSignedUp' ],
//       order: [['category', 'ASC']],
//       // where clause for user_id
//       where: {
//         user_id: req.params.user_id
//       }

//     });

//      // Serialize user data so templates can read it
//     const events = eventData.map((event) =>{
//         event.get({ plain: true })
//         //TODO: Calculate the percentage and store it in progressPercentage
//         const progressPercentage = event.volunteersNeed / event.volunteersSignedUp * 100

//         return {...event, progressPercentage }
//     });

//     // Pass serialized data into Handlebars.js template
//     res.render('my-event', { events });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// Delete if there is time

module.exports = router;
