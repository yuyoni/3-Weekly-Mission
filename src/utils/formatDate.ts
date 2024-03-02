import getElapsedTime from "./getElapsedTime";

function formatDateAndDifference(dateString: string) {
  const inputDate = new Date(dateString);
  const currentDate = new Date();

  const formattedDate = dateString.slice(0, 10);

  const timeDifference: number = currentDate.getTime() - inputDate.getTime();
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));

  const elapsedTime = getElapsedTime(minutesDifference);

  return {
    formattedDate,
    elapsedTime,
  };
}

export default formatDateAndDifference;
