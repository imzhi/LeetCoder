/**
 * Author: imzhi
 * Date: 2015-06-20
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var l_1, r_1, t_1, d_1, l_2, r_2, t_2, d_2;

    if (A < C) { l_1 = A; r_1 = C; } else { l_1 = C; r_1 = A; }
    if (B < D) { t_1 = D; d_1 = B; } else { t_1 = B; d_1 = D; }
    if (E < G) { l_2 = E; r_2 = G; } else { l_2 = G; r_2 = E; }
    if (F < H) { t_2 = H; d_2 = F; } else { t_2 = F; d_2 = H; }

    var area1 = (r_1 - l_1) * (t_1 - d_1),
        area2 = (r_2 - l_2) * (t_2 - d_2),
        area = 0;

    if (area1 && area2) {
        if (l_1 === l_2 && d_1 === d_2 && t_1 === t_2 && d_1 === d_2) {
            area = (r_1 - l_1) * (t_1 - d_1);
        } else if (l_1 >= l_2 && r_1 <= r_2 && t_1 <= t_2 && d_1 >= d_2) {
            area = (r_2 - l_2) * (t_2 - d_2) < (r_1 - l_1) * (t_1 - d_1) ?
                (r_2 - l_2) * (t_2 - d_2) : (r_1 - l_1) * (t_1 - d_1);
        } else if (l_1 <= l_2 && r_1 >= r_2 && t_1 >= t_2 && d_1 <= d_2) {
            area = (r_1 - l_1) * (t_1 - d_1) < (r_2 - l_2) * (t_2 - d_2) ?
                (r_1 - l_1) * (t_1 - d_1) : (r_2 - l_2) * (t_2 - d_2);
        } else if (l_1 <= l_2 && r_1 >= l_2 && t_1 >= d_2 && d_1 <= d_2) {
            area = (r_1 - l_2) * (t_1 - d_2) < (r_2 - l_1) * (t_2 - d_1) ?
                (r_1 - l_2) * (t_1 - d_2) : (r_2 - l_1) * (t_2 - d_1);
        } else if (l_1 >= l_2 && l_1 <= r_2 && d_1 <= t_2 && d_1 >= d_2) {
            area = (r_2 - l_1) * (t_2 - d_1) < (r_1 - l_2) * (t_1 - d_2) ?
                (r_2 - l_1) * (t_2 - d_1) : (r_1 - l_2) * (t_1 - d_2);
        } else if (l_1 < l_2 && r_1 > l_2 && t_1 < t_2 && d_1 > d_2) {
            area = (r_1 - l_2) * (t_1 - d_1);
        } else if (l_1 > l_2 && l_1 < r_2 && t_1 > t_2 && d_1 < d_2) {
            area = (r_2 - l_1) * (t_2 - d_2);
        } else if (l_1 < l_2 && r_1 > l_2 && t_1 > t_2 && d_1 < d_2) {
            area = (r_1 - l_2) * (t_2 - d_2);
        } else if (l_1 > l_2 && l_1 < r_2 && t_1 < t_2 && d_1 > d_2) {
            area = (r_2 - l_1) * (t_1 - d_1);
        } else if (l_1 < l_2 && r_1 > l_2 && t_1 > t_2 && d_1 < t_2) {
            area = (r_1 - l_2) * (t_2 - d_1);
        } else if (l_1 > l_2 && l_1 < r_2 && t_1 < t_2 && t_1 > d_2) {
            area = (r_2 - l_1) * (t_1 - d_2);
        }
    }

    return area1 + area2 - area;
};

// var rv = computeArea(0, 0, 0, 0, -1, -1, 1, 1);
var rv = computeArea(-2, -2, 2, 2, -1, -1, 1, 1);
console.log(rv);
