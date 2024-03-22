use("palpedia-db")
let collection = db.pals
let pals = db.pals.aggregate([{$match: { ZukanIndex: {$gt: 0 }}},{$project: {"Name":1}}]).toArray()
let levelList = db["temp-data-2"].findOne({"_id": ObjectId("65d01f072a2694e687d53570")})

const sliceHelper = (string) => {
    return string.slice(string.lastIndexOf(":")+1, string.length)
}
async function updatePal(query, data){
    try {
        return await db.pals.findOneAndUpdate({"_id": query}, {$set: {"moveLevels": data}}, {new: true}).exec()
    } catch(err){
        return err
    }
}

function palLevels(query, datalist){
    const levels = ["001","007","015","022","030","040","050"];
    let data = datalist.Rows;
    // console.log(data)
    let send = {}
    levels.forEach(level => {
        if(data[query.Name + level]){
            let key = data[query.Name + level].Level
            let value = sliceHelper(data[query.Name + level].WazaID);
            send[key] = value
        }
        // console.log(data[query.Name + level])
    });
    if(send){
        // console.log(send)
        return send
    }else{
        console.log("No level list for" + query.Name);
    }

}

console.log(pals)
for (const pal of pals){
    // console.log(pal)
    // console.log(palLevels(pal, levelList))
    let data = palLevels(pal, levelList);
    if (data){
        updatePal(pal._id, data)
    }else{
        console.log("Didn't updated" + pal.Name)
    }
    
}