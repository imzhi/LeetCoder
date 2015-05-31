/**
 * Author: imzhi
 * Date: 05-31
 * Result: Accepted
 * Runtime:
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if ( numRows === 1 ) {
        return s;
    }

    var distance = 2 * ( numRows - 1 ),
        length = s.length,
        start_index = 0,
        real_distance,
        i, j,
        str = "";

    /**
     * ZigZag模式是走N字形：
     * 3 => PAHNAPLSIIGYIR
     * P A H N
     * APLSIIG
     * Y I R
     * 4 => PINALSIGYAHRPI
     * P I N
     * ALSIG
     * YAHR
     * R I
     * 5 => PHASIYIRPLIGAN
     * P H
     * ASI
     * YIR
     * PLIG
     * A N
     */
    while (true) {
        if ( start_index >= numRows || start_index >= length ) {
            break;
        } else if (start_index === 0 || start_index === numRows - 1) {
            real_distance = distance;
        } else {
            real_distance = distance - start_index * 2;
        }

        i = start_index;
        j = 0;
        while ( i < length ) {
            str += s[ i ];
            // 注：中间行（除去首行和末行）的间隔是交替进行的
            i += real_distance !== distance && j % 2 ? distance - real_distance : real_distance;
            j++;
        }

        start_index++;
    }

    return str;
};

var str = "PAYPALISHIRING";
//var num = 3;//PAHNAPLSIIGYIR
//var num = 4;//PINALSIGYAHRPI
var num = 5;//PHASIYIRPLIGAN
var s = convert(str, num);
console.log(s);