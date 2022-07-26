// MY SOLUTION
function rotateMatrix(matrix) {
       let N = matrix.length
     
       // TRANSPOSE MATRIX
       for (i=0; i<N; i++) {
         for (j=i; j<N; j++) {
           let temp = matrix[i][j];
           matrix[i][j] = matrix[j][i];
           matrix[j][i] = temp
         }
       }
       // If transposed: Counter-Clockwise rotation
       // If not transposed: reflect around x-axis
       // for (i=0; i<N/2; i++) {
       //   for (j=0; j<N; j++) {
       //     let temp = matrix[i][j]
       //     matrix[i][j] = matrix[N-1-i][j]
       //     matrix[N-1-i][j] = temp
       //   }
       // }
       
       // If transposed: Clockwise rotation
       // If not transposed: reflect around y-axis
       // If transposed and reflected around x-axis: Inverse Transpose
       for (i=0; i<N; i++) {
         for (j=0; j<N/2; j++) {
           let temp = matrix[i][j]
           matrix[i][j] = matrix[i][N-1-j]
           matrix[i][N-1-j] = temp
         }
       }
       return matrix
     }
     
     // OTHER SOLUTION
     // function rotateMatrix(matrix) {
     //   let N = matrix.length
     //   for (i=0; i<N; i++) {
     //     for (j=i; j<matrix[0].length; j++) {
     //       [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
     //     }
     //   }
     //   for (row of matrix) {
     //     row.reverse()
     //   }
     // }
     
     // OTHER SOLUTION
     // var rotateMatrix = function(matrix) {
     //   var edge = matrix.length - 1;
     
     //   var movePixels = function(row, col) {
     //     // starts at m[row][col]
     //     // moves to m[col][edge - row]
     //     var fromRow;
     //     var fromCol;
     //     var fromPixel;
     
     //     // first transformation
     //     var toRow = row; // 0
     //     var toCol = col; // 1
     //     var toPixel = matrix[row][col];
     
     //     // Do rotational transformation 4 times
     //     for (var i = 0; i < 4; i++) {
     //       fromRow = toRow;
     //       fromCol = toCol;
     //       toRow = fromCol;
     //       toCol = edge - fromRow;
     
     //       fromPixel = toPixel;
     //       toPixel = matrix[toRow][toCol];
     //       matrix[toRow][toCol] = fromPixel;
     //     }
     //   };
     
     //   for (var i = 0; i < matrix.length / 2; i++) {
     //     for (var j = i; j < edge - i; j++) {
     //       // console.log(i, j);
     //       movePixels(i, j);
     //     }
     //   }
     // };
     
     
     /* TEST */
     let testMatrix = [
     [1, 2, 3, 4, 5, 6],
     [7, 8, 9, 10, 11, 12],
     [13, 14, 15, 16, 17, 18],
     [19, 20, 21, 22, 23, 24],
     [25, 26, 27, 28, 29, 30],
     [31, 32, 33, 34, 35, 36]
     ];
     
     console.log('before:');
     console.log(testMatrix[0]);
     console.log(testMatrix[1]);
     console.log(testMatrix[2]);
     console.log(testMatrix[3]);
     console.log(testMatrix[4]);
     console.log(testMatrix[5]);
     
     rotateMatrix(testMatrix);
     
     console.log('after:');
     console.log(testMatrix[0]);
     console.log(testMatrix[1]);
     console.log(testMatrix[2]);
     console.log(testMatrix[3]);
     console.log(testMatrix[4]);
     console.log(testMatrix[5]);
     
     /*
     var edge = n - 1;
     
     pattern observed:
     i) col value becomes row value
     ii) row value is subtracted off edge and becomes col value
     
     0100
     0000
     0000
     0000
     
     position of 1 -> m[0][1]
     
     0000
     0001
     0000
     0000
     
     position of 1 -> m[1][edge]
     
     0000
     0000
     0000
     0010
     
     position of 1 -> m[edge][edge - 1]
     
     0000
     0000
     1000
     0000
     
     position of 1 -> m[edge-1][0]
     
     0100
     0000
     0000
     0000
     
     position of 1 -> m[0][1]
     
     flow of iteration:
     i) start from top left corner and move diagonally down
     ii) for each row, iterate pixels until edge - 1 
     (pixel at edge would have been transformed by the first pixel)
     iii) at each pixel iteration, iterate through 4 sides
     iv) do iteration in place, i.e. store a temp pixel for moving things around
     */