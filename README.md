# Testdriven webbutveckling
## Uppgift (uppstart)
- Ladda ner hela repot, dvs ``git clone`` till en lokal katalog (det kommer skapas en underkatalog automatiskt med reponamnet)
- ``cd `` till katalogen som skapades
- gör en check över up- och downstreams connections med ``git remote -v``
- känn in repot med ``git status``
- och med ``git log``
- Dra igång VS code med ``code .``
- Nu har du hela miljön i VS code och öppna terminal
- För att provköra, kolla ``package.json`` och glöm inte att göra en ``npm install``
- Öppna ``app.test.js`` och börja planera in fler tester (skapa ett minimum för att göra "I am alive")
## Uppgift (red/green)
- Se nu till att lösa de testerna som löser rött, genom att skriva kod
- Provkör löpande ``npm test`` och analysera resultatet som en väg framåt (guida dig i kodning)
- När allt lyser grönt, har du grundkoden på plats (stabilt!)
## Uppgift (nya tester)
- Skapa nya tester (prova gärna Jest Describe för att gruppera de gamla ifrån de nya)
- Helt ny route behövs för att hantera användare, /users (en user har id och name som properties)
- GET /users ska ge en lista av antalet användare
- GET /user/10 ska ge användare med id 10
- DELETE /user/10 ska ta bort användare med id 10
- POST /user ska skapa en ny användare
- Skapa alla dessa tester INNAN du skriver någon kod
- Provkör ``npm test`` och se allt som lyser rött för denna nya route (funktionalitet)
## Uppgift (red/green)
- Get coding och släck alla de röda
