import data from '../data';

export function fetchInitialData() {
  // fetch data
  return data;
}
export function refresh() {
  return Math.floor(Math.random() * Math.floor(10));
}
