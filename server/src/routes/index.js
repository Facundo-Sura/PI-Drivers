const { Router } = require("express");
const {getAllDrivers} = require("../controllers/getDrivers/getAllDrivers");
const getDriver = require("../controllers/getDrivers/getDriver")
const getDriverQuery = require("../controllers/getDrivers/getDriverQuery")
const postDriver = require("../controllers/postDriver/postDriver")
const getTeams = require("../controllers/getTeams/getTeams")


const router = Router();

router.get("/", async (req,res)=>{
    const {name} = req.query;
    try {
        const driver = name ? await getDriverQuery(name) : await getAllDrivers();
        res.status(200).json(driver)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.get("/teams", async (req,res)=>{
    try {
        const teams = await getTeams();
        res.status(200).json(teams)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.get("/:idDriver", async(req,res)=>{
    const {idDriver} = req.params;
    console.log(req.params)
    try {
        const driver = await getDriver(idDriver)
        res.status(200).json(driver)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

// Al ser pocas rutas voy a ponerlas todas en este archivo, prometo que en el PF las separo (?.

router.post("/", async (req,res)=>{
    try {
        const {name,lastName,description,dob,nationality,image,teams} = req.body
        const driver = await postDriver({ name, lastName, description, dob, nationality, image, teams });
        res.status(201).json(driver)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})


module.exports = router;
