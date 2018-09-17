function sumFor(list) {
  let sum = 0;
  for(i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while(i != list.length) {
    sum += list[i];
    i++
  }
  return sum;
}

function sumRecursion(list) {
  let sum = 0;
  if (sum = 0) {
    let i = 0;
  } else if (i = list.length - 1) {
    return sum;
  } else {
    sum += list[i]
    return sumRecursion(list[i++]);
  }
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function(memo, num){return memo + num});
}

