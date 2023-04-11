const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {number}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function findBombs(i, j, matrix){
  let count = 0;
  for (let y = (i-1); y <= (i+1); y ++){
    for (let x = (j-1); x <= (j+1); x ++){
      if (!(x === j && y === i) && x >= 0 && y >= 0 && y < matrix.length && x < matrix[i].length && matrix[y][x]){
        count += 1;
      }
    }
  }
  return count;
}
function minesweeper(matrix) {
  let result = []
  for (let i=0;i<matrix.length; i++){
    let resultRow = [];
    for (let j=0; j<matrix[i].length; j++){
      resultRow.push(findBombs(i, j, matrix))
    }
    result.push(resultRow);
  }
  return  result;
}

module.exports = {
  minesweeper
};
