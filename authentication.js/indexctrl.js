const college=[
    {Name:'cvr',loc:"hyd"},
    {name:'cmr',location:"hyd"}
]
const get=(req,res)=>{
    res.json(college)
    res.status(200)
}
const read=(req,res)=>{
    res.status(200)
    res.send('tier 1 clleges')
}
module.exports={
    get,read
}