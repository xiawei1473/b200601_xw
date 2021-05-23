window.onload=function() {
	var ups=document.getElementsByClassName("upBtn");//升序按钮集合
	var downs=document.getElementsByClassName("downBtn");//降序按钮集合

	//注册升序排列处理程序
	for(var i=0,len=ups.length;i<len;i++)
		ups[i].onclick=ascOrder;

	//注册降序排列处理程序
	for(var i=0,len=downs.length;i<len;i++)
		downs[i].onclick=desOrder;
}

function ascOrder() {
	var col=this.parentNode.cellIndex;//需要排序的列序号

	var  tbody=document.getElementsByTagName("tbody");
	for(var i=0,len=tbody[0].children.length,trs=tbody[0].children;i<len-1;i++)
		for(var j=i+1;j<len;j++) {
			var x=Number(trs[i].children[col].innerText),y=Number(trs[j].children[col].innerText);
			if(x>y) {
				var t=trs[i].innerHTML;
				trs[i].innerHTML=trs[j].innerHTML;
				trs[j].innerHTML=t;
			}
		}
}

function desOrder() {
	var col=this.parentNode.cellIndex;//需要排序的列序号

	var  tbody=document.getElementsByTagName("tbody");
	for(var i=0,len=tbody[0].children.length,trs=tbody[0].children;i<len-1;i++)
		for(var j=i+1;j<len;j++) {
			var x=Number(trs[i].children[col].innerText),y=Number(trs[j].children[col].innerText);
			if(x<y) {
				var t=trs[i].innerHTML;
				trs[i].innerHTML=trs[j].innerHTML;
				trs[j].innerHTML=t;
			}
		}
	}
	$(function() {

		$(".input input").focus(function() {
	 
		   $(this).parent(".input").each(function() {
			  $("label", this).css({
				 "line-height": "18px",
				 "font-size": "18px",
				 "font-weight": "100",
				 "top": "0px"
			  })
			  $(".spin", this).css({
				 "width": "100%"
			  })
		   });
		}).blur(function() {
		   $(".spin").css({
			  "width": "0px"
		   })
		   if ($(this).val() == "") {
			  $(this).parent(".input").each(function() {
				 $("label", this).css({
					"line-height": "60px",
					"font-size": "24px",
					"font-weight": "300",
					"top": "10px"
				 })
			  });
	 
		   }
		});
	 
		$(".button").click(function(e) {
		   var pX = e.pageX,
			  pY = e.pageY,
			  oX = parseInt($(this).offset().left),
			  oY = parseInt($(this).offset().top);
	 
		   $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
		   $('.x-' + oX + '.y-' + oY + '').animate({
			  "width": "500px",
			  "height": "500px",
			  "top": "-250px",
			  "left": "-250px",
	 
		   }, 600);
		   $("button", this).addClass('active');
		})
	 
		$(".alt-2").click(function() {
		   if (!$(this).hasClass('material-button')) {
			  $(".shape").css({
				 "width": "100%",
				 "height": "100%",
				 "transform": "rotate(0deg)"
			  })
	 
			  setTimeout(function() {
				 $(".overbox").css({
					"overflow": "initial"
				 })
			  }, 600)
	 
			  $(this).animate({
				 "width": "140px",
				 "height": "140px"
			  }, 500, function() {
				 $(".box").removeClass("back");
	 
				 $(this).removeClass('active')
			  });
	 
			  $(".overbox .title").fadeOut(300);
			  $(".overbox .input").fadeOut(300);
			  $(".overbox .button").fadeOut(300);
	 
			  $(".alt-2").addClass('material-buton');
		   }
	 
		})
	 
		$(".material-button").click(function() {
	 
		   if ($(this).hasClass('material-button')) {
			  setTimeout(function() {
				 $(".overbox").css({
					"overflow": "hidden"
				 })
				 $(".box").addClass("back");
			  }, 200)
			  $(this).addClass('active').animate({
				 "width": "700px",
				 "height": "700px"
			  });
	 
			  setTimeout(function() {
				 $(".shape").css({
					"width": "50%",
					"height": "50%",
					"transform": "rotate(45deg)"
				 })
	 
				 $(".overbox .title").fadeIn(300);
				 $(".overbox .input").fadeIn(300);
				 $(".overbox .button").fadeIn(300);
			  }, 700)
	 
			  $(this).removeClass('material-button');
	 
		   }
	 
		   if ($(".alt-2").hasClass('material-buton')) {
			  $(".alt-2").removeClass('material-buton');
			  $(".alt-2").addClass('material-button');
		   }
	 
		});
	 
	 });
	//  document.getElementById("pet").onclick =function(){
	// 	window.location.href='/trade/';
	//  }