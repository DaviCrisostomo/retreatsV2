const filename = '../data/retreats.json'
let retreats = require(filename)
const helper = require('../helpers/helper')

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
        helper.mustBeInArray(retreats, id)
        .then(retreat=>resolve(retreat))
        .catch(err => reject(err))
    })
}

function insertRetreat(newRetreat){
     return new Promise((resolve, reject) => {
        const id = { id: helper.generateNewId(posts) }
    
        newRetreat = { ...id, ...newRetreat }
        retreats.push(newRetreat)
        helper.writeJSONFile(filename, retreats)
        resolve(newRetreat)
    })
}

function updateRetreat(id, newRetreat){
     return new Promise((resolve, reject) => {
        helper.mustBeInArray(retreats, id)
        .then(retreat => {
            const index = retreats.findIndex(r => r.id == retreat.id)
            id = { id: retreat.id }
             
            posts[index] = { ...id,...newPost }
            helper.writeJSONFile(filename, retreats)
            resolve(retreats[index])
        })
        .catch(err => reject(err))
    })
}
function deleteRetreat(id){
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(retreats, id)
        .then(() => {
            retreats = retreats.filter(r => r.id !== id)
            helper.writeJSONFile(filename, retreats)
            resolve()
        })
        .catch(err => reject(err))
    })
}

module.exports={
    getRetreats,
    getRetreat,
    
    insertRetreat,
    updateRetreat,
    deleteRetreat
}