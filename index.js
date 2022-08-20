// Code your solution here
function findMatching(array,str){
    return array.filter(name=>name.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(array, stri) {
    return array.filter(name => name.startsWith(stri))
}

function matchName(array, str) {
    return array.filter(obj => obj.name === str)
}