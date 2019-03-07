let id = document.getElementById('grabId');
let style = document.getElementById('style');

const setCard = () => {
    const card = document.getElementById(id.value)
    console.log(card)
    card.style.color = style.value;
}