use("palpedia-db")

//Item collection creation from temp-data
let res = db["temp-data-2"].findOne({"_id": ObjectId("65d01ebb2a2694e687d5356d")})

const sliceHelper = (string) => {
    return string.slice(string.lastIndexOf(":")+1, string.length)
}

// console.log(res);
function itemSpawn_list(){
    // console.log(item_names)
    let packet = [];

    for (const key in res.Rows){
        let temp = res.Rows[key]
        if(res.Rows[key].TreasureBoxGrade){
            temp.TreasureBoxGrade = sliceHelper(res.Rows[key].TreasureBoxGrade)
        }
        packet.push(temp)
    }
    return packet
}

// console.log(itemSpawn_list());
db.createCollection("itemSpawns")
db.itemSpawns.insertMany(itemSpawn_list())