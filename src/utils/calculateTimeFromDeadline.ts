const calculateTimeFromDeadLine = (deadline: string) => {
  const currentTime = new Date();
  const endTime = new Date(deadline);
  const duration = +endTime - +currentTime;

  if (duration < 0)
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

  let seconds: string | number = Math.floor((duration / 1000) % 60),
    minutes: string | number = Math.floor((duration / (1000 * 60)) % 60),
    hours: string | number = Math.floor((duration / (1000 * 60 * 60)) % 24),
    days: string | number = Math.floor((duration / (1000 * 60 * 60 * 24)) % 24);
  days = days < 10 ? "0" + days : days;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return {
    hours,
    minutes,
    seconds,
    days,
  };
};

export default calculateTimeFromDeadLine;
