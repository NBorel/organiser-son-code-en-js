# organiser son code en modules

Essayons de voir l'intérêt d'organiser son code en "modules".

## 1. sans orga particulière

Dans [animaux-melange.js](animaux-melange.js), il n'y a pas d'organisation particulière, on code comme ça vient, on déclare différentes variables, un tas de fonctions et puis on les appelle.

> Pour un petit projet ça passe. Mais si le projet prend de l'envergure, qu'on arrive à la 5000ème ligne de code, et qu'il s'agit de travailler en équipe, ça risque de coincer : des fonctions partout, des variables pêle-mêles. Y'a-t'il une alternative ?

Oui ↓

## 2. organisation en modules

Dans [animaux-modules.js](animaux-modules.js), on garde strictement les mêmes fonctionnalités que [animaux-melange.js](animaux-melange.js), mais en organisant son code différemment :

Chaque entité (chat, chien, singe) devient un "module", une variable qui ressemble comme deux gouttes d'eau à un tableau associatif, mais qui peut également contenir des fonctions.

Ce qui nous permet d'avoir un code joliment regroupé - au lieu d'avoir des variables et des fonctions éparpillées partout.

```js
const chat = {
  age: 7,
  miaule: function() {
    console.log('le chat fait miaou');
  },
  afficheAge: function() {
    console.log('le chat a ' + chat.age + ' ans, wow déjà !');
  }
};
```

> On comprend vite l'intérêt de cette organisation de code, pour tout type de projet !

Alors, on dit merci qui ? Merci ~~Jacky et~~ la Programmation Orientée Objet !

## un dernier mot

N'hésitez pas à [ouvrir](animaux-melange.js) et [comparer](animaux-modules.js) les deux fichiers JS de ce dépôt afin de bien comprendre :

- comment déclarer un module/objet (`const chat = {}`)
- comment déclarer une variable dans un module (`age: 7`)
- comment déclarer une fonction dans un module (`miaule: function() {}`)
- comment utiliser une variable (ex: `age`), une fois sorti du module (`chat.age`)
- comment appeler une fonction (ex: `miaule`), une fois sorti du module (`chat.miaule()`)