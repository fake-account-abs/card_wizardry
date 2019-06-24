class PossessedCollector {

    constructor(centralNervousSystem, effciencyIndicator, resourceState){
        this.centralNervousSystem = centralNervousSystem;
        this.effciencyIndicator = effciencyIndicator;
        this.resourceState = resourceState;
    }

    performAction(action){
        const production = this.effciencyIndicator.production;
        const cnsResponse = this.centralNervousSystem.response(action, production);
        const performance = this.effciencyIndicator.actionResult(action);
        const result = cnsResponse.add(performance);
        this.resourceState.modifyState(result);
    }

    getAvailableResources(){
        return this.resourceState.currentState
    }

    buyCard(card){
        const price = card.price;
        this.resourceState.modifyState(price.negate());
        const activityBoost = card.activity;
        this.effciencyIndicator.modifyActivityImpact(activityBoost, 1);
        this.effciencyIndicator.modifyProduction(price.divideBy(40));
        this.resourceState.modifyLimit(new Resource(34,34,34));
    }
}