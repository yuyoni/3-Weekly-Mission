function formatDateAndDifference(dateString) {
  const inputDate = new Date(dateString);
  const currentDate = new Date();

  const formattedDate = dateString.slice(0, 10);

  const timeDifference = currentDate - inputDate;
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));

  let elapsedTime;

  if (minutesDifference < 2) {
    elapsedTime = "1 minute ago";
  } else if (minutesDifference <= 59) {
    elapsedTime = `${minutesDifference} minutes ago`;
  } else if (minutesDifference < 60 * 24) {
    const hoursDifference = Math.floor(minutesDifference / 60);
    elapsedTime = `${hoursDifference} hours ago`;
  } else if (minutesDifference < 60 * 24 * 30) {
    const daysDifference = Math.floor(minutesDifference / (60 * 24));
    elapsedTime = `${daysDifference} days ago`;
  } else if (minutesDifference < 60 * 24 * 30 * 12) {
    const monthsDifference = Math.floor(minutesDifference / (60 * 24 * 30));
    elapsedTime = `${monthsDifference} months ago`;
  } else {
    const yearsDifference = Math.floor(minutesDifference / (60 * 24 * 30 * 12));
    elapsedTime = `${yearsDifference} years ago`;
  }

  return {
    formattedDate,
    elapsedTime,
  };
}

export default formatDateAndDifference;
