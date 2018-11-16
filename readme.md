slide 0:
webpack 4
jb cazaux

slide 1:
- Les nouveautés de webpack 4 (mode)
- TODO 

slide 2:
ce qui fonctionne dans le navigateur (01)

slide 3:
pas d'imports dans le navigateur (02)
todo -> revoir les imports

slide 4:
babel loader: (03)
todo -> webpack pas a la bonne place (a la racine !)

slide 5: 
babel preset + plugins (04)
-> montrer l'interet des babel env (+ react env), des plugins babel

slide 6: (05)
-> construction automatique du fichier html
todo -> donner des exemples de plugins

slide 7: (06)
-> on peut servir des ressources statiques
-> voir les sources... pas de sourmap, c'est illisible !

slide 8: (07)
-> ouvrir avec yarn start -> on voit les sources

slide 9: (08)
-> import des images en js, on les voit dans le bundle
-> ecriture du webpack.conf.js avec une fonction pour récupérer le mode

slide 10: (09)
-> file loader
-> css loader (extract text plugin)
-> lancer en mode production
-> il faut imaginer les fichier js comme des composants react (par exemple)

slide 11: (10)
-> lancer en mode analyse -- yarn analyse
-> voir que lodash est très lourd par rapport a src
todo -> ajouter un autre package ? voir lequel

slide 12: (11)