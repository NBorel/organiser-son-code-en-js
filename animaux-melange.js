// variables
let chatAge = 7;
let chienAge = 9;
let singeAge = 2;

// fonctions
function chatMiaule() {
  console.log('le chat fait miaou');
}

function chienAboie() {
  console.log('le chien aboie');
}

function singeFaitLaGrimace()  {
  console.log('le singe fait la grimace');
}

function afficheAgeChat() {
  console.log('le chat a ' + chatAge + ' ans, wow déjà !');
}

function afficheAgeChien() {
  console.log('le chien a ' + chienAge + ' ans, bravo mon titi !');
}

function afficheAgeSinge() {
  console.log('le singe a ' + singeAge + ' ans, mais où vas tu ?');
}

// appels
chatMiaule();
console.log('son âge : ' + chatAge);
afficheAgeChat();
chienAboie();
console.log('son âge : ' + chienAge);
afficheAgeChien();
singeFaitLaGrimace();
console.log('son âge : ' + singeAge);
afficheAgeSinge();