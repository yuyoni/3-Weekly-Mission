const MINUTES_IN_DAY = 60 * 24;
const MINUTES_IN_MONTH = 60 * 24 * 30;
const MINUTES_IN_YEAR = 60 * 24 * 30 * 12;

export default function getElapsedTime(minutesDifference) {
  let elapsedTime;

  if (minutesDifference < 2) {
    elapsedTime = "1 minute ago";
  } else if (minutesDifference <= 59) {
    elapsedTime = `${minutesDifference} minutes ago`;
  } else if (minutesDifference < MINUTES_IN_DAY) {
    const hoursDifference = Math.floor(minutesDifference / 60);
    elapsedTime = `${hoursDifference} hours ago`;
  } else if (minutesDifference < MINUTES_IN_MONTH) {
    const daysDifference = Math.floor(minutesDifference / MINUTES_IN_DAY);
    elapsedTime = `${daysDifference} days ago`;
  } else if (minutesDifference < MINUTES_IN_YEAR) {
    const monthsDifference = Math.floor(minutesDifference / MINUTES_IN_MONTH);
    elapsedTime = `${monthsDifference} months ago`;
  } else {
    const yearsDifference = Math.floor(minutesDifference / MINUTES_IN_YEAR);
    elapsedTime = `${yearsDifference} years ago`;
  }

  return elapsedTime;
}
