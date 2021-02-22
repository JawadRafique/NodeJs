const fs = require('fs');

//read File 

// fs.readFile('note.txt', (err,data) => {
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log(data.toString())
//     }
// })

//write File 

// fs.writeFile('note.txt','New Hello Wolrd', (err,data) => {
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log('Text File Changed')
//     }
// })

//append File 

// fs.appendFile('note.txt','\r\nWelcome To Node Js', (err,data) => {
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log('Text File Append')
//     }
// })


//create newFolder

//  if (!fs.existsSync('New Folder')) {
//     fs.mkdir('New Folder', (err,data) => {
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log('New Folder Created')
//     }
// })
// }
// else {
//     console.log('Folder Already Exist')
// }

//remove Folder 

// if (fs.existsSync('New Folder')) {
//     fs.rmdir('New Folder', (err,data) => {
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log('New Folder Delted')
//     }
// })
// }
// else {
//     console.log('Folder Already Deleted')
// }

//remove File 

if (fs.existsSync('note.txt')) {
    fs.unlink('note.txt', (err,data) => {
    if (err){
        console.log(err)
    }
    else{
        console.log('Note Delted')
    }
})
}
else {
    console.log('Note Deleted')
}