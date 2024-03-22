use("palpedia-db")

let res = db["temp-data-2"].findOne({"_id": ObjectId("65d020012a2694e687d53577")})

const partner_list = () => {
    let packet = []
    for (const x in res.Rows){
        let temp = res.Rows[x]
        temp.Name = x
        packet.push(temp)
    }
    return packet
}


// db.createCollection("partners");
db.partners.insertMany(partner_list());