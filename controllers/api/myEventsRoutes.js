// Event routes go here
const router = require('express').Router();
const { User } = require('../../models');


// Create routes that get events by category

// Get Route for events
router.get('/', async (req, res) => {
  try {
    // Get all  My events          //or findAll?? then filter with where?? 
    const eventData = await Event.findByPK(req.params.user_id, {
      model: Event ,
      attributes: ['id', 'name', 'category', 'volunteersNeed', 'volunteersSignedUp' ],
      order: [['category', 'ASC']],
      // where clause for user_id
      where: {
        user_id: req.params.user_id
      }
      
    });
    
    //Add volunteer signup, volunteer needed to attirbutes to volunteer routes?

    // create 

    // Serialize user data so templates can read it
    const events = eventData.map((event) =>{ 
        event.get({ plain: true })
        //TODO: Calculate the percentage and store it in progressPercentage
        const progressPercentage = event.volunteersNeed / event.volunteersSignedUp * 100

        return {...event, progressPercentage }
    });

    // Pass serialized data into Handlebars.js template
    res.render('my-event', { events });
  } catch (err) {
    res.status(500).json(err);
  }
});



// POST route for events
// Creates a new event
// incorporate counting logic for progress bar??
// find out how to route to modal
// This will post to DB from homepage modal
router.post('/modal???', async (req, res) => {
  try {
    const eventData = await Event.create({
      event_id: req.body.event_id,
      eventName: req.body.event_name,
      user_id: req.body.user_id,
      volunteersNeeded: req.body.volunteers_needed,
      zipcode: req.body.zipcode,
      address: req.body.address,
      description: req.body.description,
      timeStamp: req.body.timeStamp
    });
    res.status(200).json(eventData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//create PUT to update???




// DELETE route for events
// to add later if time allows

// router.delete('/', withAuth, async (req, res) => {
//   try {
//     const eventData = await Event.destroy({
//       where: {
//         event_id: req.params.event_id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!eventData) {
//       res.status(404).json({ message: 'No event found with this id!' });
//       return;
//     }

//     res.status(200).json(eventData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;