# CSS
## 居中
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		#parent {
			width: 100px;
			height: 100px;
			background-color: red;

			position: relative;
		}
		#child {
			width: 50px;
			height: 50px;
			background-color: blue;

			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	</style>
</head>
<body>
	<div id='parent'>
		<div id='child'></div>
	</div>
</body>
</html>
```

## flex: 1
  1 1 0%
  /* 两个值：flex-grow | flex-basis */ 
  flex: 1 30px;
  flex-basis：auto按照比例来/0%默认宽度无
  flex-grow 指总宽度有余伸的比例值默认为1 初始值为0

  flex-shrink 指总宽度不够缩的比例值默认是1 0表示不缩 初始值为1 负值无效

  flex-basis 值为0必须加单位 初始值为auto 表示原始宽度 如果是具体值 总宽度不够或者有余会变成该值 之后再参与计算
## 一列自适应一列固定
  display：flex；自适应flex：1 
  display：grid；自适应grid：auto
