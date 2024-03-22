use("palpedia-db")

// let skill = db["temp-data"].find({}).toArray()
// let pals = db.pals.find({"passivePartner.Names": null, passivePartner: {$exists: true}, "passivePartner.Names0": {$exists: false}}).toArray()

const sliceHelper = (string) => {
    return string.slice(string.lastIndexOf(":")+1, string.length)
}

// async function updatePartner(query, data){
//     try {
//         return await db.partners.findOneAndUpdate({"Name": query}, {$set: data}, {new: true}).exec()
//         // return console.log(res);
//     } catch(err){
//         return err
//     }
// } 

// async function updateMove(query, data){
//     try {
//         return await db.moves.findOneAndUpdate({"WazaType": query}, {$set: data}, {new: true}).exec()
//         // return console.log(res);
//     } catch(err){
//         return err
//     }
// } 

// async function updatePal(query, data){
//     try {
//         return await db.pals.findOneAndReplace({"Name": query}, {$set: data}, {returnNewDocument: true}).exec()
//         // return console.log(res);
//     } catch(err){
//         return err
//     }
// }

// for(const pal of pals){
//     let query = skill.find((element) => element.palName === pal.Name)
//     // console.log(query)
//     updatePal(pal.palName, {"passivePartner": {"Names": query.skill[0].passiveName}})

// }

// for(const element of skill){
    // if(element.skill){
        // if(typeof element.skill === "object" && element.skill.passiveName){
            // updatePal(element.palName, {"activePartner": {"Names": element.skill.passiveName}})
            // console.log("update Active: " + element.palName)
        // }else if(typeof element.skill === "object" && element.skill.itemSpawnId){
            // updatePal(element.palName, {"itemPartner": {"Names": element.skill.itemSpawnId}})
            // console.log("update Item: " + element.palName)
        // }else{
            // if(element.skill.length === 1){
                // updatePal(element.palName, {"passivePartner": {"Names": element.skill[0].passiveName}})
                // console.log("update Passive: " + element.palName)
            // }else{
                // element.skill[0].passiveName
                // updatePal(element.palName, {"passivePartner": {"Names0": element.skill[0].passiveName, "Names1": element.skill[1].passiveName, "ElementType0": sliceHelper(element.skill[0].typeElement), "ElementType1": sliceHelper(element.skill[1].typeElement)}})
                // console.log("update Passives: " + element.palName)
            // }
        // }
    // }
    // if(element.active){
        // if(element.active.WazaID){
            // let moveName = sliceHelper(element.active.WazaID)
            // console.log(moveName);
            // let moveData = {"ValueByRank": element.active["ActiveSkill_MainValueByRank"]}
            // updateMove(moveName, moveData)    
            // console.log("update Move: " + moveName)
        // }
        // else if(element.active["ActiveSkill_MainValueByRank"] && !element.active.WazaId){
        //     let partnerName = element.active.activeName
        //     let partnerData = {"ValueByRank": element.active["ActiveSkill_MainValueByRank"]}
        //     updatePartner(partnerName, partnerData)
        //     // console.log("update Partner: " + partnerName)
        // }
    // }
    // console.log(element)
// };