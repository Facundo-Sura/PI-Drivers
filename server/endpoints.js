// GET http://localhost:5000/drivers
// GET http://localhost:5000/drivers?name.forename={name}
// GET http://localhost:5000/drivers/:{id}

const URL_BASE = "http://localhost:5000/drivers";
const URL_QUERY = "http://localhost:5000/drivers?name.forename="

module.exports = {
    URL_BASE,
    URL_QUERY
}