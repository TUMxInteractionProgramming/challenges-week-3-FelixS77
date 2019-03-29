console.log('app is alive');

function switchChannel(newChannel){
    console.log('Turning into channel ' + newChannel);
    $('#chat h1 span').html(newChannel);
    $('#chat h1 small strong a').html('upgrading.never.helps');
    $('#chat h1 small strong a').attr('href','http://w3w.co/upgrading.never.helps');
}