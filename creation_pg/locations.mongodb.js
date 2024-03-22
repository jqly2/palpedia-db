use("palpedia-db")

let res = db["temp-data-2"].findOne({"_id": ObjectId("65d01ee52a2694e687d5356e")})

const location_list = () => {
    let packet = []
    for (const x in res.Rows){
        let temp = res.Rows[x]
        temp.palId = x
        packet.push(temp)
    }
    return packet
}


// db.createCollection("locations");
db.locations.insertMany(location_list());