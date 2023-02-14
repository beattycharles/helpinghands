# Helping Hands
## Table of Contents

* [Description](#description)
* [Code Examples](#code-examples)
* [Important links](#important-links)
* [Languages Used](#languages-used)
* [Contributors](#contributer)

## Description
    In the post covid world, many find it harder to make connections with their communities. The Helping Hands application helps users find and create support systems within their communities. Users with a need are able to post an event about their need that contains information such as need type (e.g. moving help, food donations etc.), number of volunteers needed, event location and event date. Once an event is created, other users have the option to volunteer their time to fill that need. Users also have access to a user dashbaord that contains all information about events they have create and events they have volunteered for. 

## Code Examples

Example of code used to create the Event Model.

```js
event_type: {
      type: DataTypes.ENUM,
      values: [
        "Moving", 
        "Food Donations", 
        "Baby Sitting", 
        "Fundraising", 
        "Supply Donations"],
        allowNull: false,      
    },

```

Example of code used to create the login function of the application.

```js
router.post('/login', async (req, res) => {
  try {
    console.log('Please log in!!!!!!!!!!!!!!!!!!!!!')
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ where: { email: req.body.email } });

```

Example of code used to create the View of the application.

```js
    <div class="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-blue-200 to-amber-700">
        <form class="p-10 bg-white rounded-xl drop-shadow-lg space-y-5" action="">
            <h1 class="text-center text-yellow-900 text-3xl">helping hands</h1>
```


## Important Links
[GitHub Repository](https://github.com/beattycharles/helpinghands)

[Deployed Application](https://agile-peak-82285.herokuapp.com/)

## Languages Used

* HTML

* CSS

* JS

* Handlebar

## Contributors

Keeley Kerr - [GitHub](https://github.com/keekerr)

Lexi Arbajian - [GitHub](https://github.com/Larbajian)

Denart Ifurung - [Github](https://github.com/difurung)

Jason White - [GitHub](https://github.com/JasonAdalWhite)

Charlie Beatty - [GitHub](https://github.com/beattycharles)
