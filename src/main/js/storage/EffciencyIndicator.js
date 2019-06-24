class EffciencyIndicator {

    constructor(production, centralNervousSystem){
        this.production = production;
        this.activityImpact = new Map([
            [Activity.WORK, 1],
            [Activity.FEED, 1],
            [Activity.REST, 1],
            [Activity.PRAY, 1]
        ]);
        this.centralNervousSystem = centralNervousSystem;
    }

    modifyProduction(productionChange){
        this.production = this.production.add(productionChange);
    }

    modifyActivityImpact(activity, change){
        const current = this.activityImpact.get(activity);
        this.activityImpact.set(activity, current + change);
    }

    actionResult(action){
        switch (action) {
            case Activity.PRAY: {
                return new Resource(0, this.production.mana * this.activityImpact.get(Activity.PRAY), -1 * this.production.gold / 3);
            }
            case Activity.WORK: {
                return new Resource(-1 * this.production.blood / 3, 0, this.production.gold * this.activityImpact.get(Activity.WORK));
            }
            case Activity.FEED: {
                return new Resource(this.production.blood * this.activityImpact.get(Activity.FEED), -1 * this.production.mana , 0);
            }
            case Activity.REST: {
                const amountOfRest = this.centralNervousSystem.lastStreakOf(Activity.REST);
                const maxBuffFromRest = Math.max(3, amountOfRest);
                return new Resource(
                    this.production.blood * maxBuffFromRest / 3 * this.activityImpact.get(Activity.REST),
                    this.production.mana * maxBuffFromRest / 3 * this.activityImpact.get(Activity.REST),
                    0);
            }
        }
    }

}