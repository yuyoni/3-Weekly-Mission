import getElapsedTime from "./getElapsedTime";

function formatDateAndDifference(dateString) {
  const inputDate = new Date(dateString);
  const currentDate = new Date();

  const formattedDate = dateString.slice(0, 10);

  const timeDifference = currentDate - inputDate;
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));

  const elapsedTime = getElapsedTime(minutesDifference);

  return {
    formattedDate,
    elapsedTime,
  };
}

export default formatDateAndDifference;
