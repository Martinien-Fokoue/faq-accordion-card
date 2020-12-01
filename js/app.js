var links = document.querySelectorAll('.link'),
    descriptions = document.querySelectorAll('.description');


links.forEach(link => {
    link.addEventListener('click', ()=> {
        var desc = link.parentNode.querySelector('.description');
            link.querySelector('.arrow').classList.toggle('active');
            link.querySelector('a').classList.toggle('active');
            desc.classList.toggle('active');
        descriptions.forEach(description =>{
            if (description.innerHTML !== desc.innerHTML && description.classList.contains('active')) {
                description.classList.remove('active');
                description.parentNode.querySelector('.arrow').classList.remove('active');
                description.parentNode.querySelector('a').classList.remove('active');
            }
        });
    });
});
