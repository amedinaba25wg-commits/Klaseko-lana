# BIGARREN ARIKETA: Mendizale Taldea (Bootstrap 5)

## Helburua

Bootstrap 5.2 erabiliz, eman estilo eta portaera egokia **Mendizale Taldea** web orriari. Hasierako kodean (`index.html` eta `styles/css.css`) edukia dago, baina ez dago Bootstrap klaserik. Zure lana: orria irakasleak emandako irudiaren itxura berdina izatea (eta responsive-a izatea).

> Irakasleak emandako erreferentzia-irudiak/argazkiak ikusi itxura finalerako.

## Arauak

- Bootstrap CDN-a dagoeneko estekatuta dago. Ez erabili beste liburutegirik.
- Edukia ez da aldatu behar (testuak, irudiak). HTML-a egokitu daiteke.
- CSS propioa `styles/css.css` fitxategian bakarrik.
- Erabili hasierako kolore-paleta: `#3E5151`, `#DECBA4`, `#789e9e`.

## Eskatzen dena

1. **Orrialde orokorra**: `container` bat, gradiente-atzeko planoa (`#DECBA4` -> `#3E5151`, ezkerretik eskuinera) eta viewport meta etiketa.
2. **Goiburua**: izenburua ezkerrean eta logoa eskuinean (borobildua, itzalarekin, ertz beltzarekin), `row`/`col` erabiliz. Mugikorrean ere ondo ikusi behar da.
3. **Nabigazio-barra**: `navbar-expand-md`, atzeko kolorerik gabe. Pantaila txikian hamburger menu bihurtu. "Jarduerak" aukerak **dropdown** bat izan behar du (3 azpi-aukera, bat bereizlearekin). Hover-ean `#789e9e` kolorea.
4. **Karrusela**: 3 irudiak **carousel** batean (autoplay, indikatzaileak eta aurrekoa/hurrengoa botoiak). Irudi bakoitzak izenburua eta testua du azpian (mugikorrean ezkutatuta).
5. **Ibilbideak (txartelak)**: 3 `card`. Mugikorrean 1 zutabe, tabletean 2, mahaigainean 3. Txartel guztiek altuera bera. Zailtasuna **badge** bidez (erraza = berdea, ertaina = horia, zaila = gorria). Botoia `#3E5151` kolorekoa; hover-ean `#DECBA4`. Txartelak hover-ean pixka bat gorantz mugitu eta itzala handitu (CSS propioa).
6. **Taula**: marradun (striped), hover duena, goiburu ilunarekin eta mugikorrean scroll horizontala egiten duena. Beteta dagoen irteera (0 leku) gorriz nabarmendu.
7. **Ohiko galderak**: **accordion** bat, aldi berean elementu bakarra irekita, lehenengoa irekita hasieran.
8. **Izen-ematea**: "Izena eman" botoiak **modal** bat irekitzen du, eta formularioa modalaren barruan joan behar da (Bootstrap form klaseak erabiliz).
   - Eremu guztiak beharrezkoak dira (`required`); emaila `type="email"`.
   - Select-ak "Aukeratu..." aukera hutsa izan behar du.
   - Bidali sakatzean Bootstrap-en balidazio-mezuak ikusi behar dira (`invalid-feedback`). Formularioa zuzena bada, modala itxi egin behar da (JavaScript pixka bat).
9. **Footer**: 3 zutabe (mahaigainean) eta bata bestearen azpian (mugikorrean). Goiko ertz argia, esteka zuriak zerrenda sinple batean, eta copyright-a erdian.

## Bonus (aukerakoa)

- Navbar-a orriaren goiko aldean finkatu (`sticky-top`).
- Toast mezu bat erakutsi formularioa ondo bidaltzean.

## Entregatu

`index.html`, `styles/` eta `img/` karpetak ZIP batean.
