let {people} = require("../data")

const getPeople = (req,res)=>{
    res.status(200).json({data:people})
}

const createPeople = (req,res)=>{
    const{name}=req.body
    if(!name){
        res.status(401).json({success:false,msg:'pls send correct name'})
    } else{
        res.json({success:true,person:name})
    }
}



const updatePeople = (req,res)=>{
    const{name}=req.body
    const{id} = req.params
    let singleperson = people.filter((person)=>{
        return person.id===Number(id)
    })
    if(!singleperson){
        res.status(401).json({success:false,msg:'no person found with id'})
    } else{
        newpeople=people.map((person)=>{
            if(Number(id)===person.id){
                person.name=name
            }
            return person
        })
        res.json({success:true, data:newpeople})
    }
}

const deletePeople = (req,res)=>{
    const{name}=req.body
    const{id} = req.params
    let singleperson = people.filter((person)=>{
        return person.id===Number(id)
    })
    if(!singleperson){
        res.status(401).json({success:false,msg:'no person found with id'})
    } else{
        newpeople=people.filter((person)=>{
            return (Number(id)!==person.id)
        })
        res.json({success:true, data:newpeople})
    }
}

module.exports = {
    getPeople,
    createPeople,
    updatePeople,
    deletePeople
}