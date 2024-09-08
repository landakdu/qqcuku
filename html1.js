// code standing inside html.js for easy edit
const menu1 = `
<!-- Simulate a smartphone / tablet look -->
<div class="mobile-container">

<!-- Top Navigation Menu -->
<div class="topnav">
  <a href="#" class="active tmenu"><img class="gmenu" src="./game/icon/home.png"></a>
  <div id="myLinks">
    <a href="./game/pragmatic.html" class="stay tmenu"><img class="gmenu" src="./game/icon/pragmatic.png"></a>
    <a href="./game/pgsoft.html" class="stay tmenu"><img class="gmenu" src="./game/icon/pgsoft.png"></a>
    <a href="./game/spadegaming.html" class="stay tmenu"><img class="gmenu" src="./game/icon/spadegaming.png"></a>
    <a href="./game/fastspin.html" class="stay tmenu"><img class="gmenu" src="./game/icon/fastspin.png"></a>
    <a href="./game/joker.html" class="stay tmenu"><img class="gmenu" src="./game/icon/joker.png"></a>
    <a href="./game/boongo.html" class="stay tmenu"><img class="gmenu" src="./game/icon/boongo.png"></a>
    <a href="./game/jili.html" class="stay tmenu"><img class="gmenu" src="./game/icon/jili.png"></a>
    <a href="./game/playtech.html" class="stay tmenu"><img class="gmenu" src="./game/icon/playtech.png"></a>
    <a href="./game/microgaming.html" class="stay tmenu"><img class="gmenu" src="./game/icon/microgaming.png"></a>
    <a href="./game/habanero.html" class="stay tmenu"><img class="gmenu" src="./game/icon/habanero.png"></a>
    <a href="./game/cq9.html" class="stay tmenu"><img class="gmenu" src="./game/icon/cq9.png"></a>
    <a href="./game/playstar.html" class="stay tmenu"><img class="gmenu" src="./game/icon/playstar.png"></a>
    <a href="./game/yggdrasil.html" class="stay tmenu"><img class="gmenu" src="./game/icon/yggdrasil.png"></a>
    <a href="./game/netent.html" class="stay tmenu"><img class="gmenu" src="./game/icon/netent.png"></a>
    <a href="./game/skywind.html" class="stay tmenu"><img class="gmenu" src="./game/icon/skywind.png"></a>
    <a href="./game/toptrendgaming.html" class="stay tmenu"><img class="gmenu" src="./game/icon/toptrendgaming.png"></a>
    <a href="./game/nextspin.html" class="stay tmenu"><img class="gmenu" src="./game/icon/nextspin.png"></a>
    <a href="./game/bbin.html" class="stay tmenu"><img class="gmenu" src="./game/icon/bbin.png"></a>
    <a href="./game/creativegaming.html" class="stay tmenu"><img class="gmenu" src="./game/icon/creativegaming.png"></a>
    <a href="./game/evoplay.html" class="stay tmenu"><img class="gmenu" src="./game/icon/evoplay.png"></a>
    <a href="./game/royalgaming.html" class="stay tmenu"><img class="gmenu" src="./game/icon/royalgaming.png"></a>
    <a href="./game/fishing.html" class="stay tmenu"><img class="gmenu" src="./game/icon/fishing.png"></a>
    <a href="./game/arcade.html" class="stay tmenu"><img class="gmenu" src="./game/icon/arcade.png"></a>
    <a href="./game/casino.html" class="stay tmenu"><img class="gmenu" src="./game/icon/casino.png"></a>
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
   <li href=./game/pragmatic.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/pragmatic.png">pragmatic</li>
   <li href=./game/pgsoft.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/pgsoft.png">pgsoft</li>
   <li href=./game/spadegaming.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/spadegaming.png">spadegaming</li>
   <li href=./game/fastspin.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/fastspin.png">fastspin</li>
   <li href=./game/joker.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/joker.png">joker</li>
   <li href=./game/boongo.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/boongo.png">boongo</li>
   <li href=./game/jili.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/jili.png">jili</li>
   <li href=./game/playtech.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/playtech.png">playtech</li>
   <li href=./game/microgaming.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/microgaming.png">microgaming</li>
   <li href=./game/habanero.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/habanero.png">habanero</li>
   <li href=./game/cq9.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/cq9.png">cq9</li>
   <li href=./game/playstar.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/playstar.png">playstar</li>
   <li href=./game/yggdrasil.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/yggdrasil.png">yggdrasil</li>
   <li href=./game/netent.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/netent.png">netent</li>
   <li href=./game/skywind.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/skywind.png"></li>
   <li href=./game/toptrendgaming.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/toptrendgaming.png">toptrendgaming ttg</li>
   <li href=./game/nextspin.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/nextspin.png">nextspin</li>
   <li href=./game/bbin.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/bbin.png">bbin</li>
   <li href=./game/creativegaming.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/creativegaming.png">creativegaming cg</li>
   <li href=./game/evoplay.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/evoplay.png">evoplay</li>
   <li href=./game/royalgaming.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/royalgaming.png">royalgaming rg</li>
   <li href=./game/fishing.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/fishing.png">fishing tembak ikan</li>
   <li href=./game/arcade.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/arcade.png">arcade</li>
   <li href=./game/casino.html" class="stay tmenu1 panggilan"><img class="gmenu1" src="./game/icon/casino.png">casino</li>
</ul>
  </div>
`;
