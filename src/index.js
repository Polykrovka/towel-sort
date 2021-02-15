
module.exports = function towelSort (matrix) {
    console.log(matrix);
    if(matrix == null){
        return [];
    }


    let anser = [];
    for(let i = 0; i < matrix.length ; i++){
        if(i % 2 === 0){
            for(j of matrix[i]){
                anser.push(j);
            }
        } else {
            for(j of matrix[i].reverse()){
                anser.push(j);
            }
        }
    }
    console.log(anser);
  return anser;
}

// .sort( (a, b) => a - b );
