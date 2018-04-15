//var container = $('#container');
//
//
//$(function(){
//  $('#container').masonry({
//    // options
//    itemSelector : '.item',
//    columnWidth : 240
//  });
//});
//
//
//
//
////下面這段用來解決chrome浏览器下打开页面会出现图片重叠排列，是因为当页面加载时所有的dom都加载好以后，由于图片还未加载所以masonry在没有获取到图片高度时就进行了绝对定位导致图片重叠
//$("img").load(function(){
//    $('#container').masonry({
//        singleMode: true,
//        itemSelector : ' .item',
//   //     columnWidth : '234',
//        animate: true
//    });
//});



$(function(){

// var msg='';
// var like_id='';

function igotop(){
	$('html,body').animate({scrollTop:0});
}	

$('.btnbacktop').scrollToggle();
$('.btnbacktop').positionToggle({align:'bottom', position:280, marginX:30, marginY:30});
$('.btnbacktop').click(function (){
	igotop(); 
});


$('.hover').mouseleave({
   function(){
   	$(this).removeclass("hover");
   }
 });



 $('.goresume').click(function(){
 	$('#resume').show();
  $('#mainall').hide();
 });

 $('.content').on('click','.goback', function(){
 	igotop();
	$('#resume').hide();
  $('#mainall').show();
});

//上面兩段的2合1
//如果你加載的元素中有圖片的話，那麼需要確保Masonry在所有圖片都加載完後才執行，需要調用如下代碼
  var $container = $('#container');
$container.imagesLoaded(function(){
  $container.masonry({
    itemSelector : '.item',
    gutter: 20,
    /*columnWidth : 320,*/
    isFitWidth: true
  });
});


});

$(window).load(function() {
  $('#resume').load('./resume.html');

});
