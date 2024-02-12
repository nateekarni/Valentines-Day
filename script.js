var clicks = 0;

function onClick() {
  clicks += 1;

  if(clicks == 2) {
    document.getElementById('gif-image').src = '/mochi-peach.gif';
    document.getElementById('noButton').innerHTML = 'Still no?';
    document.getElementById('header').innerHTML = "Let's go eat something delicious"
  }

  else if(clicks == 4) {
    document.getElementById('gif-image').src = '/mochi-mochi-peach-cute-cat.gif';
    document.getElementById('noButton').innerHTML = 'Pleaseeeee';
    document.getElementById('header').innerHTML = "Senju or Teenoi just tell me"
  }

  else if(clicks == 6) {
    document.getElementById('gif-image').src = '/cute-adorable.gif';
    document.getElementById('noButton').innerHTML = 'Hmmmmm';
    document.getElementById('header').innerHTML = "Shabu and sushi that we love"
  }

  else if(clicks == 8) {
    document.getElementById('gif-image').src = '/sebusun-mocha.gif';
    document.getElementById('noButton').innerHTML = 'I kinda sad now';
    document.getElementById('header').innerHTML = "Don't u miss me huh?"
  }

  else if(clicks == 10) {
    document.getElementById('gif-image').src = '/sad-mochi-mochi-peach-cat-gif.gif';
    document.getElementById('noButton').innerHTML = "It's not funny!";
    document.getElementById('header').innerHTML = "Don't u miss me huh?"
  }

  else if(clicks == 12) {
    document.getElementById('gif-image').src = '/peach-goma-sad-tears.gif';
    document.getElementById('noButton').innerHTML = "Why still answer no huhhhh";
    document.getElementById('header').innerHTML = "U don't love me anymore"
  };
};

