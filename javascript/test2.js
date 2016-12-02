$(onReady);      /* 當頁面準備好時，執行onReady() */

function onReady() {
/* 分別監聽.btn1及btn2的click事件 */
$(".btn1").click(btn1Click);/*(btn1Click)是自己命名的*/
$(".btn2").click(btn2Click);/*(btn2Click)是自己命名的*/
} 
/*
var img_left = 0;          /* 宣告一個變數來儲存.test_img的left座標值 
var img_direction = 1;		/* 宣告一個變數來指定img的移動方向 
var leftBound = 500;		/* 宣告一個變數來限制img的移動範圍 

function btn1Click(e){
	img_left = img_left + 50*img_direction;
	$(".test_img").css("left",img_left);
	
	/* 當img到達邊界時，讓img的移動方向轉向 
	if (img_left>=leftBound){
		img_direction = -1;
		} 
		
	if (img_left<=0){
		img_direction = 1;
		}	
	}
*/

function btn1Click(e){
	$(".test_img").fadeOut(500);
	if ($(".test_img").css("display","none")){
		$(".test_img").fadeIn(500);
		}
	
	}