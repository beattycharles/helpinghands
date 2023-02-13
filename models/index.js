const User = require("./user");
const Volunteer = require("./volunteer");
const Event = require("./Event");

User.belongsToMany(Event, {
  as: "volunteer",
  foreignKey: "user_id",
  through: "Volunteer",
  onDelete: "CASCADE",
});

Event.belongsToMany(User, {
  as: "volunteered_event",
  foreignKey: "event_id",
  through: "Volunteer",
  onDelete: "CASCADE",
});

Event.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Event, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { User, Event, Volunteer };
