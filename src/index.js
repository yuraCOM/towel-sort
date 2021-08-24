
// You should implement your task here.
module.exports = function towelSort (matrix=[]) {
    let newArr = []
    matrix.forEach( item =>{
        if (matrix.length === 0){
            return []
        }
        if (matrix.indexOf(item)%2 === 0){
            for (let i = 0; i < item.length; i++) {
                newArr.push(item[i])
            }
        }
        else {
            item = item.reverse()
            for (let i = 0; i < item.length; i++) {
                newArr.push(item[i])
            }
        }

    })
    console.log(newArr)
    return newArr;
}
