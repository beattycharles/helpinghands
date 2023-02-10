const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./myEventsRoutes');
//const volunteerRoutes = require('./volunteerRoutes');
//const allEventsRoutes = require('./allEventsRoutes');



router.use('/users', userRoutes);

router.use('/myEvents', eventRoutes);

// TODO: Uncomment when volunteer route is finished
//router.use('/volunteer', volunteerRoutes);

//router.use('/allEvents', allEventsRoutes);

module.exports = router;