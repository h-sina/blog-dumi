# 排序

## [快排](https://leetcode.cn/problems/sort-an-array/)

```
let arr = [3,5,2,1,8,5,3]
function quickSort(arr,begin,end) {
  if(end<=begin) return 
  let left = begin
  let right = end
  let base = arr[left]
  while(left<right) {
    while(left<right&&arr[right]>=base) {
      right--;
    }
    if(left<right)
      arr[left]=arr[right]
    while(left<right&&arr[left]<=base) {
      left++;
    }
    if(left<right) 
      arr[right]=arr[left]
  }
  arr[left]=base;
  quickSort(arr,begin,left-1)
  quickSort(arr,left+1,end)
  return arr
}
console.log(quickSort(arr,0,arr.length-1))
```

## 归并排序

```
let arr = [3,5,2,1,8,5,3]
function merge(left,right) {
	let arr = []
	let l=0,r=0
	while(l<left.length&&r<right.length) {
		if(left[l]<=right[r]) {
			arr.push(left[l])
			l++
		} else {
			arr.push(right[r])
			r++
		}
	}
	if(l<left.length) {
		arr.push(...left.slice(l))
	} else {
		arr.push(...right.slice(r))
	}
	console.log(arr)
	return arr
}
function sort (arr) {
	
	if(arr.length<2) {
		return arr;
	}
	const left = sort(arr.slice(0,arr.length/2));
	const right = sort(arr.slice(arr.length/2));
	return merge(left,right);
}
console.log(sort(arr))
```

## 冒泡排序

```
let arr = [3,5,2,1,8,5,3]
for(let i=0;i<arr.length-1;i++) {
	for(let j=0;j<arr.length-1-i;j++) {
		if(arr[j]>arr[j+1]) {
			let t = arr[j]
			arr[j]=arr[j+1]
			arr[j+1]=t
		}
	}
}
console.log(arr)
```

## 选择排序

```
let arr = [3,5,2,1,8,5,3]
for(let i=0,j;i<arr.length-1;i++) {
	let index = 0
	let value = arr[i]
	for(j=i+1;j<arr.length;j++) {
		if(value>arr[j]) {
			index=j;
			value=arr[j]
		}
	}
	if(index!=0) {
		let t = arr[i]
		arr[i]=arr[index]
		arr[index]=t
	}
}
console.log(arr)
```

## 插入排序

```
let arr = [3,5,2,1,8,5,3]

for (let i = 1; i < arr.length; i++) {
	let j = i
	let target = arr[j]
	while(j>0&&arr[j-1]>target) {
		arr[j] = arr[j-1]
		j--;
	}
	arr[j]=target
}
console.log(arr)
```
