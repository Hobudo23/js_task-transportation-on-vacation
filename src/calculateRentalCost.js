/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let res = 0;

  for (let i = 0; i < days; i++) {
    res += 40;
  }

  if (days >= 3 && days < 7) {
    res -= 20;
  }

  if (days >= 7) {
    res -= 50;
  }

  return res;
}

module.exports = calculateRentalCost;
