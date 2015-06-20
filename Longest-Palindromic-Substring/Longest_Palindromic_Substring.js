/**
 * Author: imzhi
 * Date: 06-12
 * Result: Time Limit Exceeded
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var len = s.length,
        rv_str = "",
        rv_len = 0,
        i,
        char,
        pos,
        left_str,
        right_str,
        now_len,
        half_len,
        s2,
        char_arr = [];

    // 只用循环到倒数第二个字符
    for ( i = 0; i < len - 1; i++ ) {
        char = s[i];
        if ( char_arr.indexOf(char) > -1 ) {
            continue;
        }

        // 查找最后出现的位置
        pos = s.lastIndexOf( char );
        if ( pos < 0 || pos === i ) {
            continue;
        }

        if (pos + 1 - i < rv_len) {
            continue;
        }
        s2 = s.slice(i, pos + 1);

        while ( true ) {
            now_len = pos + 1 - i;
            half_len = parseInt( now_len / 2 );

            left_str = s2.slice( 0, half_len );
            right_str = s2.slice( -half_len );

            // 左侧右侧相等则满足回文
            if ( left_str === right_str.split("").reverse().join("") ) {
                // 如果当前的子串较长，则覆盖之前的。并存储当前子串长度，将当前匹配的字符也存储起来
                if (now_len > rv_len) {
                    rv_len = now_len;
                    rv_str = s2;
                    char_arr.push(char);
                }
                break;
            }

            s2 = s2.slice( 0, -1 );
            pos = s2.lastIndexOf( char );
            if ( pos < 0 ) {
                break;
            }
        }
    }

    return rv_str;
};
