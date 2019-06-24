class Inbound {

    constructor(condemnedMerchant, possessedCollector, viewRenderer, resourceState){
        this.condemnedMerchant = condemnedMerchant;
        this.possessedCollector = possessedCollector;
        this.viewRenderer = viewRenderer;
        this.resourceState = resourceState;
    }

    work(){
        this.possessedCollector.performAction(Activity.WORK);
        this.render();
    }

    feed(){
        this.possessedCollector.performAction(Activity.FEED);
        this.render();

    }

    pray(){
        this.possessedCollector.performAction(Activity.PRAY);
        this.render();
    }

    rest(){
        this.possessedCollector.performAction(Activity.REST);
        this.render();
    }

    buyCard(id){
        const resource = this.possessedCollector.getAvailableResources();
        const card = this.condemnedMerchant.sellCard(id, resource);
        if(card == null){
            return;
        }
        this.possessedCollector.buyCard(card);
        this.render();
    }

    render() {
        this.checkEndOfGame();
        this.viewRenderer.render();
    }

    checkEndOfGame(){
        const state = this.resourceState.currentState;
        if(state.blood < 1 || state.mana < 1 || state.gold < 1){
            alert("You are dead my friend!")
        }
        if(state.blood === 508 && state.mana === 508 && state.gold === 508 ){
            alert("You win! Now implement more logic!!!")
        }

    }
}