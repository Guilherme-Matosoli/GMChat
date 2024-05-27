export const handleMonth = (month: number) => {
  const months: { [key: number]: string } = {
    0: 'Jan',
    1: 'Fev',
    2: 'Mar',
    3: 'Abr',
    4: 'Mai',
    5: 'Jun',
    6: 'Jul',
    7: 'Ago',
    8: 'Set',
    9: 'Out',
    10: 'Nov',
    11: 'Dez'
  };

  if (month >= 0 && month <= 11) return months[month];

  return undefined;
};
