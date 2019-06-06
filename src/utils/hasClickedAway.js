function hasClickedAway(element, event) {
  return !element.contains(event.target);
};

export default hasClickedAway;
