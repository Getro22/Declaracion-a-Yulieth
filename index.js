const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('He estado sintiendo algunas cosas últimamente que me gustaría compartir contigo porque valoro mucho nuestra relación y quiero que sigamos siendo abiertos el uno con el otro No quiero malinterpretar nada pero me he estado sintiendo un poco inseguro en ciertos momentos y eso me ha dejado pensando A veces tengo la sensación de que hay algo que no está del todo claro o que no estamos tan conectados como antesTe lo comento porque confío en ti y en nuestra relación y me gustaría saber cómo te sientes tú   Quiero que ambos estemos tranquilos y en sintonía y no quiero que esta sensación crezca más de lo que debería Qué opinas Estoy dispuesto a escuchar lo que tengas que decir Te quiero mucho y quiero que podamos resolver cualquier cosa que esté afectando nuestra relación')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})




