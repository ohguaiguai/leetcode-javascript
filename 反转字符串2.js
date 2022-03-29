// https://leetcode-cn.com/problems/reverse-string-ii/

// 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。

// 如果剩余字符少于 k 个，则将剩余字符全部反转。
// 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

// 示例 1：

// 输入：s = "abcdefg", k = 2
// 输出："bacdfeg"
// 示例 2：

// 输入：s = "abcd", k = 2
// 输出："bacd"

var reverseStr = function (s, k) {
  // 相同的处理逻辑考虑递归
  if (s.length < k) {
    return s.split('').reverse().join('');
  } else if (s.length <= 2 * k) {
    return s.slice(0, k).split('').reverse().join('') + s.slice(k);
  } else {
    return reverseStr(s.slice(0, 2 * k), k) + reverseStr(s.slice(2 * k), k);
  }
};
console.log(reverseStr('abcdefg', 2));
