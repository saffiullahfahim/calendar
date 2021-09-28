	.date{
	border-bottom: 2px solid #fff;
	width:max-content;
	margin: auto;
	margin-bottom: ;
	}
	
	.date2{
	padding-top: 50px;
	}
	
	.month{
	padding-top: 10px;
	padding-bottom: 10px;
	font: 700 20px Monospace;
	border: 2px solid #000;
	border-right: none;
	border-bottom: none;
	text-align: center;
	background: #000;
	color: #fff
	}
	
	.calender{
	display: flex;
	flex-direction: row;
	background: ;
	}
	
	.calender2{
	border-bottom: 2px solid #000;
	border-right: 2px solid #000;
	}
	
	.calender3{
	border-right: 2px solid #000;
	}
	
	
	
	.header{
	display: flex;
	flex-direction: row;
	margin: auto;
	margin-bottom: ;
	width: 365px;
	padding-botto: 20px;
	border-botto: 1.5px solid #999
	}
	
	.header input{
	font: 700 13px Monospace;
	color: #ccc;
	padding: 7px;
	width: calc(70% - 12px);
	border: 1.5px solid #ccc;
	outline: none;
	transition: all 0.3s;
	}
	
	.header button{
	font: 700 13px Monospace;
	color: #333;
	padding: 7px;
	margin-left: 10px;
	width: calc(50% - 12px);
	border: 1.5px solid #999;
	outline: none;
	background: #fff;
	transition: all 0.3s;
	}
	
	.header button:active{
	color: #fff;
	background: #333;
	}
	
	.header input:focus{
	color: #333;
	border-color: #333;
	}
	
	::placeholder{
	font: 700 13px Monospace;
	color: #ccc;
	}
	
	.calender:nth-child(2){
	color: #fff;
	background: #444;
	}
	
	.item{
	width:50px;
	height: calc(30px - 12px);
	padding-top: 10px;
	padding-bottom: 10px;
	font: 700 15px Monospace;
	border: 2px solid #000;
	border-right: none;
	border-bottom: none;
	text-align: center;
	}
	
	.item2{
	cursor: pointer
	}
	
	.item:nth-child(7){
	color: red
	}
	
	.event{
	display: flex;
	width: 50px;
	height: ;
	flex-direction: row;
	position: absolute;
	margin-top:-10.25px;
	flex-wrap:wrap;
	z-index: 0;
	}
	
	.evItem{
	width: 3.5px;
	height: 3.5px;
	margin: 1px;
	}
	
	.evt{
	background: #3bf;
	}
	
	.running{
	background: orange
	}
	
	.done{
	background: lime
	}
	
	.missing{
	background: red
	}
	
	
	.footer{
	font: 700 9px Monospace;
	color: #ccc;
	text-align: center;
	padding: 10px;
	margin-top: 20px;
	text-decoration: none;
	}
	
	.footer a{
	text-decoration: non;
	color: #ccc;
	}