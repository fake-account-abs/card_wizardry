class ViewRenderer{
    constructor(resourceState, stock){
        this.resourceState = resourceState;
        this.stock = stock;
    }

    render(){
        this.renderCollector();
        this.renderMerchant();
    }

    renderCollector() {
        const state = this.resourceState.currentState;
        const limit = this.resourceState.limit;


        this.progressBarRender("Blood", "bg-danger", Math.round(state.blood), limit.blood);
        this.progressBarRender("Mana", "bg-primary", Math.round(state.mana), limit.mana);
        this.progressBarRender("Gold", "bg-warning", Math.round(state.gold), limit.gold);
    }

    progressBarRender(name, colourSelector, currentState, maxState){
        const progressBar = document.querySelector(".progress-bar." + colourSelector);
        const level = currentState * 100 / maxState;
        progressBar.setAttribute("style", `width: ${level}%`);
        progressBar.innerHTML = `${name} ( ${currentState} / ${maxState} )`;
    }

    renderMerchant(){
        const stockItems = this.stock.cards;
        const deck = document.querySelector(".nav.nav-pills");
        deck.innerHTML = Array.from(stockItems).map(([key, value]) =>
        `
                <li class="nav-item">
                    <button type="button" class="btn btn-outline-dark" id="${key}" onclick="container.inbound.buyCard(${key})">
                        ${value.activity}
                        <span class="badge">
                            <span class="badge badge-danger">${value.price.blood}</span>
                            <span class="badge badge-primary">${value.price.mana}</span>
                            <span class="badge badge-warning">${value.price.gold}</span>
                        </span>
                    </button>
                </li>
        `
        ).join("")
    }
}