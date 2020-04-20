module.exports = {
    getMatrix: (n) => new Array(n).fill(new Array(n).fill(0)),
    updateMatrix: (matrix, coords, value) => {
        const newMatrix = matrix.slice() //avoid modifying original matrix
        newMatrix[coords[0]][coords[1]] = value
        return newMatrix
        // One line solution:
        //return matrix.map((h, i) => h.map((hh, j) => (i == coords[0] && j == coords[1]) ? value : hh))
    } 
}
