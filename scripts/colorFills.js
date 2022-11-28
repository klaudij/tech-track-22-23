function killerFill(i){
  if (i.name === 'Stag' || i.name === 'Summer' || i.name === 'Tribesman' || i.name === 'Boar' || i.name === 'City watch guard'|| i.name === 'Hill tribesman' || i.name === 'None' || i.name === 'Melisandre "the Red Woman" of Asshai' || i.name === 'The Tickler' || i.name === 'Peasants' || i.name === 'Unknown' || i.name === 'Accident' || i.name === 'Karl Tanner' || i.name === 'Daario Naharis' || i.name === 'Himself' || i.name === 'Water dancer pit fighter' || i.name === 'Locke' || i.name === 'Wildling' || i.name === 'Horse' || i.name === 'Black Walder Rivers' || i.name === 'Mossador' || i.name === 'Wildling giant' || i.name === 'Pit fighter' || i.name === 'Meereenese champion pit fighter' || i.name === 'Bounty hunter'  || i.name === 'Meereen slaves' || i.name === 'Giant Mammoth'){ /// None
    return "#99BAC7";
  }
  if (i.name === 'Ned Stark' || i.name === 'Direwolf' || i.name === 'Rodrik Cassel' || i.name === 'Jory Cassel' || i.name === 'Robb Stark'|| i.name === 'Arya Stark' || i.name === 'Jon Snow' || i.name === 'Grey Wind' || i.name === 'Shaggydog' || i.name === 'Catelyn Stark' || i.name === 'Ghost' || i.name === 'Hodor/Bran Stark' || i.name === 'Benjen Stark' || i.name === 'Stark soldier'  || i.name === 'Sansa Stark' || i.name === 'Jon Umber' || i.name === 'Bronn'){ /// House STark
    return "#8F8582";
  }
  if (i.name === 'Lysa Arryn'){ /// House Tully
    return "#A8422D";
  }
  if (i.name === 'Dothraki man' || i.name === 'Khal Drogo' || i.name === 'Mirri Maz Duur' || i.name === 'Dothraki rider'){ /// Dothraki
    return "#9B6F46";
  }
  if (i.name === 'Sandor "the Hound" Clegane'){ /// House Clegane
    return "#363636";
  }
  if (i.name === 'Gregor "the Mountain" Clegane'  || i.name === 'Tyrion Lannister'   || i.name === 'Lannister soldier'   || i.name === 'Jaime Lannister'   || i.name === 'Yoren'   || i.name === 'Polliver'   || i.name === 'Cersei Lannister' || i.name === 'Qyburn'){ ///House Lannister 
    return "#D55656";
  }
  if ( i.name === 'Yara Greyjoy'   || i.name === 'Greyjoy soldier' || i.name === 'Greyjoy (Yara-aligned) soldier' || i.name === 'Greyjoy (Euron-aligned) soldier'  || i.name === 'Euron Greyjoy' || i.name === 'Theon Greyjoy'  ){ ///House Greyjoy
    return "#FAF600";
  }
  if (i.name === 'Meryn Trant'  || i.name === 'Barristan Selmy'){ ///Kingsguard
    return "#E0DED0";
  }
  if (i.name === "Night's Watch brother"  || i.name === 'Qhorin Halfhand'  || i.name === 'Rast' || i.name === "Night's Watch brothers (final blow: Olly)" || i.name === 'Olly' || i.name === 'Grenn' || i.name === 'Pypar' || i.name === "Night's Watch mutineer" || i.name === 'Allister Thorne' || i.name === 'Eddison Tollett'){ ///Night's Watch brother 
    return "#363636";
  }
  if (i.name === "Jorah Mormont"  || i.name === 'Jeor Mormont' || i.name === 'Lyanna Mormont'){ /// House Mormont
    return "pink";
  }
  if (i.name === "Ilyn Payne"  || i.name === 'Podrick Payne'){ /// House Payne
    return "#911F91";
  }
  if (i.name === "Daenerys Targaryen"  || i.name === 'Drogon'  || i.name === 'Rhaegal'  || i.name === 'Viserion'  || i.name === 'Unsullied' || i.name === 'Yunkai soldier'){ /// House Targaryen
    return "#9A0400";
  }
  if (i.name === 'Janos Slynt'){ /// House Slynt
    return "#252525";
  }
  if (i.name === 'Amory Lorch'){ ///  House Lorch
    return "#F73B38";
  }
  if (i.name === 'Brienne of Tarth'){ /// House Tarth
    return "#FF9696";
  }
  if (i.name === "Jaqen H'ghar" || i.name === "The Waif"){ /// Many-Faced God
    return "#3C3C3C";
  }
  if (i.name === 'Osha' || i.name === 'Ygritte'  || i.name === 'Styr'  || i.name === 'Thenn raider' || i.name === 'Tormund' || i.name === 'Meera Reed'  || i.name === 'Wun Weg Wun Dar Wun' || i.name === 'Magnar Loboda' || i.name === 'Karsi'){ /// Free folk 
    return "#AEE6E6";
  }
  if (i.name === 'Pyat Pree' ){ ///House of the dying
    return "black";
  }
  if (i.name === "Baratheon of King's Landing soldier" || i.name === 'Baratheon of Dragonstone soldier'  || i.name === 'Stannis Baratheon'  || i.name === 'Grey Worm'  || i.name === 'Joffrey Baratheon'|| i.name === 'Tommen Baratheon' || i.name === 'Gendry' || i.name === 'Selyse Baratheon' ){ /// House Baratheon
    return "#FFD200";
  }
  if (i.name === 'Loras Tyrell' || i.name === 'Olenna Tyrell' ){ /// House Tyrell
    return "#8B9B7B";
  }
  if (i.name === 'Ramsay Bolton' || i.name === 'Roose Bolton' || i.name === 'Bolton soldier' ){ /// House Bolton
    return "#E4A2BC";
  }
  if (i.name === 'Karstark soldier' || i.name === 'Rickard Karstark'){ /// House karstark
    return "#363636";
  }
  if (i.name === 'Sam Tarly' || i.name === 'Dickon Tarly'){ /// House tarly
    return "#5F681F";
  }
  if (i.name === 'Lothar Frey' || i.name === 'Frey soldier'){ /// House frey
    return "#313A7B";
  }
  if (i.name === 'Baelish soldier' || i.name === 'Petyr Baelish'){ /// house baelish
    return "#C4FA3E";
  }
  if (i.name === 'Leaf' || i.name === 'Child of the Forest'){ /// child of the forest
    return "#26C968";
  }
  if (i.name === 'Beric Dondarrion'){ /// house dondarrion
    return "#AA14F2";
  }
  if (i.name === 'Wight' || i.name === 'Giant wight' || i.name === 'Viserion (Wight)' || i.name === 'White Walker' || i.name === 'Night King' || i.name === 'Wight snow bear' || i.name === 'Wight child' || i.name === 'Wight hunt party member'  ){ /// white walker
    return "#B8E1EA";
  }
  if (i.name === 'Brotherhood Without Banners rogue'){ /// Brotherhood
  }
  if (i.name === 'Gerold Hightower'){ /// Hightower
    return "#4E5C59";
  }
  if (i.name === 'Son of the Harpy'){ /// Sons of the harpy
    return "#85BAC1";
  }
  if (i.name === 'Tyene Sand' || i.name === 'Nymeria Sand' || i.name === 'Ellaria Sand' || i.name === 'Obara Sand'){ /// Martell
    return "#E98238";
  }
  if (i.name === 'Arynn soldier'){ /// Martell
    return "#101928";
  }
  if (i.name === 'Arthur Dayne'){ /// House of Dayne
    return "#C090D6";
  } else {
    return "#6C6D6D"
  }
}




function iconFill(i){
  if (i.allegiance[0] === 'House Lannister'){ /// SEASON 1
    return "#D55656";
  }
  if (i.allegiance[0] === 'House Stark') {
    return "#8F8582";
  }
  if (i.allegiance[0] === 'Dothraki') {
    return "#9B6F46";
  }
  if (i.allegiance[0] === 'Night’s Watch') {
    return "#363636";
  }
  if (i.allegiance[0] === 'House Royce') {
    return "#D28C47";
  }
  if (i.allegiance[0] === 'None') {
    return "#99BAC7";
  }
  if (i.allegiance[0] === 'House Arryn') {
    return "#3183B4";
  }
  if (i.allegiance[0] === 'Free Folk') {
    return "#AEE6E6";
  }
  if (i.allegiance[0] === 'House Clegane') {
    return "#363636";
  }
  if (i.allegiance[0] === 'Smallfolk') {
    return "#999999";
  }
  if (i.allegiance[0] === 'House Egen') {
    return "white";
  }
  if (i.allegiance[0] === 'House Targaryen') {
    return "#9A0400";
  }
  if (i.allegiance[0] === 'House Baratheon of King’s Landing') {
    return "#FFD200";
  }
  if (i.allegiance[0] === 'House Baratheon of Storm’s End') { /// SEASON 2
    return "#FFD200";
  }
  if (i.allegiance[0] === 'House Baratheon of Dragonstone') { 
    return "#D55656";
  }
  if (i.allegiance[0] === 'House Cassel') { 
    return "#999999";
  }
  if (i.allegiance[0] === 'Faith of the Seven') { 
    return "#BB926F";
  }
  if (i.allegiance[0] === 'House Greyjoy') { 
    return "#FAF600";
  }
  if (i.allegiance[0] === 'House Karstark') { 
    return "#363636";
  }
  if (i.allegiance[0] === 'The Thirteen') { 
    return "#2C7AA8";
  }
  if (i.allegiance[0] === 'House Moore') { 
    return "#D28C47";
  }
  if (i.allegiance[0] === 'House Seaworth') { 
    return "pink";
  }
  if (i.allegiance[0] === 'Warlocks of Qarth') { 
    return "#A168A1";
  }
  if (i.allegiance[0] === 'House Tully') { /// SEASON 3
    return "#1F2B70";
  }
  if (i.allegiance[0] === 'House Mormont') { 
    return "pink";
  }
  if (i.allegiance[0] === 'Good Masters') { 
    return "#ADD486";
  }
  if (i.allegiance[0] === 'Brotherhood Without Banners') { 
    return "#FFFFFF";
  }
  if (i.allegiance[0] === 'The Lord of Light') { 
    return "#FFFFFF";
  }
  if (i.allegiance[0] === 'Varys') { 
    return "#F0F992";
  }
  if (i.allegiance[0] === 'House Baelish') { 
    return "#C4FA3E";
  }
  if (i.allegiance[0] === 'Second Sons') { 
    return "#D0D0D0";
  }
  if (i.allegiance[0] === 'Wise Masters') { 
    return "#AEE6E6";
  }
  if (i.allegiance[0] === 'House Bolton') { 
    return "#E4A2BC";
  }
  if (i.allegiance[0] === 'House Frey') { 
    return "#313A7B";
  }
  if (i.allegiance[0] === 'House Florent') { /// SEASON 4
    return "#E96325";
  }
  if (i.allegiance[0] === 'House Hollard') { 
    return "#4B82F9";
  }
  if (i.allegiance[0] === 'Great Masters') { 
    return "#FFD24C";
  }
  if (i.allegiance[0] === 'House Reed') { 
    return "#9AAD82";
  }
  if (i.allegiance[0] === 'Thenn') { 
    return "#7A7A7A";
  }
  if (i.allegiance[0] === 'House Kenning') { 
    return "#F89A2F";
  }
  if (i.allegiance[0] === 'House Martell') { 
    return "#E98238";
  }
  if (i.allegiance[0] === 'Sons of the Harpy') { /// SEASON 5
    return "#85BAC1";
  }
  if (i.allegiance[0] === 'Faceless Men') { 
    return "#3C3C3C";
  }
  if (i.allegiance[0] === 'Faith Militant') {  /// SEASON 6
    return "#691720";
  }
  if (i.allegiance[0] === 'House Hightower') { 
    return "#4B5956";
  }
  if (i.allegiance[0] === 'House Dayne') { 
    return "#63023A";
  }
  if (i.allegiance[0] === 'Children of the Forest') { 
    return "#A4D8A6";
  }
  if (i.allegiance[0] === 'House Umber') { 
    return "#A01D20";
  }
  if (i.allegiance[0] === 'Unknown') { 
    return "#947688";
  }
  if (i.allegiance[0] === 'House Tyrell') { 
    return "#8B9B7B";
  }
  if (i.allegiance[0] === 'Triarchs of Volantis') { 
    return "#D0D0D0";
  }
  if (i.allegiance[0] === 'House Greyjoy (Yara-aligned)') { /// SEASON 7
    return "#FFD602";
  }
  if (i.allegiance[0] === 'House Greyjoy (Euron-aligned)') { 
    return "#D4B114";
  }
  if (i.allegiance[0] === 'House Tarly') { 
    return "#5F681F";
  }
  if (i.allegiance[0] === 'Golden Company') {  /// SEASON 8
    return "#CDA80E";
  }
  if (i.allegiance[0] === 'Kingsguard') { 
    return "#E0DED0";
  }
}




export { killerFill, iconFill }