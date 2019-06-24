/**
 * Class is immutable. It means it doesn't change its state but generates new class from each method.
 */
class Resource {
    constructor(blood, mana, gold){
        this.blood = blood;
        this.mana = mana;
        this.gold = gold;
    }

    addWithLimit(anotherResource, resourceLimit){
        const added = this.add(anotherResource);

        const newBlood = added.blood > resourceLimit.blood ? resourceLimit.blood : added.blood;
        const newMana = added.mana > resourceLimit.mana ? resourceLimit.mana : added.mana;
        const newGold = added.gold > resourceLimit.gold ? resourceLimit.gold : added.gold;

        return new Resource(newBlood, newMana, newGold)
    }

    add(anotherResource){
        const addedBlood = this.blood + anotherResource.blood;
        const addedMana = this.mana + anotherResource.mana;
        const addedGold = this.gold + anotherResource.gold;

        return new Resource(addedBlood, addedMana, addedGold);
    }

    isSufficient(anotherResource){
        return this.blood >= anotherResource.blood &&
            this.mana >= anotherResource.mana &&
            this.gold >= anotherResource.gold;
    }

    negate(){
        return new Resource(-1*this.blood, -1*this.mana, -1*this.gold);
    }

    divideBy(value){
        return new Resource(this.blood/value, this.mana/value, this.gold/value);
    }

    multiply(anotherResource){
        return new Resource(
            this.blood * anotherResource.blood,
            this.mana * anotherResource.mana,
            this.gold * anotherResource.gold)
    }
}