//NEW EVENT MODAL
var eventModalBtn = document.getElementById("event_modal");
var eventModal = document.getElementById("eventModal");
var eventCloseModal = document.getElementsByClassName("eventclose");

//displays creat event modal
eventModalBtn.addEventListener("click", function() {
    eventModal.style.display = "block";
})

//saves new event with submission button
var eventSubmission = document.getElementById("event_submission");

const createEvent = async (event) => {
    event.preventDefault();

    const eventName = document.querySelector('#event_name').value.trim();
    const eventDate = document.querySelector('#event_date').value.trim();
    const eventType = document.querySelector('#event_type').value.trim();
    const volNum = document.querySelector('#volnum').value.trim();
    const eventState = document.querySelector('#state').value.trim();
    const eventZip = document.querySelector('#eventzip').value.trim();
    const eventDescription = document.querySelector('#event_description').value.trim();

    if (eventName && eventDate && eventType && volNum && eventState && eventZip && eventDescription) {
        
        const createNewEvent = await fetch ('/api/myEventsRoutes', {
            method: 'POST',
            body: JSON.stringify({eventName, eventDate, eventType, volNum, state, eventZip, eventDescription}),
            headers: {'New-Event' : 'application/json'},
        });

        if (response.ok) {
            document.location('/event');
          } else {
            alert(createNewEvent.statusText);
          }
    }
};

eventSubmission.onclick = createEvent();



//closes event modal when X is clicked (same ftn for both modals)
eventCloseModal.addEventListener("click", function() {
    eventModal.style.display = "none";
})


//NEW USER MODAL
var userModalBtn = document.getElementById("userModalBtn");
var userModal = document.getElementById("acctModal");
var userCloseModal = getElementById("userclose");

//displays new user modal when clicked
userModalBtn.addEventListener("click", function () {
    userModal.style.display = "block";
})

//saves new user with submission button
var newUser = document.getElementsById("user_submission");

const createUser = async (event) => {
    event.preventDefault();

    const fName = document.querySelector('#fname').value.trim();
    const lName = document.querySelector('#lname').value.trim();
    const birthday = document.querySelector('#birthday').value.trim();
    const userState = document.querySelector('#state').value.trim();
    const userZip = document.querySelector('#userzip').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (fName && lName && birthday && userState && userZip && email && password) {
        //changed userRouter to homeRoutes
        const createNewUser = await fetch ('/api/homeRoutes', {
            method: 'POST',
            body: JSON.stringify({fName, lName, birthday, userState, userZip, email, password}),
            headers: {'New-User' : 'application/json'},
        });

        if (response.ok) {
            document.location('/user');
        } else {
            alert(createNewUser.statusText);
        }
    }
};

newUser.onclick = createUser();

//close new user modal 
userCloseModal.addEventListener("click", function() {
    userModal.style.display = "none";
})