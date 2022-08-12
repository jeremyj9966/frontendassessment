const favcolor = document.querySelector('#color')
const favplace = document.querySelector('#place')
const favritual = document.querySelector('#ritual')


function color(){
    alert(' My fave color is white');
}
function place(){
alert(' My fave place in the world is Greece');
}
function ritual(){
    alert(' I believe in praying to God !');
}

favcolor.addEventListener('click', color)
favplace.addEventListener('click', place)
favritual.addEventListener('click', ritual)