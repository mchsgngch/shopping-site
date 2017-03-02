/*! サイドバーのリンク*/
$( document ).ready( function ( ) {
    /*リンク席のリンク*/
    $( "#link .subtitle" ).click( function ( ) {
        $( this ).next( ).slideToggle( );
        if ( $( this ).hasClass( 'opened' ) ) {
            $( this ).css( "background-image" , "url('./images/top/next_icon.png')");
            $( this ).removeClass( 'opened' );
        } else {
            $( this ).css( "background-image" , "url('./images/top/down_icon.png')");
            $( this ).addClass('opened');
        }
    });
    
    /*カテゴリのリンク*/
    $( "#categories .subtitle" ).click( function ( ) {
        $( this ).next( ).slideToggle( );
        if ( $( this ).hasClass( 'opened' ) ) {
            $( this ).css( "background-image" , "url('./images/top/next_icon.png')");
            $( this ).removeClass( 'opened' );
        } else {
            $( this ).css( "background-image" , "url('./images/top/down_icon.png')");
            $( this ).addClass('opened');
        }
    });
});