const router = require('express').Router();

const apiRoutes = require('./api');
const userRoutes = require('./api/userRoutes');
const allEventsRoutes = require('./api/allEventsRoutes');
const volunteerRoutes = require('./api/volunteerRoutes');

const homeRoutes = require('./homeRoutes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/api/userRoutes', userRoutes);
// // FIX
router.use('/api/allEventRoutes', allEventsRoutes);
 //TODO: Contact jason about the volunteer routes
// May not need this route :
// router.use('/api', volunteerRoutes);

module.exports = router;