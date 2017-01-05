/*! サイドバーのリンク*/
$(document).ready(function(){

  $("#link .subtitle").click(function () { 
        if($(this).hasClass("openlink")){ // h4にclass="openlink"があるかないか
        $(this).removeClass("openlink"); // classにopenlinkがついている時は、それを削除
    }else{
      $(this).addClass("openlink"); // classにopenlinkが無い時はopenlinkを追加
    }
      $("#link #list").slideToggle(); // 
  });

  $("#categories .subtitle").click(function () {
    if($(this).hasClass("openlink")){ // h4にclass="openlink"があるかないか
        $(this).removeClass("openlink"); // classにopenlinkがついている時は、それを削除
    }else{
      $(this).addClass("openlink"); // classにopenlinkが無い時はopenlinkを追加
    }
      $("#categories #list").slideToggle(); 
  });
});


