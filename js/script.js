window.load = function(){};
$(document).ready(function(){
    // 위로가기 기능
    $('.gotop').click(function(){
    	$('html, body').animate({
    		scrollTop: 0
    	});
    });

    // 탭메뉴
    var notice_menu_a = $('.notice-menu a');
    var notice_list= $('.notice-list');
    $.each(notice_menu_a, function(index, item){
        notice_menu_a.eq(index).click(function(e){
            // a 태그라서
            e.preventDefault();
            notice_menu_a.removeClass('notice-menu-active');
            notice_menu_a.eq(index).addClass('notice-menu-active');

            notice_list.removeClass('notice-list-active');
            notice_list.eq(index).addClass('notice-list-active');
            
        })
    });
});