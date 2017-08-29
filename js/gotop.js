

// 根據卷軸位置改顯示狀態
(function($) {
	$.fn.scrollToggle = function(options) {
		var opts = $.extend({}, $.fn.scrollToggle.defaults, options);
		return this.each(function() {
			var $this = $(this);
			var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
			$(window).bind('scroll resize', function(){				
				if($(window).scrollTop()>o.position){
					if(o.type=='show')
						$this.fadeIn();	
					else
						$this.fadeOut();	
				}else{
					if(o.type=='show')
						$this.fadeOut();
					else
						$this.fadeIn();
					
				}
			});
			$this.ready(function(e){
			})
		});
	};
	$.fn.scrollToggle.defaults = {
		type 	: 'show',
		position: 0,
	};
})(jQuery);

// 根據卷軸位置改變position狀態
(function($) {
	$.fn.positionToggle = function(options) {
		var opts = $.extend({}, $.fn.positionToggle.defaults, options);
		return this.each(function() {
			var $this = $(this);
			var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
			$(window).bind('scroll resize', function(){
				if(o.align=='bottom'){					
					var scrollmax = o.position-$this.height()-o.marginY;
					if($(document).height()-($(window).height()+$(window).scrollTop())>(scrollmax)){
						$this.css('position','fixed');
						$this.css('bottom',o.marginY+'px');
						$this.css('top','');				
					}else{
						$this.css('position','absolute')
						$this.css('top',$(document).height()-o.position+'px');
					}
				}else{				
					var scrollmax = o.position-o.marginY;
					if(($(window).scrollTop())>(scrollmax)){
						$this.css('position','fixed');
						$this.css('top',o.marginY+'px');				
					}else{
						$this.css('position','absolute')
						$this.css('top',o.position+'px');
					}			
				}
			});
			$this.ready(function(e){

			})
		});
	};
	$.fn.positionToggle.defaults = {
		align 	: 'top',
		position: 100,
		marginX	: 30,
		marginY : 30
	};
})(jQuery);