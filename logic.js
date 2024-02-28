const fs=require("fs")


const addPerson=(id,fname,lname,age,city)=>{
    const ourData=loadData()
    const depulicateData= ourData.filter((k)=>{
        return k.id===id
    }
    )
   // console.log(depulicateData)
   if (depulicateData.length==0){
    ourData.push({
        id:id, 
        fname:fname,
        lname:lname,
        age:age,
        city:city 
   
   
       })
       saveData(ourData)
   } else{
    console.log("ERROR DUPLICATED DATA")
   }
}

   
    

const loadData=()=>{
    try{
    const dataJson=fs.readFileSync("data7.json").toString()
    return JSON.parse(dataJson)
    }
    catch{
        return[]
    }
}
const saveData=(ourData)=>{
    const ourDataJson= JSON.stringify(ourData)
            fs.writeFileSync("data7.json",ourDataJson)
}
const deleteData= (id)=>{
    const allData=loadData()
    const dataToKeep= allData.filter((w)=>{
        return w.id !== id
    })
    saveData(dataToKeep)
    console.log("you have deleted your account sucessfully")
}
const readData=(id)=>{
    const yourData=loadData()
    const dataToRead=yourData.find((v)=>{
        return v.id==id
    })
    //console.log(dataToRead)
    if(dataToRead){
        console.log(dataToRead.fname,dataToRead.lname)
    } else{
        console.log("this id is can not be found")
    }
    
}
const listData=()=>{
    const allData=loadData()
    allData.forEach((q)=>{
        console.log(q.fname, q.age, q.city)

    })

    
}


module.exports={
addPerson,
deleteData,
readData,
listData
}
