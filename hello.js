function findMeaning()
{
    return 42
}

console.log(findMeaning())

// See process.argv: https://nodejs.org/api/process.html#process_process_argv
//const mission = 'learn';
const mission = process.argv[2];

if (mission == 'learn'){
    console.log('Time to write some Node Code')
}else{
    //console.log('Is ' + mission + 'really fun?')
    console.log(`Is ${mission} really more fun?`)
}