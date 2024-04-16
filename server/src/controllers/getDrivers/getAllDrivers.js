const axios = require("axios");
const {URL_BASE} = require("../../../endpoints");
const { Driver,Teams } = require("../../db");

const filterApiProps = (data) => {
    const drivers = data.map(driver=>{
        const {id,name,nationality,image,dob,description,teams} = driver;
        
        const teamsArray = teams?.split(",")
        const teamsArr = teamsArray?.map(team=>team.trim())
        if(!image.url) image.url = "https://www.infobae.com/new-resizer/S8hu9c8bXRGG3ZZU_XLIU8x3DyA=/992x850/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/PM7KTLYEXNBZRJV6K3BPM2A62Q.jpg";
        return  {
            id,
            name:name.forename,
            lastName:name.surname,
            description,
            dob,
            nationality,
            teams: teamsArr,
            image: image.url,
            byfilterdob: new Date(dob).getTime()
        }
    });
    return drivers
}

const getAllDrivers = async () => {
    const {data} = await axios(URL_BASE);
    const drivers = filterApiProps(data);

    const dbdrivers = await Driver.findAll({
        include:{
            model: Teams,
            as: "teams",
            attributes:["name"],
            through:{
                attributes:[]
            }
        }
    });

    const jsonDrivers = dbdrivers.map(driver=>{
        return {
            ...driver.toJSON(),
            teams : driver.teams.map(t=>t.name),
            byfilterdob : new Date(driver.dob).getTime()
        }
    })

    return [...jsonDrivers, ...drivers]
}


module.exports = {
    getAllDrivers,
    filterApiProps
}