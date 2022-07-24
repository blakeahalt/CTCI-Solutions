// MY SOLUTION
function zeroMatrix(matrix){
       let zeroRow = {};
       let zeroCol = {};
       for(let i=0;i<matrix.length;i++){
         for(let j=0;j<matrix[i].length;j++){
           if(matrix[i][j]===0){
             zeroRow[i] = true;
             zeroCol[j] = true;
           }
         }
       }
       for(row in zeroRow){                      // if zeroRow is true: turn that row into zeros
       for(i=0; i<matrix[row].length; i++){
         matrix[row][i] =0;                  
       }
         console.log(zeroRow)
       }
       for(col in zeroCol){                      // if zeroCol is true: turn that column into zeros
         for(i=0; i<matrix.length; i++){
           matrix[i][col] = 0;
         }
       }
       console.log(zeroCol)
     }
     
     let testMatrix = [
       [1, 1, 1, 1],
       [1, 1, 1, 1],
       [0, 0, 1, 0],
       [1, 1, 1, 1],
       [1, 1, 1, 1],
       [1, 1, 1, 1]
     ];
     
     console.log(testMatrix);
     zeroMatrix(testMatrix);
     console.log(testMatrix);


  // 1st SOLUTION - DOES NOT RUN CORRECTLY BC MAP UPDATES LAST PROPERTY 'IN'...
  // ...a row with more than one zero only sets to the 'last zero' but none previous
  // function zeroMatrix(matrix) {
  //   let matrixMap = new Map()
  
  //   for (i = 0; i < matrix.length; i++) {
  //     for (j = 0; j < matrix[0].length; j++) {
  //       if (matrix[i][j] === 0) {
  //         temp = matrixMap.set(i,j) 
  //       }
  //     }
  //   }
  
  //   for ([key, value] of matrixMap.entries()) {
  //     for (i = 0; i < matrix.length; i++) {
  //       for (j = 0; j < matrix[0].length; j++) {
  //         if (matrix[key][value] === [0][0]) {
  //           matrix[i][value] = 0                        // creates column of zeros
  //         } if (matrix[key][value] === [0][0]) {
  //           matrix[key][j] = 0                          // creates row of zeros
  //       }
  //     }
  //   }
  // }
  // return matrix
  // }
  // // Testing
  // let testMatrix = [
  //   [1, 1, 1, 1],
  //   [0, 0, 0, 1],
  //   [1, 1, 1, 1],
  //   [1, 1, 1, 1],
  //   [1, 1, 1, 1],
  //   [1, 1, 1, 1]
  // ];
  
  // // console.log('before');
  // // printMatrix(testMatrix);
  
  // // zeroMatrix(testMatrix);
  // // console.log('result')
  // console.log(testMatrix)
  // console.log(zeroMatrix(testMatrix))
  
  // // console.log('after');
  // // printMatrix(testMatrix);
  
  // // function should mutate the matrix to the following:
  // // [
  // //   [1, 0, 1, 1],
  // //   [1, 0, 1, 1],
  // //   [0, 0, 0, 0],
  // //   [1, 0, 1, 1],
  // //   [1, 0, 1, 1],
  // //   [1, 0, 1, 1]
  // // ]
  