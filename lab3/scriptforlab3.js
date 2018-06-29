var m = [];

/**DeleteExtra3(mass)-Функция служит для удаления пустых и повторяющихся элементов
 *
 *@param mass - сам массива
 **@return NULL
 */
function DeleteExtra3(arr){
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == "") {
            arr.splice(i, 1);
            i--;
        } else if (arr[i] == " ") {
            arr.splice(i, 1);
            i--;
        }
    }
    for(var i = 0; i <arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if(j == i){
                continue;
            }
            if(arr[i] == arr[j]){
                arr.splice(j, 1);
                i--;
                break;
            }
        }
    }
}
/**Main(j, m, nameid)-Функция, производящая валидацию.
 *
 *Проходится по всем элементам массива, проверяя каждый на соответсвующий формат и выдает ошибку в случае несоответствия.
 *
 * @param j - номер массива
 * @param m - сам массива
 * @param nameid1 - id массива
 ** @return NULL
 */
function ValidLot3(lotId){
    var lotA = document.getElementById(lotId).value;
    lotA = lotA.split(",");
    DeleteExtra3(lotA);
    var i = 0;
    for(var i = 0; i < lotA.length; i++){
        lotA[i] = lotA[i].split(" ");
        DeleteExtra3(lotA[i]);
    }
    return lotA;
}
/**Main(j, m, nameid)-Функция, производящая валидацию.
 *
 *Проходится по всем элементам массива, проверяя каждый на соответсвующий формат и выдает ошибку в случае несоответствия.
 *
 * @param j - номер массива
 * @param m - сам массива
 * @param nameid1 - id массива
 ** @return NULL
 */
function Main3(relId, lotId, mass){
    var isfucn = 0;
    document.getElementById("res3").innerHTML = "";
    mass = document.getElementById(relId).value;
    mass = mass.split(";");
    DeleteExtra3(mass);
    for(var i = 0; i < mass.length; i++){
        mass[i] = mass[i].split(",");
        for(var j = 0; j < mass[i].length; j++){
            mass[i][j] = mass[i][j].split(" ");
            DeleteExtra3(mass[i][j]);
        }
    }
    var er = 0;
    for(var i = 0; i < mass.length; i++){
        var temp = mass[i];
        if(temp.length > 2){
            alert("Введено более двух элементов в " +(i+1)+ " паре" +j+ "массива");
            er++;
        }
        else if(temp.length < 2){
            alert("Введено менее двух символов в " +(i+1)+ " элементе" +j+ "массива");
            er++;
        }
    }
    if(er > 0){
        document.getElementById("res3").innerHTML = "<br/>"
        throw new Error();
    }
    var lotA = ValidLot3(lotId);
    var uniqlot = findUnique3(mass);
    for(var i = 0; i < lotA.length; i++){
        if(lotA[i][0] == uniqlot[i]) {
            isfucn++;
        }
        else {
            isfucn--;
        }

    }
    if(uniqlot.length < mass.length){
        document.getElementById("res3").innerHTML = "Отношение не является функцией";
    }
    else{
        if(isfucn == uniqlot.length){
            document.getElementById("res3").innerHTML = "Отношение является функцией";
        }
        else {
            document.getElementById("res3").innerHTML = "Отношение не является функцией";
        }
    }
}
/**findUnique(mass)-Функция проверяющая отношения на уникальность
 *
 *Находит массив уникальных элементов.
 *
 **@return NULL
 */
function findUnique3(mass){
    var uniqueElements = [];
    for(var i = 0; i < mass.length; i++){
        for(var j = 0; j < mass[i].length; j++){
            var q = true;
            for(var k = 0; k < uniqueElements.length; k++){
                if(mass[i][0][0] == uniqueElements[k]){
                    q = false;
                }
            }
            if(q){
                uniqueElements.push(mass[i][j][0]);
            }
        }
    }
    return uniqueElements;
}
