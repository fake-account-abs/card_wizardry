class CondemnedMerchant {
    constructor(stock){
        this.stock = stock;
    }

    sellCard(id, resource){
        const card = this.stock.getCard(id);
        if(resource.isSufficient(card.price)){
            this.stock.removeCard(id);
            return card;
        }
        return null;
    }
}