// module chat
const chat = {
  age: 7,
  miaule: function() {
    console.log('le chat fait miaou');
  },
  afficheAge: function() {
    console.log('le chat a ' + chat.age + ' ans, wow déjà !');
  }
};

// module chien
const chien = {
  age: 9,
  aboie: function() {
    console.log('le chien aboie');
  },
  afficheAge: function() {
    console.log('le chien a ' + chien.age + ' ans, bravo mon titi !');
  }
};

// module singe
const singe = {
  age: 2,
  faitLaGrimace: function() {
    console.log('le singe fait la grimace');
  },
  afficheAge: function() {
    console.log('le singe a ' + singe.age + ' ans, mais où vas tu ?');
  }
};

// appels
chat.miaule();
console.log('son âge : ' + chat.age);
chat.afficheAge();
chien.aboie();
console.log('son âge : ' + chien.age);
chien.afficheAge();
singe.faitLaGrimace();
console.log('son âge : ' + singe.age);
singe.afficheAge();