const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.json([
        {
            title: "Fundamentals of Personal Finance",
            ownerId: 1,
            description: "fundamentals of personal finance",
            price: 100,
            course: "FINA2203",
            department: "Business"
        },
        {
            title: "young and freedman university physics 13th edition",
            ownerId: 2,
            description: "dank phhysics",
            price: 100000,
            course: "PHY101",
            department: "Physics"
        },
        {
            title: "Algorithms Unlocked",
            ownerId: 2,
            description: "rip my brain",
            price: 12,
            course: "CS101",
            department: "Computer Science"
        },
        {
            title: "Physics 4th Edition",
            ownerId: 2,
            description: "more physics",
            price: 999,
            course: "PHY102",
            department: "Physics"
        }
    ])
})

module.exports = router