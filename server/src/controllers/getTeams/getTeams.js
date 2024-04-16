const axios = require("axios")
const {URL_BASE} = require("../../../endpoints");
const {Teams} = require("../../db")

const getTeams = async () =>{
    const teams = [];
    const {data} = await axios(`${URL_BASE}`);
    const teamsdrivers = data.map(team=>{
        return team.teams
    })
    const reps = teamsdrivers.join().split(",");
    reps.forEach(team=>{
        if(team !== "" && !teams.includes(team.trim())) teams.push(team.trim())
    });

    const teamsPromises = teams.map(async(driver)=>{
        const [driverP,boolean] = await Teams.findOrCreate({
            where:{name:driver},
            defaults:{name:driver}
        })
        return driverP
    })
    const resolve = Promise.all(teamsPromises);
    return resolve
    
}

module.exports = getTeams