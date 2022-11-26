document.addEventListener("DOMContentLoaded", function(){
    sectionOne();
});

const container = document.querySelector('#content');
const box = document.createElement('div');
box.classList.add('box');

function sectionOne()
{
    const halo = document.createElement('p');
    halo.classList.add('textBox');
    halo.innerText = 'Mohon tekan tombol dibawah ya:)';

    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerText = 'Okay'

   button.addEventListener('click', function() {
    sectionTwo();
    
    halo.style.display = "none";
    button.style.display = "none";

   });

    box.append(
        halo,
        button
    );
    container.append(
        box
    );
}
function sectionTwo(){
    const text = document.createElement('p');
    text.classList.add('textBox');
    text.innerText = 'Apakah kamu sayang aku?';

    const buttonIya = document.createElement('button');
    buttonIya.classList.add('btn');
    buttonIya.innerText = 'Sayang';

    const buttonNo = document.createElement('button');
    buttonNo.classList.add('btn');
    buttonNo.innerText = 'Enggak';

    buttonNo.addEventListener('mouseover', function() {
     buttonNo.style.left = `${Math.ceil(Math.random() * 90)}%`;
     buttonNo.style.top = `${Math.ceil(Math.random() * 90)}%`;

    })
    buttonIya.addEventListener('click', function() {
        sectionThree();

    text.style.display = "none";
    buttonIya.style.display = "none";
    buttonNo.style.display = "none";
    })
    box.append(
        text,
        buttonIya,
        buttonNo
    );
    container.append(
        box
    );
}

function sectionThree(){
    const text3 = document.createElement('p');
    text3.classList.add('textBox');
    text3.innerText = 'Apakah kamu Cinta aku?';

    const buttonIya = document.createElement('button');
    buttonIya.classList.add('btn');
    buttonIya.innerText = 'Cinta';

    const buttonNo = document.createElement('button');
    buttonNo.classList.add('btn');
    buttonNo.innerText = 'Enggak';

    buttonNo.addEventListener('mouseover', function() {
     buttonNo.style.left = `${Math.ceil(Math.random() * 90)}%`;
     buttonNo.style.top = `${Math.ceil(Math.random() * 90)}%`;

    })
    buttonIya.addEventListener('click', function() {
        location.href="https://wa.link/10lt4e";
    })
    box.append(
        text3,
        buttonIya,
        buttonNo
    );
    container.append(
        box
    );
}