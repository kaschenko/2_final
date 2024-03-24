const totalDays = 2;
const numberOfChest = 80;

function getRandomInt(max = numberOfChest) {
  return Math.floor(Math.random() * max);
}

const hvostovkaChestNumber = getRandomInt(numberOfChest);
console.log(`Номер удачного сундук ${hvostovkaChestNumber}`);

console.log(`Открытие 79 сундуков более чем за сутки до начала праздника`);
for (let i = 0; i < numberOfChest - 1; i++) {
  if (i == hvostovkaChestNumber) {
    setTimeout(() => {
      console.log(`Невиданная удача от 'Золотой хвостовки'`);
    }, 1);
  } else {
    console.log(`Замечено, что нет удачи, значит хвостовка в последнем ящике`);
  }
}

console.log(`Проведено 79 испытаний одним испытателем - ответ.`);
