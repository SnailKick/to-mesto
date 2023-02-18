let sum = document.getElementsByClassName('summary');
for (let i = 0; i < sum.length; i++) {
    sum[i].addEventListener('click', function(){
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }
        else {
            content.style.maxHeight = content.scrollHeight + 'px'
        }
        this.classList.toggle('open');
    })
}

