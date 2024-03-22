use("palpedia-db")

//Passive collection creation from temp-data

//temp-data of passives for all pals
let res = db["temp-dat-2"].findOne({"_id": ObjectId("65d01f8e2a2694e687d53574")})

//helps with removing game specific variable names from data. i.e: EPalWazaID::
const sliceHelper = (string) => {
    return string.slice(string.lastIndexOf(":")+1, string.length)
}

//Returns an simple Json object of all the passives with it's name as _id
const passive_list = () => {
    let packet = []
    for (const x in res.Rows){
        let temp = res.Rows[x]
        
        //Iterating through document to remove game specific variable with sliceHelper()
        for(const [key, value] of Object.entries(temp)){
            if(typeof value === "string"){
                if (value.includes("::")){
                    temp[key] = sliceHelper(value)
                }
            }
        }
        temp.Name = x
        packet.push(temp)
    }
    // console.log(packet)
    return packet
}

// passive_list()

//Creating the move collection and inserting the modified move list documents into collection. 
db.createCollection("passives");
db.passives.insertMany(passive_list());