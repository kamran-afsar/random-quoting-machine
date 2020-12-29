export const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857',
  '#B3B3B3',
  '#999999',
  '#737373',
  '#666666',
  '#4D4D4D',
  '#333333',
  '#1A1A1A',
  '#A33D2A',
  '#8E192E',
  '#943670',
  '#237B4B',
];

export const getRandomColor = (): string => {
  const ranNum = Math.floor(Math.random() * colors.length);
  return colors[ranNum].toString();
}