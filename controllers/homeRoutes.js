const router = require("express").Router();
const { fstat } = require("fs");
const { Event, User, Volunteer } = require("../models");
const withAuth = require("../utils/auth");

// get all events and join with user data

//HOMEPAGE RENDER ALL EVENTS

router.get("/", withAuth, async (req, res) => {
  try {
    const eventData = await Event.findAll({
      include: [
        {
          model: User,
          attributes: ["first_name", "last_name"],
        },
      ],
    });
    // serialization step
    const events = eventData.map((event) => event.get({ plain: true }));

    // TODO: supposed to render to all events partial

    res.render("homepage", { events });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DASHBOARD RENDER USER'S EVENTS
// TODO: Add withauth when login is working
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Event }],
    });

    const user = userData.get({ plain: true });

    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//TODO: Figure out the volunteer routing

//   userData.event... // events created by user in array
//   userData.volunteers.events... //events volunteeredby user
// }

//   userData.event... // events created by user in array
//   userData.volunteers.events... //events volunteeredby user

// Write route to dashboard

// GET route for retrieving all volunteer events for a specific user
// router.get("/:user_id", async (req, res) => {
//   try {
//     //const { user_id } = req.params;
//     const volunteeredEvents = await Volunteer.findAll({
//       where: {
//         //user_id: req.session.user_id,
//         volunteered: true,
//       },
//       include: [
//         {
//           model: User,
//         },
//         {
//           model: Event,
//         },
//       ],
//     });
//     res.render("volunteered", { volunteeredEvents });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server error");
//   }
// });

// router.get("/volunteered", withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ["password"] },
//       include: [
//         { model: Event, where: { volunteer_id: req.query.volunteer_id } },
//         { model: Volunteer, where: { user_id: req.session.user_id } },
//       ],
//     });

//     const user = userData.get({ plain: true });
//     console.log(user);
//     res.render("volunteered", {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// TODO: See if this will work. Coordinate with Lexi to create cards for this

// router.get("/volunteer", withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ["password"] },
//       include: [
//         { model: Event },
//         { model: Volunteer, where: { user_id: req.session.user_id,
//           event_id: req.session.event_id } },
//       ],
//     });

//     const user = userData.get({ plain: true });

//     res.render("volunteered", {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//CREATE NEW EVENT RENDER

router.get("/new-create-event", (req, res) => {
  if (req.session.logged_in) {
    res.render("new-create-event", {});
    return;
  }
});

//LOGIN RENDER

router.get("/login", (req, res) => {
  //If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

// router.get('/', {
//   res.render()
// })

// router.get('/',
// // withAuth,
//  async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Event }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('homepage', {
//       ...user,
//       //logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//NEW-EVENT-CREATE RENDER
// router.get("/new-event-create", (req, res) => {
//   //If a session exists, redirect the request to the homepage
//   fstat.readfile(path.join(_dirname, "new-create-event.hbs"), (err, data) => {

//     if(err) {
//       return res.status(500).send('something went wrong! try again!');
//     }
//   res.send(data);
//   });

// });

module.exports = router;
