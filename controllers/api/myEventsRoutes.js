// Event routes go here
const router = require('express').Router();
const { Event } = require('../../models');


//These Routes are for creating and deleting events for the user

// POST route for events goes to dashboard
// Creates a new event
// find out how to route to modal
// This will post to DB from homepage modal

// TODO Initialize and add with auth
router.post('/dashboard', async (req, res) => {
  try {
    const newEvent = await Event.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newEvent);
  } catch (err) {
    res.status(400).json(err);
  }
});


// DELETE route for events on dashboard list
// to add later if time allows

router.delete('/dashboard', async (req, res) => {
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


// This is the Volunteered event route



module.exports = router;

    