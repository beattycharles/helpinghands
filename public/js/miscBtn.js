//see all event buttons (goes to homepage)
var allEventsBtn= document.getElementById("allEventsBtn");

const seeAll = async (event) => {
    event.preventDefault();

    const event_name = document.querySelector("#alleventname").value.trim();
    const event_date = document.querySelector("#alleventdate").value.trim();
    const event_type = document.querySelector("#alleventtype").value.trim();
    const vol_need = document.querySelector("#alleventvol").value.trim();
    //const event_address = document.querySelector("#alleventstate").value.trim();
    const event_address = document.querySelector("#alleventzip").value.trim();
    const event_description = document.querySelector("#event_description").value.trim();
   // const allEventUser = document.querySelector('#event_description').value.trim();

    if (
      event_name &&
      event_date &&
      event_type &&
      vol_need &&
      //allEventState &&
      event_address &&
     event_description
    ) {
      const response = await fetch("/api/allEvents", {
        method: "GET",
        body: JSON.stringify({
          event_name,
          event_date,
          event_type,
          vol_need,
         // allEventState,
          event_address,
          event_description,
        }),
        headers: { "All-Events": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/homepage");
      } else {
        alert("something went wrong! try again!");
      }
    }
};


//my events (goes to dashboard)

var myEventsBtn = document.getElementById("myEventsBtn");

const seeMyEvents = async (event) => {
    event.preventDefault();

    const event_name = document.querySelector("#myeventname").value.trim();
    const event_date = document.querySelector("#myeventdate").value.trim();
    const event_type = document.querySelector("#myeventtype").value.trim();
    const vol_need = document.querySelector("#myeventvol").value.trim();
    //const myEventState = document.querySelector('#myeventstate').value.trim();
    const event_address = document.querySelector("#myeventzip").value.trim();
    const event_description = document.querySelector("#myeventdescription").value.trim();
    //const event_description = document.querySelector("#myeventadd").value.trim();

    // const volEVentName = document.querySelector('#voleventname').value.trim();
    // const volEventType = document.querySelector('#voleventtype').value.trim();
    // const volEventDate = document.querySelector('#voleventdate').value.trim();
    // const volEventDescription = document.querySelector('#voleventdescription').value.trim();
    // const volEventAdd = document.querySelector('#voleventadd').value.trim();
    // const volEventState = document.querySelector('#voleventstate').value.trim();
    // const volEventZip = document.querySelector('#voleventzip').value.trim();

    
    if (
      event_name &&
      event_date &&
      event_type &&
      vol_need &&
      //myEventState &&
      event_address &&
      myEventAdd &&
      event_description
    ) {
      let response = await fetch("/api/myEvents", {
        method: "GET",
        body: JSON.stringify({
          myEventName,
          myEventDate,
          myEventType,
          myEventVolNum,
          myEventState,
          myEventZip,
          myEventAdd,
          myEventDescription,
        }),
        headers: { "My-Events": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("couldn't load the events you created! try again!");
      }
    }

    if (volEVentName && volEventAdd && volEventDate && volEventDescription && volEventState && volEventType && volEventZip){
        
        let response = await fetch ('/api/allEvents', {
            method: 'GET',
            body: JSON.stringify({myEventName, myEventDate, myEventType, myEventVolNum, myEventState, myEventZip, myEventAdd, myEventDescription}),
            headers: {'Volunteer-Events' : 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert("couldn't load the events you volunteered for! try again!");
          }
    }

};


//more details
/*
var moreDetailsss = document.getElementById("moredetails");

const allEventDescription = document.querySelector('#alleventdescription').value.trim();

const moreDetails = async (event) => {
    event.preventDefault();

    const specEventName = document.querySelector('#speceventname').value.trim();
    const specEventDate = document.querySelector('#speceventdate').value.trim();
    const specEventType = document.querySelector('#speceventtype').value.trim();
    const specEventVolNum = document.querySelector('#speceventvol').value.trim();
    const specEventState = document.querySelector('#speceventstate').value.trim();
    const specEventZip = document.querySelector('#speceventzip').value.trim();
    const specEventUserFname = document.querySelector('#speceventusername').value.trim();
    const specEventUserLname = document.querySelector('#especeventuserlname').value.trim();
    const specEventDesc = document.querySelector('#speceventdesc').value.trim();



    if (specEventDate && specEventDesc && specEventName && specEventState && specEventType && specEventUserFname && specEventUserLname && specEventVolNum && specEventZip) {
        
        const response = await fetch ('/api/allEvents', {
            method: 'GET',
            body: JSON.stringify({specEventDate, specEventDesc, specEventName, specEventState, specEventType, specEventUserFname, specEventUserLname,  specEventVolNum, specEventZip}),
            headers: {'Event-Details' : 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/specific-event-details');
          } else {
            alert("something went wrong! try again!");
          }
    }
};*/

const loginPage = async(event) => {
event.preventDefault();

    if (response.ok) {
        document.location.replace('login');
      } else {
        alert("something went wrong! try again!");
      }
}


document
    .querySelector('allEventsButton')
    .addEventListener('click', seeAll);

document
    .querySelector('myEventsBtn')
    .addEventListener('click', seeMyEvents);

/*document
    .querySelector('moredetails')
    .addEventListener('click', moreDetails);*/

document
    .querySelector('loginPage')
    .addEventListener('click',loginPage);



