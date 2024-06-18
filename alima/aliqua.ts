// Assuming that the variable 'riyadIncome' is an object and 'prop' is a valid property of the object
if (typeof riyadIncome === 'object' && riyadIncome !== null) {
  if (typeof prop === 'string' && prop.length > 0) {
    if (Object.prototype.hasOwnProperty.call(riyadIncome, prop)) {
      console.log(riyadIncome[prop]);
    } else {
      console.log(`Property '${prop}' does not exist in the object.`);
    }
  } else {
    console.log('Invalid property name');
  }
} else {
  console.log('Invalid income object');
}
