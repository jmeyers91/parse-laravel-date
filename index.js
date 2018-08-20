
module.exports = function parseLaravelDate(dateString) {
  // YYYY-MM-DD hh:mm:ss
  const match = dateString.match(/^(\d\d\d\d)-(\d\d)-(\d\d) (\d\d):(\d\d):(\d\d)$/);
  if(!match) throw new Error(`Invalid Laravel date format for input: "${dateString}"`);

  const [
    _,
    year,
    month,
    day,
    hour,
    minute,
    second
  ] = match;
  
  return new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
    parseInt(hour),
    parseInt(minute),
    parseInt(second)
  );
};
