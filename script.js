// Chemin de Lumière — script principal

// Menu mobile
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // Verset du jour (rotation automatique, sans backend)
  var versetEl = document.getElementById('verset-du-jour-texte');
  var refEl = document.getElementById('verset-du-jour-ref');
  if (versetEl && refEl) {
    var verses = [
      ["Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.", "Jean 3.16"],
      ["Je puis tout par celui qui me fortifie.", "Philippiens 4.13"],
      ["L'Éternel est mon berger : je ne manquerai de rien.", "Psaume 23.1"],
      ["Car je connais les projets que j'ai formés sur vous, dit l'Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance.", "Jérémie 29.11"],
      ["Nous savons, du reste, que toutes choses concourent au bien de ceux qui aiment Dieu, de ceux qui sont appelés selon son dessein.", "Romains 8.28"],
      ["Ne crains rien, car je suis avec toi ; ne promène pas des regards inquiets, car je suis ton Dieu ; je te fortifie, je viens à ton secours.", "Ésaïe 41.10"],
      ["Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.", "Matthieu 11.28"],
      ["Confie-toi en l'Éternel de tout ton cœur, et ne t'appuie pas sur ta sagesse ; reconnais-le dans toutes tes voies, et il aplanira tes sentiers.", "Proverbes 3.5-6"],
      ["La charité est patiente, elle est pleine de bonté ; la charité n'est point envieuse ; la charité ne se vante point, elle ne s'enfle point d'orgueil.", "1 Corinthiens 13.4"],
      ["Dieu est pour nous un refuge et un appui, un secours qui ne manque jamais dans la détresse.", "Psaume 46.1"],
      ["Ne t'ai-je pas donné cet ordre : fortifie-toi et prends courage ? Ne t'effraie point, car l'Éternel, ton Dieu, est avec toi dans tout ce que tu entreprendras.", "Josué 1.9"],
      ["Réjouissez-vous en espérance. Soyez patients dans l'affliction. Persévérez dans la prière.", "Romains 12.12"],
      ["Le fruit de l'Esprit, c'est l'amour, la joie, la paix, la patience, la bonté, la bénignité, la fidélité, la douceur, la tempérance.", "Galates 5.22-23"],
      ["Ta parole est une lampe à mes pieds, et une lumière sur mon sentier.", "Psaume 119.105"],
      ["Cherchez premièrement le royaume et la justice de Dieu ; et toutes ces choses vous seront données par-dessus.", "Matthieu 6.33"],
      ["Ne vous inquiétez de rien ; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces.", "Philippiens 4.6"],
      ["Fortifiez-vous et ayez du courage ! Ne craignez point, car l'Éternel, ton Dieu, marchera lui-même avec toi ; il ne te délaissera point.", "Deutéronome 31.6"],
      ["L'Éternel est près de ceux qui ont le cœur brisé, et il sauve ceux qui ont l'esprit dans l'abattement.", "Psaume 34.18"],
      ["Je vous laisse la paix, je vous donne ma paix. Que votre cœur ne se trouble point, et ne s'alarme point.", "Jean 14.27"],
      ["Que le Dieu de l'espérance vous remplisse de toute joie et de toute paix dans la foi, pour que vous abondiez en espérance.", "Romains 15.13"],
      ["Si quelqu'un est en Christ, il est une nouvelle créature. Les choses vieilles sont passées ; voici, toutes choses sont devenues nouvelles.", "2 Corinthiens 5.17"],
      ["L'Éternel est ma lumière et mon salut : de qui aurais-je crainte ?", "Psaume 27.1"],
      ["C'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c'est le don de Dieu.", "Éphésiens 2.8"],
      ["Or la foi est une ferme assurance des choses qu'on espère, une démonstration de celles qu'on ne voit pas.", "Hébreux 11.1"],
      ["Je lève mes yeux vers les montagnes... D'où me viendra le secours ? Le secours me vient de l'Éternel, qui a fait les cieux et la terre.", "Psaume 121.1-2"],
      ["Regardez comme un sujet de joie complète les diverses épreuves auxquelles vous pouvez être exposés, sachant que l'épreuve de votre foi produit la patience.", "Jacques 1.2-3"],
      ["Déchargez-vous sur lui de tous vos soucis, car lui-même prend soin de vous.", "1 Pierre 5.7"],
      ["Fais de l'Éternel tes délices, et il te donnera ce que ton cœur désire.", "Psaume 37.4"],
      ["Que votre lumière luise ainsi devant les hommes, afin qu'ils voient vos bonnes œuvres, et qu'ils glorifient votre Père qui est dans les cieux.", "Matthieu 5.16"],
      ["Tout ce que vous faites, faites-le de bon cœur, comme pour le Seigneur et non pour des hommes.", "Colossiens 3.23"]
    ];

    var start = new Date(new Date().getFullYear(), 0, 0);
    var diff = new Date() - start;
    var dayOfYear = Math.floor(diff / 86400000);
    var pick = verses[dayOfYear % verses.length];

    versetEl.textContent = "\u00AB " + pick[0] + " \u00BB";
    refEl.textContent = "\u2014 " + pick[1];
  }
});
