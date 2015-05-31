/**
 * Author: imzhi
 * Date: 05-31
 * Result: Accepted
 * Runtime: 180 ms
 * 测试数据是类似这种：
 * [".87654321","2........","3........","4........","5........","6........","7........","8........","9........"]
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var i, j, num = 9,
        vertical = new Array(9), // 垂直列
        horizontal = new Array(9), // 水平列
        block = new Array(9), // 块
        value,
        block_index;

    for (i = 0; i < num; i++) {
        vertical[i] = [];
        horizontal[i] = [];
        block[i] = [];
    }

    for (i = 0; i < num; i++) {
        for (j = 0; j < num; j++) {
            value = board[ i ][ j ];

            if ( value === '.' ) continue;

            // 每个块的下标（这里按从左至右，从上至下的顺序（0 到 8））
            block_index = parseInt(i / 3) * 3 + parseInt(j / 3);

            if ( value < 1 || value > 9 ||
                horizontal[i].indexOf(value) > -1 ||
                vertical[j].indexOf(value) > -1 ||
                block[block_index].indexOf(value) > -1 ) {
                return false;
            }
            if ( 9 === horizontal[i].push(value) ) return false;
            if ( 9 === vertical[j].push(value) ) return false;
            if ( 9 === block[block_index].push(value) ) return false;
        }
    }
    return true;
};