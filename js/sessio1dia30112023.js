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
}