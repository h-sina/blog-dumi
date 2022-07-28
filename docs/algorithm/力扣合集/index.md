# 力扣合集

## 视频资源

<https://www.bilibili.com/video/BV1xb4y1b7KM?spm_id_from=333.337.search-card.all.click&vd_source=15de7bed8357c8cc8db9f4c5441205bc>

<https://www.bilibili.com/video/BV1wA411b7qZ?spm_id_from=333.337.search-card.all.click>

## 题目资源

<https://leetcode.cn/problem-list/2cktkvj/>

## 博客讲解

<https://www.cnblogs.com/itdef/p/10854320.html>

# 刷题记录

## 第一天

两数之和

1.  用对象存储
1.  用map存储
1.  使用双for循环

| 方法     | 时间复杂度   | 空间复杂度 |
| ------ | ------- | ----- |
| 对象存储   | O（n）    | O（n）  |
| map存储  | O（n）    | O（n）  |
| 双for循环 | O（n*n） | O（1）  |

两数相加

```
var addTwoNumbers = function(l1, l2) {
    let n1=BigInt(0),n2=BigInt(0);
    let t = BigInt(1);
    while(l1) {
        n1+=BigInt(l1.val)*t;
        t*=BigInt(10);
        l1=l1.next;
    }
    t = BigInt(1);
    while(l2) {
        n2+=BigInt(l2.val)*t;
        t*=BigInt(10);
        l2=l2.next;
    }
    n1+=n2;
    let head = new ListNode(null);
    let pre = new ListNode(null);
    head=pre;
    if(n1==BigInt(0)) {
        let node = new ListNode(0);
        return node;
    }
    while(n1) {
        console.log(n1)
        let node = new ListNode(Number(n1%BigInt(10)));
        pre.next=node;
        pre=pre.next; 
        n1=n1/BigInt(10);
    }
    return head.next;
};
```

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode();
    let pre = new ListNode();
    pre=head;
    let yushu = 0;
    while(l1||l2) {
        let n1 = l1?l1.val:0;
        let n2 = l2?l2.val:0;
        let num = (n1+n2+yushu)%10;
        yushu = Math.floor((n1+n2+yushu)/10);
        pre.next = new ListNode(num);
        pre=pre.next;
        if(l1)
        l1=l1.next;
        if(l2)
        l2=l2.next;
    }
    
    if(yushu) {
        pre.next = new ListNode(yushu);
        pre=pre.next;
    }
    return head.next;
};
```

| 方法             | 时间复杂度 | 空间复杂度      |
| -------------- | ----- | ---------- |
| 利用JS的大数计算两个数的和 | O（n）  | O（n）       |
| 不记录数（避免大数）     | O（n）  | O（1）返回值不计入 |

<https://leetcode.cn/problems/add-two-numbers/solution/liang-shu-xiang-jia-by-leetcode-solution/>

## 第二天

无重复字符的最长字串

```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length===0) return 0;
    let left=0,right=0;
    let re = 1;
    while(right<s.length) {
        if(s.slice(left,right).indexOf(s[right])!=-1) {
            left = s.slice(left,right).indexOf(s[right])+1+left;
        } else {
            re=Math.max(re, right-left+1);
        }
        right++;
    }
    return re;
};
```

```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0;
    let m = new Map();
    let right = 0;
    let re = 1;
    let n = s.length;
    for(let i = 0; i < n; i++) {
        if(i!=0) {
            m.delete(s[i-1])
        }
        while(right<n && !m.has(s[right])) {
            m.set(s[right], right);
            right++;
        }
        re = Math.max(re, right - i);
    }
    return re;
};
```

`难点：使用map存储的时候注意碰到了存在的，理应将在该字符下标前面的所有字符进行清理，再嵌套一层for循环，进行清理`

| 方法       | 时间复杂度   | 空间复杂度      |
| -------- | ------- | ---------- |
| slice法   | O（n*n） | O（1）       |
| map/set法 | O（n）    | O（|字符集|） |

寻找两个中序数组的中位数

<https://leetcode.cn/problems/median-of-two-sorted-arrays/>

```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n = nums1.length+nums2.length;
    if(nums2.length === 0) {
        return (nums1[Math.floor((n+1)/2)-1]+nums1[Math.floor((n+2)/2)-1])/2;
    }
    if(nums1.length === 0) {
        return (nums2[Math.floor((n+1)/2)-1]+nums2[Math.floor((n+2)/2)-1])/2;
    }
    let k = 1;
    let p = 0, q = 0;
    let re = 0, re1 = 0;
    while(p!=nums1.length && q!=nums2.length && k++<=Math.floor((n+1)/2)) {
        if(nums1[p]<=nums2[q]) {
            re = nums1[p++];
        } else {
            re = nums2[q++];
        }
    }
    if(p==nums1.length) {
        while(k++<=Math.floor((n+1)/2)) {
            re = nums2[q++];
        }
    } else if(q==nums2.length) {
        while(k++<=Math.floor((n+1)/2)) {
            re = nums1[p++];
        }
    }
    p=0,q=0,k=1;
    while(p!=nums1.length && q!=nums2.length && k++<=Math.floor((n+2)/2)) {
        if(nums1[p]<=nums2[q]) {
            re1 = nums1[p++];
        } else {
            re1 = nums2[q++];
        }
    }
    if(p==nums1.length) {
        while(k++<=Math.floor((n+2)/2)) {
            re1 = nums2[q++];
        }
    } else if(q==nums2.length) {
        while(k++<=Math.floor((n+2)/2)) {
            re1 = nums1[p++];
        }
    }
    return (re1+re)/2;
};
```

| 方法               | 时间复杂度        | 空间复杂度 |
| ---------------- | ------------ | ----- |
| 求（n+1）/2 (n+2)/2 | O（m+n）遍历全部数组 | O（1）  |

正则匹配

<https://leetcode.cn/problems/regular-expression-matching/>

盛最多水的容器

<https://leetcode.cn/problems/container-with-most-water/>

```
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let re = 0;
    for(let i = 0; i < height.length; i++) {
        for(let j = i+1; j < height.length; j++) {
            let re1 = (j-i)*Math.min(height[i], height[j]);
            re = Math.max(re1, re);
        }
    }
    return re;
};
```

```
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let re = 0;
    let left = 0, right = height.length-1;
    while(left<right) {
        re = Math.max(re, (right-left)*Math.min(height[left], height[right]));
        if(height[left]<height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return re;
};
```

| 方法   | 时间复杂度   | 空间复杂度 |
| ---- | ------- | ----- |
| 暴力超时 | O（n*n） | O（1）  |
| 双指针法 | O（n）    | O（1）  |

三数之和

<https://leetcode.cn/problems/3sum/>

```
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function backtrace(index,arr,n,re,ans) {
    if(re.length === 3) {
        if(re[0]+re[1]+re[2] === 0){
            ans.push([re[0],re[1],re[2]]);
        } else {
            return ;
        }
    }
    for(let i=index;i<n;i++) {
        re.push(arr[i]);
        backtrace(i+1, arr, n, re, ans)
        re.pop();
    }
    return ans;
}
var threeSum = function(nums) {
    let re = [];
    let ans = [];
    backtrace(0, nums, nums.length,re,ans)
    return ans;
};
```

电话号码的组合

#### <https://leetcode.cn/problems/letter-combinations-of-a-phone-number/>

```
/**
 * @param {string} digits
 * @return {string[]}
 */
function backtrace(index, d, n, s, re, m) {
    if(s.length == n) {
        let arr = [...s].join('');
        re.push(arr);
    } else {
        const string = m.get(d[index])
        for(let i=0;i<string.length;i++) {
            s.push(string[i])
            backtrace(index+1,d,n,s,re,m)
            s.pop();
        }
        return re;
    }
}
var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    let m = new Map([
        ['2', "abc"],
        ['3', "def"],
        ['4', "ghi"],
        ['5', "jkl"],
        ['6', "mno"],
        ['7', "pqrs"],
        ['8', "tuv"],
        ['9', "wxyz"]
    ]);
    let re =  backtrace(0,digits, digits.length, [] ,[], m);
    return re;
};
```

删除链表的倒数第N个结点

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let p = head, m=0;
    while(p) {
        m++;
        p=p.next;
    }
    m-=n;
    let pre = new ListNode();
    pre.next=head;
    if(m==0) return head.next;
    while(m>0) {
        pre=pre.next;m--;
    }
    pre.next=pre.next.next;
    return head;
};
```

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let slow = new ListNode(), fast = new ListNode();
    slow=head,fast=head;
    while(n--) {
        fast=fast.next;
    } 
    if(!fast) {
        return head.next;
    }
    while(fast.next) {
        slow=slow.next;
        fast=fast.next;
    }
    slow.next = slow.next.next;
    return head;
};
```

有效的括号

<https://leetcode.cn/problems/valid-parentheses/>

```
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    /**
        使用数组作为栈 遍历S
     */
    let arr = [];
    let obj = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for(let i = 0; i < s.length; i++) {
        if(s[i]=='('||s[i]=='['||s[i]=='{') {
            arr.push(s[i]);
        } else {
            let p = arr.pop();
            if(p!=obj[s[i]]) return false;
        }
    }
    return arr.length === 0?true:false;
};
```

合并两个有序链表

<https://leetcode.cn/problems/merge-two-sorted-lists/>

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode();
    let pre = head;
    while(list1&&list2) {
        if(list1.val<=list2.val) {
            pre.next=list1;
            pre=pre.next;
            list1=list1.next;
        } else {
            pre.next=list2;
            pre=pre.next;
            list2=list2.next;
        }
    }
    pre.next = list1?list1:list2;
    return  head.next;
};  
```

括号生成

<https://leetcode.cn/problems/generate-parentheses/>

```
/**
 * @param {number} n
 * @return {string[]}
 */
function dg(re, s, n, left, right) {
    if(right>left||left>n/2||right>n/2||(left+right==n&&left!=right)) return ;
    if(left+right == n) {
        re.push(s);return ;
    }
    dg(re, s+'(', n, left+1, right);
    dg(re, s+')', n, left, right+1);
    return re;
}
var generateParenthesis = function(n) {
    return dg([],'', n*2, 0, 0);
};
```

合并K个有序链表

<https://leetcode.cn/problems/merge-k-sorted-lists/>

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
    let head = new ListNode();
    let pre = head;
    while(list1&&list2) {
        if(list1.val<=list2.val) {
            pre.next=list1;
            pre=pre.next;
            list1=list1.next;
        } else {
            pre.next=list2;
            pre=pre.next;
            list2=list2.next;
        }
    }
    pre.next = list1?list1:list2;
    return  head.next;
};
var mergeKLists = function(lists) {
    if(lists.length === 0) return null;
    for(let i=1;i<lists.length;i++) {
        let re = mergeTwoLists(lists[i-1], lists[i]);
        lists[i] = re;
    }
    return lists[lists.length-1];

};
```

下一个排列

<https://leetcode.cn/problems/next-permutation/>

```
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i;
    for(i=nums.length-1; i>0; i--) {
        /** 从后往前循环，找出首次后者大于前者的数 */
        if(nums[i]>nums[i-1]) {
            for(let j=nums.length-1;j>i-1;j--) {
                /** 再次从后往前循环，找第一个比刚才那个大的数 进行交换  */
                if(nums[j]>nums[i-1]) {
                    let t = nums[j];
                    nums[j] = nums[i-1];
                    nums[i-1] = t;
                    /** 交换以后 将交换坐标（i小的）以右的字符串逆转一下 保证数字串的升序 */
                    let arr = nums.splice(i, nums.length-i-1);
                    arr.reverse();
                    nums.push(...arr);
                    return ;
                }
            }
            return;
        }
    }
   if(i<=0) {
        nums.reverse();
        return ;
   }
    return ;
};
```

最长有效括号

<https://leetcode.cn/problems/longest-valid-parentheses/>

```
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let stack = [-1];
    let re = 0;
    for(let i=0; i<s.length; i++) {
        if(s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if(stack.length>=1) {
                // console.log(stack.length);
                // console.log(i);
                re = Math.max(re, i - stack[stack.length - 1]);
            } else {
                stack.push(i);
            } 
        }
        // for(let j in stack) console.log(stack[j]);
        // console.log();
    }
    return re;
};
```

## 第三天

搜索旋转排序数组-二分法

<https://leetcode.cn/problems/search-in-rotated-sorted-array/>

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == target) return i;
    }
    return -1;

};
```

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length === 0) return -1;
    let left = 0, right = nums.length-1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] == target) {
            return mid;
        } else if(nums[0] <= nums[mid]) {
            if(nums[0] <= target && target < nums[mid]) {
                right = mid-1;
            } else {
                left = mid+1;
            }
        } else {
            if(nums[mid] <target && target<=nums[nums.length-1]) {
                left = mid+1;
            } else {
                right = mid-1;
            }
        }
    }
    return -1;
};
```

在排序数组中查找元素的第一个和最后一个位置-二分法

<https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/>

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l = 0, r = nums.length-1;
    let re = [];
    while(l<=r) {
        let m = Math.floor((l+r)/2);
        if(nums[m] == target) {
            while(m-->=0&&nums[m]==target) {}
            re.push(m+1);
            while(++m<nums.length&&nums[m]==target) {}
            re.push(m-1);
            return re;
        } else if(nums[m] < target) {
            l = m+1;
        } else {
            r = m-1;
        }
    }
    return [-1,-1];
};
```

注意看题，是开始位置和起始位置

组合总数-回溯

```
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function backtrace(arr, index, rre, re, target, sum) {
    if(sum == target) {
        re.push([...rre]);
        return ;
    }
    for(let i = index; i < arr.length; i++) {
        if(sum<target){
            rre.push(arr[i]);sum+=arr[i];
            backtrace(arr,i,rre,re,target, sum);
            rre.pop();sum-=arr[i];
        }
    }
    return re;
}
var combinationSum = function(candidates, target) {
    let re = backtrace(candidates,0,[],[], target, 0);
    return re;
};
```

接雨水

<https://leetcode.cn/problems/trapping-rain-water/>

```
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let re=0;
    let n = height.length;
    let left=new Array(n).fill(0),right=new Array(n).fill(0);
    for(let i = 1; i < n; i++) {
        left[i] = Math.max(height[i-1],left[i-1]);
    }
    for(let i = n-2; i >= 0; i--) {
        right[i] = Math.max(height[i+1],right[i+1]);
    }
    for(let i = 1; i < n; i++) {
        let level=Math.min(left[i],right[i])
        re+=Math.max(level-height[i], 0);
    }
    return re;
};
```

全排列

<https://leetcode.cn/problems/permutations/>

```
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function backtrace(index,nums,n,rre,re,used) {
    if(rre.length == n) {
        re.push([...rre]);
        return ;
    }
    for(let i=0;i<nums.length;i++) {
        if(used[i]) continue;
        rre.push(nums[i]);used[i] = 1;
        backtrace(i,nums,n,rre,re,used);
        rre.pop();used[i]= 0;
    }
    return re;
}
var permute = function(nums) {
    let arr = new Array(nums.length).fill(0);
    return backtrace(0,nums,nums.length,[],[],arr);
};
```

旋转图像-翻转

<https://leetcode.cn/problems/rotate-image/submissions/>

```
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let i=0;i<matrix.length;i++) {
        for(let j=0;j<i;j++) {
            let t = matrix[i][j];
            matrix[i][j]=matrix[j][i];
            matrix[j][i]=t;
        }
    }
    for(let i=0;i<matrix.length;i++) {
        matrix[i].reverse();
    }
    return matrix;
};
```

字母异位词分组

<https://leetcode.cn/problems/group-anagrams/>

```
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let m = new Map();
    let re = [];
    for(let i=0;i<strs.length;i++) {
        let s = strs[i].split('').sort().join('');
        if(m.has(s)) {
            // re.push([strs[i]]);
            re[m.get(s)].push(strs[i]);
        } else {
            m.set(s, re.length);
            re.push([strs[i]]);
        }
    }
    return re;
};
```

## 第四天

最大子数组和

<https://leetcode.cn/problems/maximum-subarray/>

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0];
    let sum = 0;
    for(let i in nums) {
        if(sum>0) {
            sum += nums[i]
        } else {
            sum = nums[i];
        }
        res = Math.max(res,sum);
    }
    return res;
};
```

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = new Array(nums.length).fill(0);
    dp[0]=nums[0];
    for(let i=1;i<nums.length;i++) {
        nums[i] = Math.max(nums[i],nums[i-1]+nums[i])
        dp[i] = Math.max(dp[i-1], nums[i]);
    }
    return dp[nums.length-1];
};
```

跳跃游戏

<https://leetcode.cn/problems/jump-game/>

```
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let t = 0;
    for(let i = nums.length-2; i >= 0; i--) {
        if(nums[i]==0) {
            t++;
        } else {
            if(nums[i]>t) {
                t=0;
            } else {
                t++;
            }
        }
    }
    return t==0?true:false;
};
```

```
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let rightmax = 0;
    for(let i = 0; i < nums.length; i++) {
        if(i<=rightmax) {
            rightmax = Math.max(nums[i]+i,rightmax);
            if(rightmax>=nums.length-1) return true;
            continue;
        }
        return false;
    }
};
```

合并区间

<https://leetcode.cn/problems/merge-intervals/>

```
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function sortarr(a,b) {
    if(a[0]==b[0]) return a[1]-b[1];
    else return a[0]-b[0];
}
var merge = function(intervals) {
    intervals.sort(sortarr);
    let l = intervals[0][0];
    let r = intervals[0][1];
    let re = [];
    for(let i=1;i<intervals.length;i++) {
        if(intervals[i][1]<=r) { //包含

        }else if(intervals[i][0]<=r) { // 相交
            r = intervals[i][1];
        } else if(intervals[i][0]>r) { // 不相交
            re.push([l,r]);
            l=intervals[i][0];r=intervals[i][1];
        }
    }
    re.push([l,r]);
    return re;
};
```

不同路径

<https://leetcode.cn/problems/unique-paths/>

```
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = new Array(n).fill(1);
    for(let i=1;i<m;i++) {
        for(let j=1;j<n;j++){
            dp[j]=dp[j-1]+dp[j];
        }
    }
    return dp[n-1];
};
```

最小路径和

<https://leetcode.cn/problems/minimum-path-sum/>

```
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let dp = new Array(n).fill(0);
    dp[0]=grid[0][0];
    for(let i = 1; i < n; i++) {
        dp[i] = dp[i-1] + grid[0][i];
    }
    for(let i = 1; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(j==0) {
                dp[j] += grid[i][j];
            } else {
                dp[j] = Math.min(dp[j], dp[j-1]) + grid[i][j];
            }
        }
    }
    return dp[n-1];
};
```

爬楼梯

<https://leetcode.cn/problems/climbing-stairs/>

```
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n==0) return 0;
    if(n==1) return 1;
    if(n==2) return 2;
    let dp = new Array(n).fill(1);
    dp[1] = 2;
    for(let i = 2; i < n; i++) {
        dp[i] = dp[i-1]+dp[i-2];
    }
    return dp[n-1];
};
```

编辑距离

<https://leetcode.cn/problems/edit-distance/> 三种操作 求能符合要求的字符操作次数最少

\


颜色分类

<https://leetcode.cn/problems/sort-colors/>

\


最小覆盖子串

<https://leetcode.cn/problems/minimum-window-substring/> s含有t字符串的最小子串

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/478881f8c70c4be1a517eb5a31fb9647~tplv-k3u1fbpfcp-zoom-1.image)

## 第五天(2022/6/27)

最长连续序列

<https://leetcode.cn/problems/longest-consecutive-sequence/>

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let m = new Map();
    let left, right, cur;
    let re = 0;
    for(let i=0;i<nums.length;i++) {
        if(!m.has(nums[i])) {
            left = m.get(nums[i]-1) || 0;
            right = m.get(nums[i]+1) || 0;
            cur = left+right+1;
            if(cur>re) re=cur;
            m.set(nums[i],cur);
            m.set(nums[i]-left, cur);
            m.set(nums[i]+right,cur);
        }
    }
    return re;
};
```

单词搜索

<https://leetcode.cn/problems/word-search/>

```
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var directions = [[-1,0], [0, +1], [+1, 0], [0, -1]];
function check(board, i, j, k, word, used) {
    if(board[i][j] != word[k]) return false;
    if(k==word.length-1) return true;
    used[i][j]= true;
    let re;
    for(let m=0;m<directions.length;m++) {
        let newi = i + directions[m][0];
        let newj = j + directions[m][1];
        if(newi>=0&&newi<board.length&&newj>=0&&newj<board[0].length&&!used[newi][newj]) {
            re = check(board, newi, newj, k+1, word, used);
            if(re){
                break;
            }
        }
    }
    used[i][j]=false;
    return re;
}
var exist = function(board, word) {
    var h = board.length;
    var w = board[0].length;
    var used = new Array(h).fill(0).map(x=> new Array(w).fill(0));
    for(let i=0;i<h;i++) {
        for(let j=0;j<w;j++) {
            if(check(board, i, j, 0, word, used)) return true;
        }
    }
    return false;
};
```

## 第六天

不同的二叉搜索树

<https://leetcode.cn/problems/unique-binary-search-trees/>

```
/**
 * @param {number} n
 * @return {number}
 */

var numTrees = function(n) {
    let dp = new Array(n+1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    for(let i=3;i<=n;i++) {
        for(let j=0;j<i;j++) {
            console.log(j,i-j-1);
            dp[i]+=(dp[j]*dp[i-j-1]);
        }
    }
    return dp[n];
};
```

验证二叉搜索树

<https://leetcode.cn/problems/validate-binary-search-tree/>

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function zx(root,re) {
    if(!root) return;
    zx(root.left,re);
    re.push(root.val);
    zx(root.right,re);
    return re;
}
var isValidBST = function(root) {
    let re = zx(root,[]);
    console.log(re);
    for(let i=1;i<re.length;i++) {
        if(re[i]<=re[i-1]) return false;
    }
    return true;
};
```

前序加后序构造二叉树

<https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/>

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function dg(preorder, inorder, pp, pl, ii, il) {
    if(pp>=pl) return null;
    let root = new TreeNode(preorder[pp]);
    let i;
    for(i=ii;i<il;i++) {
        if(preorder[pp] == inorder[i]) break;
    }
    let count = i-ii;
    root.left = dg(preorder,inorder,pp+1, pp+count+1, ii, il+count);
    root.right = dg(preorder,inorder,pp+count+1, pl, ii+count+1, il);
    return root;
}
var buildTree = function(preorder, inorder) {
    return dg(preorder, inorder, 0, preorder.length, 0, preorder.length)
};
```

二叉树展开为链表

<https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/>

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
let last = null;
function hx(root) {
    if(!root) return;
    hx(root.right);
    hx(root.left);
    root.right = last;
    root.left = null;
    last = root;
}
var flatten = function(root) {
    hx(root);
    last=null;
    return last;
};
```

每日温度

<https://leetcode.cn/problems/daily-temperatures/>

```
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let re = [];
    let n = temperatures.length
    for(let i=0;i<n;i++) {
        let j;
        for(j=i+1;j<n;j++) {
            if(temperatures[i]<temperatures[j]) {
                re.push(j-i);break;
            }
        }
        if(j==n) re.push(0);
    }
    return re;
};
```

```
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let re = new Array(n).fill(0)
    for(let i=n-2;i>=0;i--) {
        for(let j=i+1;j<n;j++) {
            if(temperatures[i]<temperatures[j]) {
                re[i]=j-i;break;
            } else if(re[j]==0) {
                re[i]=0;break;
            }
        }
    }
    return re;
};
```

合并二叉树

<https://leetcode.cn/problems/merge-two-binary-trees/>

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
function qx(root1, root2) {
    if(!root1) {
        return root2;
    }
    if(!root2) {
        return root1;
    }
    root1.val+=root2.val;
    root1.left = qx(root1.left, root2.left);
    root1.right = qx(root1.right, root2.right);
    return root1;
}
var mergeTrees = function(root1, root2) {
    qx(root1,root2);
    return root1;
}
```

最短无序连续子数组

<https://leetcode.cn/problems/shortest-unsorted-continuous-subarray/>

## 第七天

和为K的子数组

<https://leetcode.cn/problems/subarray-sum-equals-k/>

```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sum=0,re=0;
    for(let i=0;i<nums.length;i++) {
        for(let j=i;j<nums.length;j++) {
            sum+=nums[j];
            if(sum==k) re++;
        }
        sum=0;
    }
    return re;
};
```

汉明距离

<https://leetcode.cn/problems/hamming-distance/>

```
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let re=0;
    while(x!=0&&y!=0) {
        if(x%2!=y%2) {
            re++;
        }
        x=Math.floor(x/2);
        y=Math.floor(y/2);
    }
    if(x) {
        while(x) {
            if(x%2!=0) re++;
            x=Math.floor(x/2);
        }
    } else if(y) {
        while(y) {
            if(y%2!=0) re++;
            y=Math.floor(y/2);
        }
    }
    if(x==1||y==1) re++;
    return re;
};
```

```
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let re =0;
    let z=x^y;
    while(z) {
        if(z&1) re++;
        z>>=1;
    }
    return re;
};
```

找到字符串中所有字母异位词

<https://leetcode.cn/problems/find-all-anagrams-in-a-string/>

\


## 第八天(2022/7/1)

寻找重复数

<https://leetcode.cn/problems/find-the-duplicate-number/>

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let m = new Map();
    for(let i=0;i<nums.length;i++) {
        if(m.has(nums[i])) {
            return nums[i];
        } else {
            m.set(nums[i],1);
        }
    }
};
```

移动零

<https://leetcode.cn/problems/move-zeroes/>

```
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0;
    for(let i=0;i<nums.length;i++) {
        if(nums[i]!=0) {
            nums[j++] = nums[i];
        }
    }
    for(;j<nums.length;j++) {
        nums[j]=0;
    }
    return nums;
};
```

除自身以外数的乘积

<https://leetcode.cn/problems/product-of-array-except-self/>

```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let re = new Array(nums.length).fill(1);
    let left = 1, right = 1;
    let n = nums.length;
    for(let i=0;i<n;i++) {
        re[i] *= left;
        left *= nums[i];

        re[n-i-1] *= right;
        right *= nums[n-i-1];
    }
    return re;
};
```

不相交节点

<https://leetcode.cn/problems/intersection-of-two-linked-lists/>

```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA||!headB) return null;
    let ha = headA;
    let hb = headB;
    while(ha!=hb) {
        ha=ha?ha.next: headB;
        hb=hb?hb.next: headA;
    }
    return ha;
};
```

## 第九天

排序链表

<https://leetcode.cn/problems/sort-list/>

岛屿数量

<https://leetcode.cn/problems/number-of-islands/>

\


乘积最大子数

<https://leetcode.cn/problems/maximum-product-subarray/>

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(nums.length===0) return 0;
    let re = nums[0];
    let maxn = 1;
    let minn = 1;
    for(let i=0;i<nums.length;i++) {
        if(nums[i]<0) {
            let t = maxn;
            maxn = minn;
            minn = t;
        }
        maxn=Math.max(maxn*nums[i], nums[i]);
        minn=Math.min(minn*nums[i], nums[i]);
        re = Math.max(maxn, re);
    }
    return re;
};
```

前K个高频元素

<https://leetcode.cn/problems/top-k-frequent-elements/>

```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let m = new Map();
    let maxn = 0;
    for(let i=0;i<nums.length;i++) {
        if(m.has(nums[i])) {
            m.set(nums[i], m.get(nums[i])+1);
            maxn=Math.max(maxn, m.get(nums[i]));
        } else {
            m.set(nums[i], 1);
        }
    }
    let re = [];
    m = Array.from(m);
    m.sort((a,b)=>{return b[1]-a[1];});
    for(let i=0; i<k;i++) {
        re.push(m[i][0]);
    }
    return re;
};
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9dc709e35c864125bd62af6dc1673b3d~tplv-k3u1fbpfcp-zoom-1.image)

除法求值

<https://leetcode.cn/problems/evaluate-division/>

\


字符串解码

<https://leetcode.cn/problems/decode-string/>

\


## 第十天

解密消息

<https://leetcode.cn/problems/decode-the-message/>

```
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let re = '';
    let m = new Map();
    let k = 0;
    for(let i=0;i<key.length;i++) {
        if(key[i] != ' '&&!m.has(key[i]))
            m.set(key[i], String.fromCharCode(97+k++));
    }
    for(let i=0;i<message.length;i++) {
        // console.log(m.get(message[i]));
        if(message[i]!=' ')
        re+=m.get(message[i]);
        else 
            re+=' '
    }
    return re;
};
```

螺旋矩阵IV

<https://leetcode.cn/contest/weekly-contest-300/problems/spiral-matrix-iv/>

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
    
    let re = new Array(m).fill(-1).map(x=> new Array(n).fill(-1));
    let i = 0;
    let left=0,right=n,top=0,bottom=m;
    while(head) {
        for(let j=left;j<right&&head;j++) {
            re[top][j]=head.val;head=head.next;
        }
        top++;
        for(let j=top;j<bottom&&head;j++) {
            re[j][right-1]=head.val;head=head.next;
        }
        right--;
        for(let j=right-1;j>=left&&head;j--) {
            re[bottom-1][j]=head.val;head=head.next;
        }
        bottom--;
        for(let j=bottom-1;j>=top&&head;j--) {
            re[j][left]=head.val;head=head.next;
        }
        left++;
    }
    return re;
};
```

## 第11天（2022/7/7）

最大正方形

<https://leetcode.cn/problems/maximal-square/>

```
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let re=0;
    let x = matrix.length;
    let y = matrix[0].length;
    let dp = new Array(1+x).fill(0).map(x => new Array(1+y).fill(0));
    for(let i=1;i<=x;i++) {
        for(let j=1;j<=y;j++) {
            if(matrix[i-1][j-1] == '1') {
                dp[i][j] = 1+Math.min(dp[i-1][j-1], Math.min(dp[i-1][j],dp[i][j-1]));
                re = Math.max(re,dp[i][j]);
            }
        }
    }
    return re*re;
};
```

最短无序连续子数组

<https://leetcode.cn/problems/shortest-unsorted-continuous-subarray/>

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let re = nums.concat();
    for(let i=0;i<nums.length-1;i++) {
        for(let j=0;j<nums.length-i-1;j++) {
            if(nums[j]>nums[j+1]) {
                let t = nums[j+1];
                nums[j+1] = nums[j];
                nums[j] = t;
            }
        }
    }
    let ans = 0;
    for(let i=0;i<re.length;i++) {
        if(re[i]!=nums[i]) {
            ans = i;break;
        }
    }
    for(let i=re.length;i>=0;i--) {
        if(re[i]!=nums[i]) {
            return i-ans+1;
        }
    }
    return ans;
};
```

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let n = nums.length;
    let min = nums[n-1];
    let max = nums[0];
    let start = 0, end = -1;
    for(let i=0;i<n;i++) {
        if(nums[i]>=max) {
            max = nums[i];
        } else {
            end = i;
        }

        if(nums[n-i-1]<=min) {
            min = nums[n-i-1];
        } else {
            start = n-i-1;
        }
    }
    return end-start+1;
};
```

二叉树的直径

<https://leetcode.cn/problems/diameter-of-binary-tree/>

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var re = 0;
function depth(tree) {
    if(!tree) return 0;
    let left = depth(tree.left);
    let right = depth(tree.right);
    re = Math.max(left+right, re);
    return Math.max(left, right)+1;
}

var diameterOfBinaryTree = function(root) {
    re = 0;
    depth(root, 0);
    return re;
};
```
