use("palpedia-db")

async function updatePal(query, data){
    try {
        return await db.pals.findOneAndUpdate({"_id": query}, {$set: {"Name_en": data}}, {new: true}).exec()
    } catch(err){
        return err
    }
}

//All pals within it's ingame paldeck
let allPals = db.pals.aggregate([{$match: { ZukanIndex: {$gt: 0 }}},{$project: {"Name":1}}]).toArray()
// console.log(allPals)
//English pal names
let lang = db.localization.aggregate([{
    $match: {
        type:"PalName"
    }
    }, {$project: {
    en: 1, type: 1
}}]).toArray()

let en = lang[0]["en"]
// console.log(en)

//Cannot use foreach as the async update returns and breaks the loop. 
for(const pal of allPals){
    let name = pal.Name
    if(name.includes("WindChimes")){
        name = name.replace("WindChimes", "Windchimes");
        // console.log(name)
    }
    if(name.includes("PlantSlime_Flower")){
       name = name.replace("_Flower", "");
    //    console.log(name)
    }
    if(en[`PAL_NAME_${name}`]){
        let en_name = en[`PAL_NAME_${name}`].TextData.LocalizedString
        // console.log(en_name);
        updatePal( pal._id, en_name)
    }else{
        console.log("Can't find: " + pal.Name);
    }     
}