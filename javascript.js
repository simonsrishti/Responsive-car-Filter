const btn = document.querySelectorAll('.btn');
const card = document.querySelectorAll('.card')
const userInput = document.querySelector('.userInput');
const InputBtn = document.querySelector('.inputBtn');
btn.forEach(buttons => {
  buttons.addEventListener('click', (e) => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    e.target.classList.add('active');
    card.forEach(filterCards => {
      filterCards.classList.add('hide');
      if(filterCards.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all' ){
        filterCards.classList.remove('hide')}})})});


InputBtn.addEventListener('click',function () {
let filterInput = userInput.value.toUpperCase();
let elements = document.querySelectorAll('.car-name')
elements.forEach((element,index) => {
  console.log(element,index);
  if(element.innerText.includes(filterInput)){
    card[index].classList.remove('hide')
  }
  else{
    card[index].classList.add('hide')
  }
});
});




