# Organiser son code en modules, en JS

Essayons de voir l'intérêt d'organiser son code en "modules", en JS.

## Méthode 1 - sans orga particulière

Dans [animaux-melange.js](animaux-melange.js), il n'y a pas d'organisation particulière, on code comme ça vient, on déclare différentes variables, un tas de fonctions et puis on les appelle.

> Pour un petit projet ça passe. Mais si le projet prend de l'envergure, qu'on arrive à la 5000ème ligne de code, et qu'il s'agit de travailler en équipe, ça risque de coincer : des fonctions partout, des variables pêle-mêles. Y'a-t'il une alternative ?

Oui ↓

## Méthode 2 - organisation en modules

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

Alors, on dit merci qui ? Merci ~~Jacquie et~~ la Programmation Orientée Objet 🤫

## Vocabulaire

1. Les fonctions, une fois rangées dans nos "modules", sont alors appelées **méthodes**.
2. Les variables, une fois rangées dans nos "modules", sont alors appelées **propriétés**.

## Quel est l'intérêt du code organisé en modules ?

> Découper du code en plusieurs parties apporte de nombreux avantages par rapport à un code monobloc:
> - Le premier avantage est de rendre le code plus lisible puisqu'on peut le séparer, par exemple, en fonctionnalités.
> - Le code séparé en modules facilite sa réutilisation dans le reste de l'application mais aussi dans d'autres applications.
> - Les modules rendent le code plus facilement extensible car on peut plus aisément rajouter un ou plusieurs modules et les utiliser.
> - Enfin, les modules favorisent l'encapsulation pour éviter d'exposer une complexité qui n'est pas nécessaire.

via cet [article du blog cdiese.fr](https://cdiese.fr/modules-javascript/)

## Un dernier conseil

N'hésitez pas à [ouvrir](animaux-melange.js) et [comparer](animaux-modules.js) les deux fichiers JS de ce dépôt afin de bien comprendre :

- Comment déclarer un module
  ```js
  const chat = {}
  ```
- Comment déclarer une variable (propriété) dans un module
  ```js
  const chat = {
    age: 7
  }
  ```
- Comment déclarer une fonction (méthode) dans un module
  ```js
  const chat = {
    miaule: function() {
      // ..
    }
  }
  ```
- Comment utiliser une variable (propriété) à l'extérieure du module
  ```js
  const chat = {
    age: 7
  }

  console.log(chat.age); // affiche 7
  ```
  ici `chat.age` permet d'accéder à la variable (propriété) `age` se trouvant dans le module `chat`
- Comment appeler une fonction (méthode) à l'extérieure du module
  ```js
  const chat = {
    miaule: function() {
      console.log('le chat fait miaou');
    }
  }

  chat.miaule(); // affiche 'le chat fait miaou'
  ```
  ici `chat.miaule()` permet d'accéder à la fonction (méthode) `miaule()` se trouvant dans le module `chat`