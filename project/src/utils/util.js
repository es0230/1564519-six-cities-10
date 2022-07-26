function getRandInt (lowerBound = 0, upperBound = 1) {
  return lowerBound + Math.floor(Math.random() * Math.abs(upperBound - lowerBound + 1));
}

export {getRandInt};
