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
}