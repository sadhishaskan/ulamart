function getAllUrlParams(e){var t=e?e.split("?")[1]:window.location.search.slice(1),n={};if(t)for(var o=(t=t.split("#")[0]).split("&"),c=0;c<o.length;c++){var i=o[c].split("="),a=i[0],r=void 0===i[1]||i[1];if(a=a.toLowerCase(),"string"==typeof r&&(r=r.toLowerCase()),a.match(/\[(\d+)?\]$/)){var s=a.replace(/\[(\d+)?\]/,"");if(n[s]||(n[s]=[]),a.match(/\[\d+\]$/)){var u=/\[(\d+)\]/.exec(a)[1];n[s][u]=r}else n[s].push(r)}else n[a]?(n[a]&&"string"==typeof n[a]&&(n[a]=[n[a]]),n[a].push(r)):n[a]=r}return n}jQuery.fn.inputFilter=function(e){return this.on("input keydown keyup mousedown mouseup select contextmenu drop",function(){e(this.value)?(this.oldValue=this.value,this.oldSelectionStart=this.selectionStart,this.oldSelectionEnd=this.selectionEnd):this.hasOwnProperty("oldValue")&&(this.value=this.oldValue,this.setSelectionRange(this.oldSelectionStart,this.oldSelectionEnd))})},$(".js-cart-line-product-quantity,#quantity_wanted").inputFilter(function(e){return/^\d*$/.test(e)&&(""===e||0<parseInt(e))}),jQuery(window).bind("load",function(){var e=jQuery(".alert").hasClass("alert-success"),t=jQuery(".alert").hasClass("alert-danger");(e||t)&&jQuery("input[name='email']").val("")}),$("#quantity_wanted").change(function(){var e=this.value;console.log(e),""==e&&jQuery(this).val(1)}),jQuery(document).ready(function(){jQuery(window).width()<=1023&&(jQuery(".header-nav #menu-icon i").click(function(){jQuery(".cc-menu").toggleClass("menu-visible"),jQuery(this).toggleClass("open")}),jQuery(".cc-mobile-nav-section .cc-menu-close").click(function(){jQuery(".cc-menu").removeClass("menu-visible")}),jQuery(".cc-menu > nav > ul > li  ul ").addClass("cc-submenu"),jQuery(".cc-menu > nav > ul > li  ul ").parent().addClass("cc-has-submenu"),jQuery(".cc-has-submenu").click(function(e){e.preventDefault(),e.stopPropagation(),jQuery(this).find("ul.cc-submenu:eq(0)").slideToggle(),jQuery(this).toggleClass("cc-rotate-icon")}),jQuery("nav ul li.cc-has-submenu ul li a").click(function(e){e.preventDefault(),e.stopPropagation(),window.location=jQuery(this).attr("href")}))}),jQuery(document).ready(function(){jQuery(".cart-preview.active").parent().parent().addClass("cc-cart-notempty"),jQuery('[data-button-action="add-to-cart"]').on("click",function(){jQuery(".header-nav .mobile").addClass("cc-cart-notempty")}),jQuery(".cart-line-product-actions .remove-from-cart").on("click",function(){jQuery(".mobile.cc-cart-notempty").removeClass("cc-cart-notempty")}),$(".open-comment-form").fancybox({afterShow:function(){$("#new_comment_form_error ul").html("")},afterClose:function(){$("#new_comment_form_error ul").html(""),document.getElementById("id_new_comment_form").reset()}})}),jQuery("#cc-banner-cat-slider.owl-carousel").owlCarousel({items:4,loop:!0,margin:0,nav:!0,lazyLoad:!0,responsive:{0:{items:2},600:{items:2},767:{items:3},1e3:{items:4},1600:{items:5}},navText:["<img src='/themes/child_classic/assets/images/slider-arrow.png'>","<img src='/themes/child_classic/assets/images/slider-arrow.png'>"]}),$("document").ready(function(){$("#customer-form .form-group.row  label:eq(3)").text("Full name"),$("#checkout #customer-form p:eq(0) span:eq(0)").prepend('<span class="custom-checkbox" style="float:left;"><input name="create_hide_and_show" type="checkbox" value="1"><span><i class="material-icons rtl-no-flip checkbox-checked">&#xE5CA;</i></span></span>'),$("#checkout #customer-form input[name='newsletter'],input[name='optin']").prop("checked",!0),$("input[name='phone']").val($("input[name='phone']:eq(0)").val()),$("#checkout #customer-form input[name='create_hide_and_show']").click(function(){$(this).hasClass("active")?($("#checkout #customer-form .hide_and_show_div").hide(),$(this).removeClass("active"),$("input[name='password']").prop("required",!1),$("input[name='password']").prop("disabled",!0),$("input[name='password']").val(""),$("#checkout #customer-form .hide_and_show_div:eq(1) .form-control-comment").show()):($("#checkout #customer-form .hide_and_show_div:eq(1)").show(),$("#checkout #customer-form .hide_and_show_div:eq(1) .form-control-comment").hide(),$(this).addClass("active"),$("input[name='password']").prop("required",!0),$("input[name='password']").prop("disabled",!1),$(function(){$("#checkout #customer-form input[name='password']")[0].oninvalid=function(){this.setCustomValidity("Use minimum 5 characters")}}))}),$("body").on("click",".step-edit.text-muted",function(){var e=$("#customer-form input[name='firstname']").val(),t=$("#customer-form input[name='lastname']").val();$("input[name='email']").val($("input[name='email']").attr("value"));var n=e.concat(" "+t);$(this).parents().find("#customer-form").find("input[name='firstname']").val(n)})}),$("body").is("#category")&&$("body").on("click",".pagination li",function(){$("html, body").animate({scrollTop:$("#wrapper").offset().top},2e3)}),$("body").is("#product")&&"open"==getAllUrlParams().review&&($(".nav-tabs").find(".nav-item a:eq(1)").trigger("click"),$(window).bind("load",function(){$(".open-comment-form").trigger("click")})),$("document").ready(function(){$("body").is("#product")&&(queryString=window.location.href,0<queryString.indexOf("#")&&(queryString=queryString.split("#")[1],queryString1=queryString.split("-")[0],select_val=queryString1.replace("/",""),$(".form-control-select").val(select_val).trigger("change")))}),jQuery(document).ready(function(){jQuery(window).scroll(function(){10<=jQuery(window).scrollTop()?jQuery(".ss-nav").addClass("stick"):jQuery(".ss-nav").removeClass("stick")})}),$(".ss-close-btn").click(function(){$("ul.cc-megamenu").hide()}),$(document).ready(function(){$("li.cc-megamenu-wrapper.cc-downarrow").hover(function(){$("ul.cc-megamenu").css("display","block"),$("ul.cc-megamenu").css("-webkit-animation","menuSlide"),$("ul.cc-megamenu").css("animation","menuSlide")}).mouseleave(function(){$("ul.cc-megamenu").css("display","none"),$("ul.cc-megamenu").css("-webkit-animation","menuSlide"),$("ul.cc-megamenu").css("animation","menuSlide")})}),$(document).ready(function(){$("#custom-text").delay(1e4).fadeIn(1e4)}),$(document).ready(function(){$("#toggle").click(function(){"Read More"==$("#toggle").text()?($("#toggle").text("Read Less"),$("#text").slideDown()):($("#toggle").text("Read More"),$("#text").slideUp())})}),jQuery(document).ready(function(){jQuery(".cc-menu menu-visible li.cc-megamenu-wrapper.cc-has-submenu").click(function(){jQuery(".cc-menu menu-visible ul.cc-megamenu.cc-submenu").toggle()})}),jQuery(window).load(function(){$("#payment-option-1").trigger("click")});
// $(window).bind("load",function(){
//     $('button[data-button-action="add-to-cart"]').removeAttr("disabled");
// });

window.addEventListener('load', function() {
    var val=jQuery("form.add-form input[type=radio]:checked").next().text();
    jQuery(".vari-c").text(val);
    var qty=jQuery('#quantity_wanted').val()
    jQuery(".quan-val").text(qty);
    });
    $("body").delegate("form.add-form .input-radio", "click", function(){
    // jQuery("form.add-form .input-radio").click(function(){
    var val=jQuery("form.add-form input[type=radio]:checked").next().text();
    jQuery(".vari-c").text(val);
    });
    $("body").delegate("form.add-form .qty span", "click", function(){
    // jQuery("form.add-form .qty span").click(function(){
    var qty=jQuery('#quantity_wanted').val()
    jQuery(".quan-val").text(qty);
    });
    jQuery("form.add-form .qty #quantity_wanted").change(function(){
    var qty=jQuery('#quantity_wanted').val()
    jQuery(".quan-val").text(qty);
    });
    jQuery(document).ready(function() {
        jQuery(window).scroll(function() {
            var windowpos = jQuery(window).scrollTop();
                if (windowpos <= 1000 && windowpos >= 500) {
                    jQuery(".mobile-cart").addClass("stick");
                } else {
                    jQuery(".mobile-cart").removeClass("stick");
            }
        });
    });
    jQuery(window).load(function() {
        jQuery("#preloader").fadeOut("slow");
    });
    window.addEventListener('load', function() { setTimeout(function(){
        function loadjscssfile(filename, filetype){
            if (filetype=="js"){ //if filename is a external JavaScript file
                var fileref=document.createElement('script')
                fileref.setAttribute("type","text/javascript")
                fileref.setAttribute("src", filename)
            }
            else if (filetype=="css"){ //if filename is an external CSS file
                var fileref=document.createElement("link")
                fileref.setAttribute("rel", "stylesheet")
                fileref.setAttribute("type", "text/css")
                fileref.setAttribute("href", filename)
            }
            if (typeof fileref!="undefined")
                document.getElementsByTagName("footer")[0].appendChild(fileref)
        }
    loadjscssfile("https://images.dmca.com/Badges/DMCABadgeHelper.min.js", "js")
    },5000); });
    
    !function(){function c(c,e){console.log(Date.now(),c,e.getAttribute("data-src"))}new LazyLoad({elements_selector:".lazy",callback_enter:function(e){c("ENTERED",e)},callback_exit:function(e){c("EXITED",e)},callback_reveal:function(e){c("REVEALED",e)},callback_loaded:function(e){c("LOADED",e)},callback_error:function(e){c("ERROR",e),e.src="https://via.placeholder.com/440x560/?text=Error+Placeholder"},callback_finish:function(){c("FINISHED",document.documentElement)}})}();
    !function(){var c=[];function e(c,e){console.log(Date.now(),c,e.getAttribute("data-src"))}new LazyLoad({elements_selector:".cc-slidebox-wrapper.owl-carousel",callback_enter:function(a){var n=new LazyLoad({container:a});c.push(n),e("ENTERED",a)},callback_exit:function(c){e("EXITED",c)},callback_reveal:function(c){e("REVEALED",c)},callback_loaded:function(c){e("LOADED",c)},callback_error:function(c){e("ERROR",c),c.src="https://via.placeholder.com/440x560/?text=Error+Placeholder"},callback_finish:function(){e("FINISHED",document.documentElement)}})}();
    