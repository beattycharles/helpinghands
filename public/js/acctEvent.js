
//saves new event with submission button
// var eventSubmission = document.getElementById("event_submission");

const createEvent = async (event) => {
    event.preventDefault();

    const event_name = document.querySelector('#event_name').value.trim();
    const event_date = document.querySelector('#event_date').value.trim();
    const event_type = document.querySelector('#event_type').value.trim();
    const vol_need = document.querySelector('#volnum').value.trim();
    const event_address = document.querySelector('#address').value.trim();
    const event_description = document.querySelector('#event_description').value.trim();

    if (
      event_name &&
      event_date &&
      event_type &&
      vol_need &&
      event_address &&
      event_description
    ) {
      const createNewEvent = await fetch("/api/myEvents", {
        method: "POST",
        body: JSON.stringify({
          event_name,
          event_date,
          event_type,
          vol_need,
          event_address,
          event_description,
        }),
        headers: { "New-Event": "application/json" },
      });
console.log("are you working")
      if (response.ok) {
        document.location("/dashboard");
      } else {
        alert(createNewEvent.statusText);
      }
    }
};



document
  .querySelector("#event_submission")
  .addEventListener("click", createEvent);

document.querySelector("#user_submission").addEventListener("submit", createUser);





