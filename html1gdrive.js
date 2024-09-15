// code standing inside html.js for easy edit
const menu1 = `
<!-- Simulate a smartphone / tablet look -->
<div class="mobile-container">

<!-- Top Navigation Menu -->
<div class="topnav">
  <a href="./index.html" class="active tmenu"><img class="gmenu" src="./game/icon/home.png"></a>
  <div id="myLinks">
    <a href="./game/pragmatic/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/pragmatic.png"></a>
    <a href="./game/pgsoft/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/pgsoft.png"></a>
    <a href="./game/spadegaming/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/spadegaming.png"></a>
    <a href="./game/fastspin/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/fastspin.png"></a>
    <a href="./game/joker/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/joker.png"></a>
    <a href="./game/boongo/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/boongo.png"></a>
    <a href="./game/jili/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/jili.png"></a>
    <a href="./game/playtech/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/playtech.png"></a>
    <a href="./game/microgaming/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/microgaming.png"></a>
    <a href="./game/habanero/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/habanero.png"></a>
    <a href="./game/cq9/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/cq9.png"></a>
    <a href="./game/playstar/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/playstar.png"></a>
    <a href="./game/yggdrasil/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/yggdrasil.png"></a>
    <a href="./game/netent/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/netent.png"></a>
    <a href="./game/skywind/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/skywind.png"></a>
    <a href="./game/toptrendgaming/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/toptrendgaming.png"></a>
    <a href="./game/nextspin/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/nextspin.png"></a>
    <a href="./game/bbin/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/bbin.png"></a>
    <a href="./game/creativegaming/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/creativegaming.png"></a>
    <a href="./game/evoplay/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/evoplay.png"></a>
    <a href="./game/royalgaming/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/royalgaming.png"></a>
    <a href="./game/fishing/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/fishing.png"></a>
    <a href="./game/arcade/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/arcade.png"></a>
    <a href="./game/casino/index.html" class="stay tmenu"><img class="gmenu" src="./game/icon/casino.png"></a>
  </div>
  <a href="javascript:void(0);" class="icon tmenu" onclick="myFunction()"><img class="gmenu" src="./game/icon/game.png"></a>
</div>
`;

const menu2 = `
<input id="searchbar" 
               onkeyup="search_animal()" 
               type="text" name="search" 
               placeholder="cari nama permainan...">
`;

const menu3 = `
<div class="menu1">
<ul id='list1'>
   <li onclick="document.location='./game/pragmatic/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/pragmatic.png">pragmatic</li>
   <li onclick="document.location='./game/pgsoft/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/pgsoft.png">pgsoft</li>
   <li onclick="document.location='./game/spadegaming/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/spadegaming.png">spadegaming</li>
   <li onclick="document.location='./game/fastspin/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/fastspin.png">fastspin</li>
   <li onclick="document.location='./game/joker/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/joker.png">joker</li>
   <li onclick="document.location='./game/boongo/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/boongo.png">boongo</li>
   <li onclick="document.location='./game/jili/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/jili.png">jili</li>
   <li onclick="document.location='./game/playtech/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/playtech.png">playtech</li>
   <li onclick="document.location='./game/microgaming/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/microgaming.png">microgaming</li>
   <li onclick="document.location='./game/habanero/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/habanero.png">habanero</li>
   <li onclick="document.location='./game/cq9/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/cq9.png">cq9</li>
   <li onclick="document.location='./game/playstar/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/playstar.png">playstar</li>
   <li onclick="document.location='./game/yggdrasil/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/yggdrasil.png">yggdrasil</li>
   <li onclick="document.location='./game/netent/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/netent.png">netent</li>
   <li onclick="document.location='./game/skywind/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/skywind.png"></li>
   <li onclick="document.location='./game/toptrendgaming/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/toptrendgaming.png">toptrendgaming ttg</li>
   <li onclick="document.location='./game/nextspin/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/nextspin.png">nextspin</li>
   <li onclick="document.location='./game/bbin/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/bbin.png">bbin</li>
   <li onclick="document.location='./game/creativegaming/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/creativegaming.png">creativegaming cg</li>
   <li onclick="document.location='./game/evoplay/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/evoplay.png">evoplay</li>
   <li onclick="document.location='./game/royalgaming/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/royalgaming.png">royalgaming rg</li>
   <li onclick="document.location='./game/fishing/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/fishing.png">fishing tembak ikan</li>
   <li onclick="document.location='./game/arcade/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/arcade.png">arcade</li>
   <li onclick="document.location='./game/casino/index.html'" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/casino.png">casino</li>
</ul>
  </div>
`;

