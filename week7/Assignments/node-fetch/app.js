const fetch = require("node-fetch")
const URL = "https://swapi.dev/api"
const peopleEndPoint = `${URL}/people`

const people = []
const getData = function(id){
    const idEndPoint = `${peopleEndPoint}/${id}`
    fetch(idEndPoint)
    .then(res => res.json())
    .then(data => {
        // console.log(`${id} ======>>>>>>>`)
        console.log(data)
        var peopleData = {people, data}
    })
}

var ids =  [2, 3, 6, 10, 20, 30, 300]
ids.forEach(id => {
    // console.log(id)
    getData(id)
})