class Stock {
    constructor(){
        this.cards = new Map([
            [1, {activity: Activity.PRAY, price: new Resource(80, 20, 15)}],
            [2, {activity: Activity.REST, price: new Resource(90, 90, 100)}],
            [3, {activity: Activity.FEED, price: new Resource(80, 100, 50)}],
            [4, {activity: Activity.WORK, price: new Resource(50, 90, 59)}],
            [5, {activity: Activity.PRAY, price: new Resource(160, 180, 100)}],
            [6, {activity: Activity.REST, price: new Resource(100, 100, 180)}],
            [7, {activity: Activity.FEED, price: new Resource(150, 10, 110)}],
            [8, {activity: Activity.WORK, price: new Resource(150, 100, 50)}],
            [9, {activity: Activity.PRAY, price: new Resource(300, 200, 1)}],
            [10, {activity: Activity.REST, price: new Resource(400, 100, 200)}],
            [11, {activity: Activity.FEED, price: new Resource(100, 200, 400)}],
            [12, {activity: Activity.WORK, price: new Resource(400, 200, 300)}],
        ])
    }

    get getCards(){
        return this.cards;
    }

    getCard(id){
        return this.cards.get(id);
    }

    removeCard(id){
        this.cards.delete(id);
    }
}