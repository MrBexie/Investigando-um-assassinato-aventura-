const avança = document.querySelectorAll('.btn-escolha');

avança.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.passos.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-escolha');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})
