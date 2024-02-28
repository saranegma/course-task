const fs=require('fs')


const yargs=require('yargs')
console.log(yargs.argv)

const data10=require('./logic')
const { json } = require('stream/consumers')





yargs.command(
    {
  command:"add",
  describe:"full name that user provided",
  builder:{
    fname:{
        describe: "first name of user",
        demandOption: true ,
        type: "string",
    },
    lname:{
        describe: "last name of user",
        demandOption: true ,
        type: "string",
    }
  } ,
  handler:(m)=>{
    
    data10.addPerson(m.id,m.fname,m.lname,m.age,m.city)
}

})
yargs.command(
  {
    command:"delete",
    describe:"to delete an account",
    handler:(z)=>{
      data10.deleteData(z.id)
    }
  }
)
yargs.command({
  command:"read",
  describe:"to view an account",
  builder:{
    id:{
      describe:"your account id",
      demandOption:true,
      type:"string",
    }
  },
  handler:(x)=>{
    data10.readData(x.id)
  }
})
yargs.command({
  command:"list",
  describe:"list all people by their first and last names",
  handler:()=>{
 data10.listData()
  }
})


yargs.parse()
