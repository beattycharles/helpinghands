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

    let event_name = document.querySelector("#myeventname").value.trim();
    let event_date = document.querySelector("#myeventdate").value.trim();
    let event_type = document.querySelector("#myeventtype").value.trim();
    let vol_need = document.querySelector("#myeventvol").value.trim();
    let event_address = document.querySelector("#myeventadd").value.trim();
    let event_description = document.querySelector("#myeventdescription").value.trim();
    
    if (
      event_name &&
      event_date &&
      event_type &&
      vol_need &&
      event_address &&
      event_description
    ) {
      let response = await fetch("/api/myEvents", {
        method: "GET",
        body: JSON.stringify({
          event_name,
          event_date,
          event_type,
          vol_need,
          event_address,
          event_description,
        }),
        headers: { "My-Events": "application/json" },
      });
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("couldn't load the events you created! try again!");
      }
    }
    }

    ////////////////////////////////////////////////
    //VOLUNTEER CARD FUNCTION USING 2 API ROUTES
    //ONE FOR EVENT DETAILS, ONE FOR USER (CREATOR) NAME

    const seeVolEvents = async (event) => {
        event.preventDefault();

    const event_name = document.querySelector("#voleventname").value.trim();
    const volunteer_type = document.querySelector("#voleventtype").value.trim();
    const volunteer_date = document.querySelector("#voleventdate").value.trim();
    const event_description = document.querySelector("#voleventdescription").value.trim();
    const vol_need = document.querySelector("#voleventneed").value.trim();
    const event_address = document.querySelector("#voleventadd").value.trim();
    const first_name = document.querySelector("#creator_firstname").value.trim();
    const last_name = document.querySelector("#creator_lastname").value.trim();

    let volEventData; 
    if (
        event_name && 
        volunteer_date && 
        volunteer_type &&
        event_address && 
        event_description &&
        vol_need 
        ) {
        const volEventResponse = await fetch ("/api/volunteer", {
            method: "GET",
            body: JSON.stringify({
                event_name, 
                volunteer_date,  
                volunteer_type, 
                vol_need, 
                event_address, 
                event_description
            }),
            headers: {"Content-Type" : "application/json"},
            });

        volEventData = await volEventResponse.json();
    } if (!volEventData.ok) {
        alert("volunteer event data did not load");
    }

    let eventData; 
    if (
        event_name && 
        event_address && 
        event_description &&
        vol_need 
        ) {
        const eventResponse = await fetch ("/api/allEvents", {
            method: "GET",
            body: JSON.stringify({
                event_name,
                vol_need, 
                event_address, 
                event_description
            }),
            headers: {"Content-Type" : "application/json"},
            });

        eventData = await eventResponse.json();
    } if (!volEventData.ok) {
        alert("event data did not load");
    }
    
    let creatorData;
    if (
        first_name &&
        last_name
        ) {
        const creatorNameResponse = await fetch ("api/users", {
            method: "GET",
            body: JSON.stringify ({
                first_name,
                last_name
            }), 
            headers :{ "Content-Type" : "application/json"},
            });

        creatorData = await creatorNameResponse.json();
        } if (!creatorData.ok) {
            alert("creator data did not load");
        }

        const combinedResponses = { ... volEventData, ...eventData, ... creatorData }; 
            document.location.replace("/dashboard");
        
    }

 





const loginPage = async(event) => {
event.preventDefault();

    if (response.ok) {
        document.location.replace("login");
      } else {
        alert("something went wrong! try again!");
      }
}


document
    .querySelector("allEventsButton")
    .addEventListener("click", seeAll);

document
    .querySelector("myEventsBtn")
    .addEventListener("click", seeMyEvents);

/*document
    .querySelector("myEventsBtn")
    .addEventListener("click", seeVolEvents);*/

document
    .querySelector("loginPage")
    .addEventListener("click",loginPage);


    ///////////////////////////////////////////////////

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


