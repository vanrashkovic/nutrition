jQuery(function($){$("html").removeClass("no-js"),$("ul.styles > li").click(function(){var className=$(this).attr("class");$("body").removeClass("theme-style-0 theme-style-1 theme-style-2 theme-style-3"),$("body").addClass(className)}),$("li:last-child, .product-listing > div:last-child").addClass("lastItem"),$("li:first-child, .product-listing > div:first-child").addClass("firstItem"),$("ul.sf-menu").supersubs({minWidth:12,maxWidth:27,extraWidth:1}).superfish({animation:{height:"show"},speed:"fast"}),$(".sf-menu").mobileMenu();var ismobile=navigator.userAgent.match(/(iPhone)|(iPod)|(android)|(webOS)/i);ismobile&&$(".sf-menu").sftouchscreen(),$("[placeholder]").each(function(){if($(this).val()===""){var hint=$(this).attr("placeholder");$(this).val(hint).addClass("hint")}}),$("[placeholder]").focus(function(){$(this).val()===$(this).attr("placeholder")&&$(this).val("").removeClass("hint")}).blur(function(){$(this).val()===""&&$(this).val($(this).attr("placeholder")).addClass("hint")}),$("input.error, textarea.error").focus(function(){$(this).removeClass("error")}),$("form :submit").click(function(){return $(this).parents("form").find("input.hint, textarea.hint").each(function(){$(this).val("").removeClass("hint")}),!0}),$(".address_table form, .customer_address form").addClass("form-horizontal"),$(".template-customers-login, #create_customer").find(".errors").addClass("alert").addClass("alert-danger"),$.fn.splitWords=function(index){return this.each(function(){var el=$(this),i,first,words=el.text().split(/\s/);typeof index=="number"?i=index>0?index:words.length+index:i=Math.floor(words.length/2),first=words.splice(0,i),el.empty().append(makeWrapElem(1,first)).append(makeWrapElem(2,words))})};function makeWrapElem(i,wordList){return $('<span class="wrap-'+i+'">'+wordList.join("")+"</span>")}$("#logo a b").splitWords(1),$(".menu_mobile").addClass("col-sm-9 col-sm-push-3"),$(".compare-at-price").prev().addClass("red_price"),$(".sidebar_off").length&&$(".sf-menu, .menu_mobile").removeClass("col-sm-push-3 col-sm-9").addClass("col-sm-12")});
//# sourceMappingURL=/cdn/shop/t/3/assets/shop.js.map?v=122723249168234544951397569999