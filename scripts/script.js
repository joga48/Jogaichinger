//NAVIGATION BAR
/*
document.querySelector('#inicio').classList.add('activated');

document.querySelector('#inicio').onclick = function() {
    console.log('Clicou no inicio');
    document.querySelector('#inicio').classList.add('activated');
    document.querySelector('#sobreMim').classList.remove('activated');
    document.querySelector('#faleComigo').classList.remove('activated');
}

document.querySelector('#sobreMim').onclick = function() {
    console.log('Clicou no sobreMim');
    document.querySelector('#inicio').classList.remove('activated');
    document.querySelector('#sobreMim').classList.add('activated');
    document.querySelector('#faleComigo').classList.remove('activated');
}

document.querySelector('#faleComigo').onclick = function() {
    console.log('Clicou no faleComigo');
    document.querySelector('#inicio').classList.remove('activated');
    document.querySelector('#sobreMim').classList.remove('activated');
    document.querySelector('#faleComigo').classList.add('activated');
}
*/
//END navigation bar
document.querySelector('#inicio').classList.add('activated');

const buttons = document.querySelectorAll('.nav__list__item__button');
for(let i = 0; i < buttons.length; i++){
    const option = buttons[i];
    
    option.onclick = function () {
        console.log('clicou em ' + option.getAttribute('id'));
        for(let i = 0; i < buttons.length; i++){
            if(buttons[i].getAttribute('id') === option.getAttribute('id')){
                option.classList.add('activated');
            } else {
                buttons[i].classList.remove('activated');
            }
        }
    }
}