const {Driver} = require("../../db");

const postDriver = async (driver) => {
    const { name, lastName, description, dob, nationality, image, teams } = driver
    const img = "https://www.infobae.com/new-resizer/S8hu9c8bXRGG3ZZU_XLIU8x3DyA=/992x850/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/PM7KTLYEXNBZRJV6K3BPM2A62Q.jpg"
    if(!name||!description||!nationality||!dob) throw Error("Faltan datos")

    for(key in driver){
        if(driver[key] == name || driver[key] == lastName || driver[key] == nationality){
            driver[key] = driver[key].charAt(0).toUpperCase() + driver[key].slice(1)
        }
    };
    
    const drivercreate = await Driver.create({...driver,image:img});
    drivercreate.addTeams(teams);
    return driver
}

module.exports = postDriver