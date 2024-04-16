const axios = require("axios")
const {URL_BASE} = require("../../../endpoints")
const {Driver, Teams} = require("../../db")

const getDriver = async (idDriver) => {
    if(idDriver.length == 36){
        const dbdriver = await Driver.findByPk(idDriver,{
            include: {
                model: Teams,
                as:"teams",
                attributes:["name"],
                through:{
                    attributes:[]
                }
            }
        });
        return {
            ...dbdriver.toJSON(),
            teams : dbdriver.teams.map(team=>team.name)
        }
    }
        let {data} = await axios(`${URL_BASE}/${idDriver}`)
        data = {
            ...data,
            teams : data.teams?.split(",").map(team=>team.trim()),
            image : data.image.url ? data.image.url : "https://www.infobae.com/new-resizer/S8hu9c8bXRGG3ZZU_XLIU8x3DyA=/992x850/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/PM7KTLYEXNBZRJV6K3BPM2A62Q.jpg",
            name: data.name.forename,
            lastName : data.name.surname,
        }
        return data
}

module.exports = getDriver