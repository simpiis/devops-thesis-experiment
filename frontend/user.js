function addClicked(number) {
  number += 1
  return number
}

function subClicked(number) {
  number -= 1
  return number
}

function changeNumber(mod) {
  let newValue;
  if (mod == '+') {
    newValue = addClicked(Number(document.getElementById('valueText').innerHTML))
  } else if (mod == '-') {
    newValue = subClicked(Number(document.getElementById('valueText').innerHTML))
  }
  document.getElementById('valueText').innerHTML = newValue.toString()
}


module.exports = {
  addClicked: addClicked,
  subClicked: subClicked,
};
