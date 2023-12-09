//funció que compara colors en format String
function Colors(){
    var colors = ["verd", "vermell", "groc", "blau", "negre", "blanc"];
    
    //el mètode every() retorna true o false només
    //si tots son true, retorna true, sinó false
    var resposta_every = colors.every(comparaColors);
    document.getElementById("method_every").innerHTML = "Tots els colors son menors que 'marró'? - " + resposta_every;
    
    //mostrar els colors menors a marró
    var colors_menors = "";
    var newArr = colors.map(comparaColors);
    for (let i=0; i<newArr.length; i++){
        if (newArr[i] == true){
            colors_menors = colors_menors + colors[i] + ", ";
        }
    }
    document.getElementById("menors").innerHTML = "Tots els colors menors que 'marró' són: " + colors_menors;

    //mostrar els darrers 2 colors
    document.getElementById("darrers_colors").innerHTML = "Els darrers dos colors són: " + colors[colors.length-2] + " i " + colors[colors.length-1];

    //afegir un color més a l'array colors
    colors[colors.length] = "turquesa";
    document.getElementById("un_color_mes").innerHTML = "Ara, l'array de colors té un color més: " + colors;


    //eliminar el color "verd" de l'array
    var newArrColors = colors.slice(1, colors.length);
    colors = newArrColors;
    document.getElementById("colors_sense_verd").innerHTML = "L'array sense el color verd, però amb la resta colors: " + colors;

    
    function comparaColors(color){
        return color < "marró";
    }
}

//aquesta funció mostra la utilitat de l'ús de mètodes amb les arrays
function functions(){
    var myArr = ["lada", "zil", "peugeot", "bmw", "opel", "citroen", "vw"];

    //el mètode at() retorna un element indexat des d'un array
    let tmp = myArr.at(4);
    document.getElementById("at_method").innerHTML = "El mètode at() retorna el valor d'una posició de l'array: " + tmp;

    //el mètode concat() fusiona o uneix dos arrays
    var arr1 = ["dilluns", "dimarts", "dimecres"];
    var arr2 = ["dijous", "divendres", "dissabte", "diumenge"];
    var dies_setmana = arr1.concat(arr2);
    document.getElementById("dies_setmana").innerHTML = "Els dies de la setmana són: " + dies_setmana;

    //el mètode constructor serveix per crear i inicialitzar objectes creats amb una classe
    class Car {
        constructor(builder){
            this.nom_cotxe = builder;
        }
    }
    let myCar = new Car(myArr[6]);
    document.getElementById("constructor").innerHTML = "La marca del meu cotxe és: " + myCar.nom_cotxe;

    //el mèthode copyWithin() permet copiar elements de l'array a altres posicions dins del mateix array, o bé, també és pot dir que aquest mètode sobreescriu els valores de unes posicions amb els valors d'altres posicions
    //copyWithin(target, start*, end*) *is optional
    //*target is the index (position) to copy the elements to.
    var fruites = ["apple", "cherry", "kiwi", "orange"];
    let nouArr = fruites.copyWithin(2);
    document.getElementById("copy").innerHTML = "Partim d'un array amb aquests valors: \'apple, cherry, kiwi, orange'\ i després de l'ús del métode copuWithin() està així: " + nouArr;

    //el mètode entries() converteix l'array en un objecte/array associatiu de key-values
    var arrNames = ["Marta", "Daniel", "Laura"];
    var newArrNames = arrNames.entries();
    document.getElementById("abans").innerHTML = "Aquest és l'array de noms inicial: " + arrNames + "<br><br>Aquest és l'array després utilitzar el mètode entires():";
    for(let i of newArrNames){
        document.getElementById("despres").innerHTML += i + "<br>";
    }
    
    //el mètode every() executa una funció amb cada valor de l'array i retornarà true si totes les proves han tornat true
    var edats = [22, 17, 28, 5];
    function MajorEdat(edat){
        return edat > 17;
    }
    var resultat = edats.every(MajorEdat);
    document.getElementById("every").innerHTML = "El mètode every() retorna true si tot és true, sinó, false. En el present array el resultat és: " + resultat;

    //el mètode fill() reescriu alguns o tots dels valors de l'array amb altres valors. La sintaxi és: array.fill(value, start, end)
    document.getElementById("fills").innerHTML = "L'array resultant és: " + arrNames.fill("David", 1, 2);

    //el mètode filter() retorna un nou array amb tots els valors de l'array original que passan a una condició
    var resultat_majors = edats.filter(MajorEdat);
    document.getElementById("filter").innerHTML = "Dels 4 individuos: " + resultat_majors.length + " són majors d'edat.";

    //el mètode find() recorre un array cercant un valor i retorna el valor del primer element que passa les proves. Retorna l'element, no true / false
    function compara(valor){
        return valor === "opel";
    }
    document.getElementById("find").innerHTML = "L'element \'opel\' " + (myArr.find(compara) === "opel" ? "està " : "no està ") + "dins de l'array.";


    //el mètode findIndex() recorre l'array en la cerca d'un element i retorna l'índex o posició del primer element que compleix la condició
    function cercaFruita(fruita){
        return fruita == "apple";
    }
    let tmp2 = nouArr.findIndex(cercaFruita);
    document.getElementById("find_index").innerHTML = "El valor cercat " + (tmp == "-1" ? "no està" : "està") + " en l'array. Si la posició és '-1' no es troba cap coincidencia, sinó retorna la posició de la primera coincidencia trobada. En aquest cas la posició és: " + tmp2;

    //el mètode flat() uneix elements d'altres arrays en un array nou 
    var flatArr = [myArr[1], fruites[2], arr1[0], edats[2]];
    document.getElementById("flat").innerHTML = `El mètode flat() uneix els valors de diferents arrays en un de nou amb aquests valors: ${flatArr}.`;

    //el mètode flatMap() aplica una acció a tots els elements de l'array i retorna un de nou amb els nous valors
    var newEdatsArr = edats.flatMap((element) => element + 10);
    document.getElementById("flatMap").innerHTML = "Gràcies al mètode flatMap() podem saber quina edat tindrà la gent de l'array " + edats + " d'aquí a 10 anys " + newEdatsArr +  " anys.";

    //el mètode forEach() executa una funció per cada element de l'array
    let cerveses = ["Xibeca", "Pauliner", "VollDamm", "Clandestines"];
    let texto_num = "";
    cerveses.forEach(Enumera);
    document.getElementById("forEach").innerHTML = "Vull enumerar l'array de cerveses: <br>" + texto_num;
    function Enumera(num, element){
        texto_num += element + ". " + num + "<br>";
    }


    //El mètode from() retorna un array des de tot objecte amb length mètode
    let equip = "liverpool";
    var arrEquip = Array.from(equip);
    document.getElementById("from").innerHTML = "El mètode from() permet passar d'un String a un array. Hem passat de " + equip + " a " + arrEquip;

    //el mètode includes() retorna true si el String conté a un fragment de text determinat. També -opcional- pot començar des d'un punt concret.
    //la sintaxis és text.includes(searchvalue, start) 
    var resultat_boolean = equip.includes("pool");
    document.getElementById("includes").innerHTML = "S'utilitza el métode includes() per cercar un fragment de text en una cadena. Retorna True/False. En el present cas, \'pool\'" + (resultat_boolean == true ? " està " : " no està ") + " dins de la cadena: " + equip;


    //el mètode indexOf() retorna la posició de la primera referència trobada. Retorna -1 si no troba res i també es pot triar des d'on comença a cercar.
    var posicio = myArr.indexOf("opel");
    document.getElementById("indexOf").innerHTML = "El mètode indexOf() retorna la posició del primer element trobat dins de l'array. En el present cas, dins de l'array de coches estem cercant per \'opel\' i el String " + (posicio != -1 ? " està " : "no està") + "dins de l'array."; 
    
    
    //el mètode isArray() retorna true si una variable és un array altrament, false
    document.getElementById("isArray").innerHTML = "El mètode isArray() retorna true si és array. En aquest cas, darrere de arrNames [" + arrNames + "]" + (Array.isArray(arrNames) == 1 ? " hi ha" : " no hi ha") + " un array.";


    //el mètode join() converteix un array en String. Opcionalment, també pot haver-hi un separador entre element i element
    var longitud = dies_setmana.length;
    document.getElementById("join").innerHTML = `Amb el mètode join() podem convertir un array a String. Així passem de l'array dies_setmana [${dies_setmana.join()}] amb longitud ${longitud} al String de longitud ${(dies_setmana.join()).length}.`;


    //el mètode keys no modifica l'array inicial. Retorna les keys/índex dels elements de l'array. El mètode keys() converteix un array de valors en un array associatiu
    var materialEscolar = ["llibre", "llibreta", "boligraf", "regla"];
    var arrayMatEsc = materialEscolar.keys();
    let tmp3 = "";
    for(let i of arrayMatEsc){
        tmp3 += i + "<br>";
    }
    document.getElementById("keys").innerHTML = "Amb el mètode keys() podem convertir un array de valors a un d'associatiu. Així tenim aquest array de material escolar [" + materialEscolar + "] i ho passem a associatiu mostrant només l'índex de cada element: <br>" + tmp3;

    //el mètode lastIndexOf() retorna la darrera aparició d'un fragment de text dins d'una cadena. Comença des de darrera i retorna -1 si no troba el fragment cercat. En cas afirmatiu retorna la posició on comença el fragment cercat. El mètode es CS. El mètode find() fa el mateix, però des de l'inici.
    let cadena = "En aquest text el nom de Laura apareixerà dos cops. Hola, Laura";
    document.getElementById("lastIndexOf").innerHTML = "Tenim el text [" + cadena + "] i estem cercant el fragment \'Laura\'. El mètode lastIndexOf() cerca fragments de text dins d'una cadena, però començant des de darrera i retornarà la posició des d'on comença el fragment: " + cadena.lastIndexOf("Laura");


    //el mètode length en arrays retorna el nombre d'elements que hi ha. També amb aquest mètode es pot retallar l'array o fixar la seva longitud. En JavaScript la longitud dels arrays és dinàmica.   
    document.getElementById("length").innerHTML = "Amb el mètode length en arrays podem coneixer el nombre d'elements que té un array. En aquest cas l'array de noms [" + arrNames + "] té " + arrNames.length + (arrNames.length == 1 ? " element." : " elements.");


    //el mètode map() crea un nou array on emmagatzema els valors optinguts d'executar una funció per cada valor valor de l'array inicial. No modifica l'array original i tampoc executa amb valors buits.
    var arrNums = [2, 3, 5, 7, 11];
    function Multiplica(numero){
        return numero * 5;
    }
    var arrayNumbers = arrNums.map(Multiplica);
    document.getElementById("map").innerHTML = "El mètode map retorna un nou array com a resultat d'executar una operació/funció per cada valor de l'array original. Així tenim l'array original [" + arrNums + "] i després de fer servir map() amb la funció Multiplica() tenim com a resultat el nou array [" + arrayNumbers + "].";


    //el mètode pop() modifica un array eliminat el seu darrer element i/o també pot retornar aquest element.
    var vegetables = ["potatoes", "cucumber", "onions", "tomatoes"];
    let lastVegetable = vegetables.pop();
    document.getElementById("pop").innerHTML = "El mètode pop() modifica un array eliminant l'últim valor d'aquest i també pot retornar aquest valor. Així tenim l'array [potatoes, cucumber, onions, tomatoes] i després d'aplicar el mètode pop() l'array té aquest aspecte [" + vegetables + "] i l'element eliminat és: " + lastVegetable + ".";


    //prototype permet afegir més propietats i mètodes als arrays
    var mots = ["ara", "dema", "sempre"];
    Array.prototype.WordsToUpperCase = function(){
        for(let i=0; i<this.length; i++){
            this[i] = this[i].toUpperCase();   
        }
    }
    mots.WordsToUpperCase();
    document.getElementById("prototype").innerHTML = "Prototype permet afegir més propietats i mètodes als arrays. En el present cas estic posant a totes les lletres en majúscules d'aquest array [ara, dema, sempre] i retorna: [" + mots + "].";


    //Amb el mètode push() es poden afegir nous elements a un array.
    arrNames.push("Marc");
    document.getElementById("push").innerHTML = `Amb el mètode push() podem afegir més elements a un array ja existent. En aquest cas afegirem el nom de 'Marc' a l'array de noms. Ara l'array conté aquests elements: [${arrNames}].`;


    //Amb el mètode reduce() s'executa una funció que afecta tots els elements d'un array i retorna un resultat i no pas un nou array. Pot començar des d'una posició concreta. Va d'esquerra a la dreta.
    var arrDeNums = [2, 25, 58, 15];
    function Suma(total, num) {
        return total + num;
    }
    let suma = arrDeNums.reduce(Suma);
    document.getElementById("reduce").innerHTML = `Amb el mètode reduce() podem realitzar una operació amb els elements d'un array i obtenir un resultat com una suma total o resta dels tots els valors. Ara tenim l'array [${arrDeNums}] i amb reduce(function) obtindré la suma de tots els elements de l'array: ${suma}.`;


    //El mètode reduceRight() fa el mateix que reduce() però començant des de la dreta. En el cas de fer sumes el resultat de fer reduce() i reduceRight() pot ser el mateix però no succeeix el mateix amb les restes.
    function Resta(total, num) {
        return total - num;
    }
    let resta = arrDeNums.reduceRight(Resta);
    document.getElementById("reduceRight").innerHTML = `El mètode reduceRight() fa el mateix que reduce() però començant des de la dreta o la darrera posició de l'array. Ara faré servir el mateix array, però aniré restant els elements de l'array obtenint: ${resta}.`;
}