function convertKilometersToMeters(kilometers) {
  const meters = kilometers * 1000;
  return meters;
}

let kilometers = 5;
console.log(
  `${kilometers} kilometers is equal to ${convertKilometersToMeters(
    kilometers
  )} meters`
);

kilometers = 0.75;
console.log(
  `${kilometers} kilometers is equal to ${convertKilometersToMeters(
    kilometers
  )} meters`
);

kilometers = 1.2;
console.log(
  `${kilometers} kilometers is equal to ${convertKilometersToMeters(
    kilometers
  )} meters`
);
