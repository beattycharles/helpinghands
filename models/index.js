const User = require('./User');
const Volunteer = require('./Volunteer');
const Event = require('./Event');

// Add in the relationships between the table (i.e. one user can have many event but each event only has one user (admin))
User.belongsToMany(Event, {
    as:'volunteer', 
    foreignKey: 'user_id', 
    through: 'Volunteer',
onDelete: 'CASCADE'});

Event.belongsToMany(User, {
    as:'volunteered_event', 
    foreignKey: 'event_id',
    through: 'Volunteer',
    onDelete: 'CASCADE'
});

// each event has one user
Event.belongsTo(User, {
    foreignKey: 'user_id', 
    onDelete: 'CASCADE'
});

User.hasMany(Events, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Volunteer.belongsTo(User, {
//     foreignKey: "id"
// });

// Event.belongsToMany(User, {
//     as:'volunteered_event', 
//     foreignKey: 'Event_id', 
//     through: 'Volunteer'});

// Volunteer.belongsTo(Event, {
//     foreignKey: "event_id"
// });
module.exports = { User, Event, Volunteer };