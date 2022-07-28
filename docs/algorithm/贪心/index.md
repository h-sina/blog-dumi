# 贪心

## 合并区间

```
function merge( intervals ) {
    // []
    if(intervals=='') return intervals
    // 排序
    intervals.sort(function(a,b) {
        return a.start-b.start
    })
    let re = []
    let j = 0 // 左边界
    let right = intervals[0].end  // 右边界
    for(let i=0;i<intervals.length;i++) {
        if(i+1<intervals.length&&right>=intervals[i+1].start) {
            // 更新右边界
            if(intervals[i+1].end>right) {
                right=intervals[i+1].end
            }
            continue;
        } else {
            if(j!=i) {
                re.push(new Interval(intervals[j].start,right))
            } else {
                re.push(intervals[i])                
            }
            // 更新左右边界
            j=i+1
            if(i+1<intervals.length)
            right=intervals[i+1].end
        }
    }
    return re
}
module.exports = {
    merge : merge
};
```

## [最长重复子串](https://leetcode.cn/problems/maximum-length-of-repeated-subarray/)

## [最长递增子序列](https://leetcode.cn/problems/longest-increasing-subsequence/)

## [最长回文串](https://leetcode.cn/problems/longest-palindromic-substring/)
