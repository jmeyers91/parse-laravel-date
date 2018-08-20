
module.exports = function parseLaravelDate(dateString) {
  const match = dateString.match(/^(\d\d\d\d)-(\d\d)-(\d\d) (\d\d):(\d\d):(\d\d)$/);
  if(!match) throw new Error(`Invalid Laravel date format for input: "${dateString}"`);

  const year = parseInt(match[1]);
  const month = parseInt(match[2]) - 1;
  const day = parseInt(match[3]);
  const hour = parseInt(match[4]);
  const minute = parseInt(match[5]);
  const second = parseInt(match[6]);
  
  return new Date(year, month, day, hour, minute, second);
};
