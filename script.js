function showAbout(){
    document.querySelector('.about-list').style.display = 'flex';
}

function hideAbout(){
    document.querySelector('.about-list').style.display = 'none';
}

function showAcademics(){
    document.querySelector('.academics-list').style.display = 'flex';
}

function hideAcademics(){
    document.querySelector('.academics-list').style.display = 'none';
}

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    var bT = document.body.getBoundingClientRect().top;

    if(bT+200 < 0){
        document.querySelector('.nav-container').style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
        document.querySelector('.logo').style.color = 'black';
    }else{
        document.querySelector('.nav-container').style.backgroundColor = 'transparent';
        document.querySelector('.logo').style.color = 'whitesmoke';
    }

    for (let i = 0; i < reveals.length; i++) {
        var wH = window.innerHeight;
        var eT = reveals[i].getBoundingClientRect().top;

        if(eT<wH-200){
            if(i%2!=0){
                reveals[i].querySelector('.image').style.animation = 'popRight 1s ease-in-out forwards';
                reveals[i].querySelector('.text').style.animation = 'popRight 2s ease-in-out forwards';
            }else{
                reveals[i].querySelector('.image').style.animation = 'popLeft 1s ease-in-out forwards';
                reveals[i].querySelector('.text').style.animation = 'popLeft 2s ease-in-out forwards';
            }
        }else{
            if(i%2!=0){
                reveals[i].querySelector('.image').style.animation = 'outRight 1s ease-in-out forwards';
                reveals[i].querySelector('.text').style.animation = 'outRight 2s ease-in-out forwards';
            }else{
                reveals[i].querySelector('.image').style.animation = 'outLeft 1s ease-in-out forwards';
                reveals[i].querySelector('.text').style.animation = 'outLeft 2s ease-in-out forwards';
            }
        }
    }
}

window.addEventListener('scroll', reveal);