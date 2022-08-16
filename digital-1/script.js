function displayTime() {
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var mins = dateTime.getMinutes();
  var secs = dateTime.getSeconds();
  var session = document.getElementById("session");

  if (hrs > 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  document.getElementById("seconds").innerHTML = secs;
  document.getElementById("minutes").innerHTML = mins;
  document.getElementById("hours").innerHTML = hrs;
}
setInterval(displayTime, 10);
