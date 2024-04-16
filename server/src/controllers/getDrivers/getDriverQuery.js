const axios = require("axios")
const {URL_QUERY} = require("../../../endpoints")
const {Driver} = require("../../db")
const {filterApiProps} = require("./getAllDrivers")

const getDriverQuery = async (namequery) => {
    const name = namequery.charAt(0).toUpperCase() + namequery.slice(1).toLowerCase()
    const dbdrivers = await Driver.findAll({
        where:{
            name : name
        }
    });
    const {data} = await axios(`${URL_QUERY}${name}`)
    const drivers = filterApiProps(data)
    return [...dbdrivers, ...drivers].slice(0,16)
} 

module.exports = getDriverQuery