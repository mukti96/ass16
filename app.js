const button = document.getElementById('apply');
const keep = document.getElementById('keep');
const dis = document.getElementById('discard');
const modal = document.querySelector('.mm-modal');
const mclose = document.querySelector('.mm-modal .close');
const aclose = document.querySelector('.mm-alert .close');
const alert = document.querySelector('.mm-alert');

button.addEventListener('click', function(e){
    e.preventDefault();
    modal.classList.add('active');
});

mclose.addEventListener('click', function(){
    alert.style.display = 'flex'
});

aclose.addEventListener('click', function(){
    alert.style.display = 'none'
});

keep.addEventListener('click', function(){
    alert.style.display = 'none'
});

dis.addEventListener('click', function(){
    alert.style.display = 'none'
    modal.classList.remove('active');
});

modal.addEventListener('click', function(e){
    if(e.target == this){
        modal.classList.remove('active');
    }
});


// accordion start
const acc_header = document.querySelectorAll('.accordion-header');

acc_header.forEach(item => {
    item.addEventListener('click', function(){
        item.classList.toggle('active');
        if(item.classList.contains('active')){
            item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight + 'px'
        }else{
            item.nextElementSibling.style.height = '0px'
        }
    });
});