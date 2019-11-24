const filename = '../data/retreats.json'
let retreats = require(filename)
const helper = require('../helpers/helper')
const jsonPath = './data/retreats.json'


function getRetreats(){
    return new Promise((resolve, reject)=>{
        if(retreats.length === 0){
            reject({
                message: 'no posts available',
                status: 202
            })
        }
        resolve(retreats)
    })
}

function getRetreat(id){
    return new Promise ((resolve, reject)=>{
        helper.searchingById(retreats, id)
        .then(retreat=>resolve(retreat))
        .catch(err => reject(err))
    })
}

function insertRetreat(newRetreat){
    
     return new Promise((resolve, reject) => {
        const id = { id: helper.generateNewId(retreats) }
        
        newRetreat = { ...id, ...newRetreat }
       
        retreats.push(newRetreat)
    
       helper.writeJSONFile(jsonPath, retreats)
        resolve(newRetreat)
    })
}

function updateRetreat(id, newRetreat){
     return new Promise((resolve, reject) => {
        helper.searchingById(retreats, id)
        .then(retreat => {
            const index = retreats.findIndex(r => r.id == retreat.id)
            id = { id: retreat.id }
             
            retreats[index] = { ...id,...newRetreat }
            helper.writeJSONFile(jsonPath, retreats)
            resolve(retreats[index])
        })
        .catch(err => reject(err))
    })
}
function deleteRetreat(id){
    return new Promise((resolve, reject) => {
        helper.searchingById(retreats, id)
        .then(() => {
            retreats = retreats.filter(r => r.id != id)
            helper.writeJSONFile(jsonPath, retreats)
            resolve()
        })
        .catch(err => reject(err))
    })
}

module.exports={
    getRetreat,
    getRetreats,
    insertRetreat,
    updateRetreat,
    deleteRetreat
}