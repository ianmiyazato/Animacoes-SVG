class Cards {
    constructor() {
        this.posicaoSectionDicas = document.getElementById('section-dicas');
        this.cardEsq = document.querySelector('.card-esq');
        this.cardDir = document.querySelector('.card-dir');
    }

    scrollCards() {
        window.requestAnimationFrame(this.calculoScroll.bind(this));
    }

    calculoScroll() {
        const posicao = this.posicaoSectionDicas.getBoundingClientRect() ['y'];
        if (posicao >= 340) {
            this.cardEsq.style.transform = `translate(${((-posicao) + 340) / 10}%)`;
            this.cardDir.style.transform = `translate(${((posicao) - 340) / 10}%)`;
        }
    }
}

export { Cards }