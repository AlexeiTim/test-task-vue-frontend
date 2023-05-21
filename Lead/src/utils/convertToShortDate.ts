export const convertToShortDate = (time: string): string => {
  let result = '';
  switch (time) {
    case 'Days':
      result = 'DD'
      break
    case 'Hours':
      result = 'HH'
      break
    case 'Minutes':
      result = 'MM'
      break
    case 'Seconds':
      result = 'SS'
      break
    default:
      throw new Error('bad time');
  }
  return result;
}