//Hello World
console.log('app is alive');

//Switching Channel
//Changing Chat appbar title and location
//Changing attribute selected
function switchChannel(newChannel){
    console.log('Turning into channel ' + newChannel);
    $('#chat h1 span').html(newChannel);
    $('#chat h1 small strong a').html('upgrading.never.helps');
    $('#chat h1 small strong a').attr('href','http://w3w.co/upgrading.never.helps');
    $('.star').attr('src','http://ip.lfe.mw.tum.de/sections/star-o.png');

    $('ul .selected').removeClass('selected');
    $('li:contains('+ newChannel +')').addClass('selected');

}

// Toggle star to filled
function markStar(){
    $('.star').attr('src','http://ip.lfe.mw.tum.de/sections/star.png');
}

//Changing attribute selected
function selectTab(tabID){
    console.log('Changing to tab ' + tabID);
    $('#tab-bar .selected').removeClass('selected');
    $('#'+tabID).addClass('selected');
}