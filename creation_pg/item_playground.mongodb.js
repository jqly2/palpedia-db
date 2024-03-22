use("palpedia-db")

//Item collection creation from temp-data
let res = db["temp-data-2"].findOne({"_id": ObjectId("65d01e38d2d1b4e2e101fb23")})

const sliceHelper = (string) => {
    return string.slice(string.lastIndexOf(":")+1, string.length)
}

// console.log(res);
function item_list(){
    const item_names = Object.keys(res.Rows);
    // console.log(item_names)
    let packet = [];
    item_names.forEach(element => {
        // console.log(element)
        let temp = res.Rows[element]
        // console.log(temp)
        for(const [key, value] of Object.entries(temp)){
            if(typeof value === "string"){
                if (value.includes("::")){
                    temp[key] = sliceHelper(value)
                }
            }
        }
        temp.Name = element
        packet.push(temp)
    });
    return packet
}

// db.createCollection("items")
db.items.insertMany(item_list())