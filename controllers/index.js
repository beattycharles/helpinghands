const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');



// const userRoutes = require('./api/userRoutes');
// const allEventsRoutes = require('./api/allEventsRoutes');
//const volunteerRoutes = require('./api/volunteerRoutes');



router.use('/', homeRoutes);
router.use('/api', apiRoutes);
//router.use('/api', userRoutes);
// // FIX
//router.use('/api', allEventsRoutes);
 //TODO: Contact jason about the volunteer routes
// May not need this route :
// router.use('/api', volunteerRoutes);

module.exports = router;