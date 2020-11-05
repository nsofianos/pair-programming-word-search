const matrix = (letters) => {
    let tmpMatrix = [];
    const numOfRows = letters.length;
    const numOfCols = letters[0].length;
    for (let i = 0; i < numOfCols; i++) {
      tmpMatrix[i] = [];
      for (let j = 0; j < numOfRows; j++) {
        tmpMatrix[i][j] = letters[j][i];
      }
    }
    return tmpMatrix;
}

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls =>  ls.join(''));
    //console.log(horizontalJoin);
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    const verticalJoin = matrix(letters).map(ls =>  ls.join(''));
    //console.log(horizontalJoin);
    for (let l of verticalJoin) {
        if (l.includes(word)) return true;
    }

    
    return false;
}


module.exports = wordSearch;
