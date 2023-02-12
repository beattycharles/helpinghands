// Event routes go here
const router = require('express').Router();
const { Event } = require('../../models');


//These Routes are for creating and deleting events for the user 
// They will go to the dashboard

// POST route for events goes to dashboard
// Creates a new event
// find out how to route to modal
// This will post to DB from homepage modal

// TODO Initialize and add with auth
router.post('/', async (req, res) => {
  try {
    const newEvent = await Event.create({
      ...req.body,
     
      
      user_id: req.session.user_id,
    });
 console.log(req.body);
    res.status(200).json({newEvent});
  } catch (err) {
    res.status(400).json(err);
  }
});


// DELETE route for events on dashboard list
// to add later if time allows

router.delete('/:id', async (req, res) => {
  try {
    const eventData = await Event.destroy({
      where: {
        event_id: req.params.event_id,
        user_id: req.session.user_id,
      },
    });

    if (!eventData) {
      res.status(404).json({ message: 'No event found with this id!' });
      return;
    }

    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create PUT to update???

// router.put('/select_event', async (req,res) => {
//   try {
//     const updateData = await Event.update({
//       vol_num: req.body,


// This is the Volunteered event route

// router.post("/", async (req, res) => {
//   try {
//     const newVol = await Volunteer.create({
//       ...req.body,

//       user_id: req.session.user_id,
//     });

//     res.status(200).json({ newVol });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });



module.exports = router;

    