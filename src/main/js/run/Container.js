class Container {

    constructor(){
        this.resourceState = new ResourceState(
            new Resource(20, 20, 20),
            new Resource(100, 100, 100)
        );

        this.stock = new Stock();

        this.viewRendered = new ViewRenderer(this.resourceState, this.stock);

        this.centralNervousSystem = new CentralNervousSystem();

        this.effciencyIndicator = new EffciencyIndicator(
            new Resource(3, 3, 3),
            this.centralNervousSystem
        );

        this.condemnedMerchant = new CondemnedMerchant(this.stock);
        this.possessedCollector = new PossessedCollector(this.centralNervousSystem, this.effciencyIndicator, this.resourceState);

        this.inbound = new Inbound(this.condemnedMerchant, this.possessedCollector, this.viewRendered, this.resourceState);
    }
}