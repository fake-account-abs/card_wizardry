class CentralNervousSystem {
    constructor(){
        this.actions = [];
        this.day = 8;
    }

    response(action, production){
        this.actions.push(action);

        const restPenalty = this.calculateRestPenalty();
        const workPenalty = this.calculateWorkPenalty();
        const feedPenalty = this.calculateFeedPenalty();
        const prayPenalty = this.calculatePrayPenalty();

        return restPenalty.add(workPenalty).add(feedPenalty).add(prayPenalty).multiply(production.divideBy(3));
    }



    countLastActions(action){
        const lastDay = this.actions.slice(-1 * this.day);
        const foundActions = lastDay.filter(value => value === action);
        return foundActions.length
    }

    lastStreakOf(action){
       return this.actions.slice(-1 * this.day).reverse().reduce((value, calculation) => {
            if(value !== action){
                return 0;
            }
            return calculation + 1;
        }, 0);
    }

    calculateRestPenalty() {
        const restAmount = this.countLastActions(Activity.REST);
        if(restAmount > 7){
            return new Resource(-10, -10, -10)
        }
        if(restAmount > 6){
            return new Resource(-6, -6, -6)
        }
        if(restAmount > 5){
            return new Resource(-3, -3, -3)
        }
        if(restAmount < 1){
            return new Resource(-10, -10, -10)
        }
        if(restAmount < 2){
            return new Resource(-3, -3, -3)
        }
        if(restAmount < 3){
            return new Resource(-2, -2, -2)
        }
        return new Resource(0, 0, 0);
    }

    calculateWorkPenalty() {
        const workAmount = this.countLastActions(Activity.WORK);
        if(workAmount >= 4){
            return new Resource(-8, -10, 0);
        }
        if(workAmount >= 6){
            return new Resource(-18, -10, 0);
        }
        return new Resource(0, 0, 0);
    }


    calculateFeedPenalty() {
        const feedAmount = this.countLastActions(Activity.FEED);
        if(feedAmount >= 4){
            return new Resource(-2, -10, -5);
        }
        if(feedAmount >= 6){
            return new Resource(-3, -10, -18);
        }
        return new Resource(0, 0, 0);
    }

    calculatePrayPenalty() {
        const prayAmount = this.countLastActions(Activity.PRAY);
        if(prayAmount >= 4){
            return new Resource(-2, 10, -5);
        }
        if(prayAmount >= 6){
            return new Resource(-30, 20, -18);
        }
        return new Resource(0, 0, 0);
    }
}