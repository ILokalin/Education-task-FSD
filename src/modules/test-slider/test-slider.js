export function testSlider() {

const rangeLeft   = document.getElementById("range-left");
const rangeRight  = document.getElementById("range-right");
const greenLine   = document.querySelector('.green-line');
const rangeBullet = document.getElementById("rs-bullet");

function showSliderValue() {
  rangeBullet.innerHTML = rangeLeft.value + " - " + rangeRight.value;
  greenLine.style.left  = rangeLeft.value / 2 + '%'
  greenLine.style.right = (200 - rangeRight.value) / 2 + '%'
}

rangeLeft.addEventListener("input", () => {
  if (rangeLeft.value <= rangeRight.value - 5) {
    showSliderValue()
  } else {
    rangeLeft.value = rangeRight.value - 5; 
  }
});

rangeRight.addEventListener("input", () => {
  
  // Для тестирования значений левого и правого слайдера
  // console.log(rangeLeft.value + ' ' + rangeRight.value)

  // Идентичное, с точки зрения математики условие, но не работает -\_0_/-
  // if (rangeRight.value > rangeLeft.value + 5) {

  // Рабочее условие
  if (rangeRight.value - rangeLeft.value > 5) {
    showSliderValue()
  } else {
    rangeRight.value = rangeLeft.value + 5;
  }
});


}