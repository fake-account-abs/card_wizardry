class ResourceState {

    constructor(currentState ,limit){
        this.currentState = currentState;
        this.limit = limit;
    }

    modifyLimit(limitChange){
        this.limit = this.limit.add(limitChange);
    }

    modifyState(stateChange){
        this.currentState = this.currentState.addWithLimit(stateChange, this.limit)
    }


}