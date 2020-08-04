
// promise

function enrollStudent(student){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('enrolled')
            resolve()
        }, 5000)
    })
}

let new_student = { name : 'ram', subject : 'CS'}
let students = ['shyam', 'mohan']
enrollStudent(new_student).then(function(){
    getStudents()})
.catch(e=>console.log(e))

function getStudents(){
    setTimeout(() => {
        let str = ' '
        students.forEach(student => {
            str += `${student}`
        });
        console.log(str)
        console.log('Fetched')
    }, 5000);
}

