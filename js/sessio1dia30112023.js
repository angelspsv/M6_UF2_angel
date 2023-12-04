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
}