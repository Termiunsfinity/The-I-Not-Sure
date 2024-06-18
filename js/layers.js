var tree = [["p"]]

addLayer("p", {
    layer: "p",
    name: "Idle Points", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
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
    effectDescription(){
        return "Which gives +" + format(player.p.points.add(1)) + " of base point/s."

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
        },
        12: {
            title: "INTerting",
            description: "IP boostes Points very slightly. (log(x))",
            cost: new Decimal("1e24"),
            unlocked() {return true}
        },
        13: {
            title: "Timed Gaming",
            description: "Time in IP boosts points (t^2)",
            cost: new Decimal("1e84"),
            unlocked() {return true}
        },
        21: {
            title: "Formulae",
            description: "Boost INTerting Exponent based on points.",
            cost: new Decimal("1e120"),
            unlocked() {return true}
        },
        22: {
            title: "What. Active in Idle?",
            description: "Points OoM boost points.",
            cost: new Decimal("1e214").pow(10.48576),
            unlocked() {return true}
        },
        23: {
            title: "Tell sombody to STOP INFLATION!!!",
            description: "Time in this reset boostes U21.",
            cost: new Decimal(2).pow(10241),
            unlocked() {return true}
        },
        31: {
            title: "Your generic stuff",
            description: "Reapply U22 but 2x stronk",
            cost: new Decimal(2).pow(16451),
            unlocked() {return true}
        }
    },

    layerShown(){return true}
})

