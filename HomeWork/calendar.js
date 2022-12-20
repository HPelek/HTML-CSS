const day = prompt("Please enter a day").toLocaleLowerCase();
switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
    alert("InClass");
    break;
  case "friday":
    alert("Teamwork");
    break;
  case "saturday":
    alert("InClass + Workshop");
    break;
  case "sunday":
    alert("Self-Study");
    break;
  default:
    alert("Please enter a valid day");
    break;
}
