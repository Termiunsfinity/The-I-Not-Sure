var tree = [["p"]]

addLayer("p", {
    name: "Idle Points", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFDC13",
    requires: new Decimal(10),
    resource: "Idle Points", 
    baseResource: "points", 
    baseAmount() {return player.points},
    type: "normal", 
    exponent: 0.9, 
    gainMult() { 
        mult = new Decimal(1)
        return mult
    },
    gainExp() { 
        return new Decimal(1)
    },
    row: 0, 
    hotkeys: [
        {key: "i", description: "I for Idle Points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],

    upgrades: {
        11: {
            title: "A little OP",
            description: "Points boost itself at ^0.99.",
            cost: new Decimal("1"),
            unlocked() {return true}
        }
    },

    layerShown(){return true}
})
