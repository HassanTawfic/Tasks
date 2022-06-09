
const util = require('util')
const eventEmitter = require('events')

function Student(){
    eventEmitter.call(this)
    this.name = "Hassan"
    this.job = "Web Developer"
    
}

util.inherits(Student,eventEmitter)

let student1 = new Student()
student1.on("test",function(variable1){
    console.log(variable1)
})
for(let i=0;i<10;i++)
student1.emit("test",i)