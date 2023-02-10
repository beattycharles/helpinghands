const router = require("express").Router();
const { fstat } = require("fs");
const { Event, User, Volunteer } = require("../models");
const withAuth = require("../utils/auth");

// get all events and join with user data

//HOMEPAGE RENDER ALL EVENTS
//Filter by category
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

    res.render("homepage", { events });
  } catch (err) {
    res.status(500).json(err);
  }
});

//This route SUPPOSED TO SHOW individual event page
// MAYBE get back to it

// router.get("/event/:id", withAuth, async (req, res) => {
//   try {
//     const eventData = await Event.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: {
//             exclude: ["password"],
//           },
//         },
//       ],
//     });

//     const event = eventData.get({ plain: true });

//     console.log({ event });

//     res.render("specific-event-details", {
//       ...event,
//       //logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// DASHBOARD RENDER USER'S EVENTS 
// TODO: Add withauth when login is working
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: { model: Event },
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//NEW-EVENT-CREATE RENDER
router.get("/new-create-event", (req, res) => {
  if (req.session.logged_in) {
    res.render("new-create-event", {});
    return;
  }

});

//TODO: Figure out the volunteer routing


//   userData.event... // events created by user in array
//   userData.volunteers.events... //events volunteeredby user
// }

//   userData.event... // events created by user in array
//   userData.volunteers.events... //events volunteeredby user
// Write route to homepage

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



//maybe render

module.exports = router;
