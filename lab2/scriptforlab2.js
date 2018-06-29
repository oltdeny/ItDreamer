var m = [];
var cossymm = 0;
var refl = 0;
var symm = 0;
var transit = 0;
/**DeleteExtra(mass)-Функция служит для удаления пустых и повторяющихся элементов
 *
 *@param mass - сам массива
 **@return NULL
 */
function DeleteExtra2(mass){
    for(var i = 0; i < mass.length; i++) {
        if(mass[i] == "") {
            mass.splice(i, 1);
            i--;
        } else if (mass[i] == " ") {
            mass.splice(i, 1);
            i--;
        }
    }
    for(var i = 0; i < mass.length; i++){
        for(var j = 0; j < mass.length; j++){
            if(j == i){
                continue;
            }
            if(mass[i] == mass[j]){
                mass.splice(j, 1);
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
function Main2(j, mass, nameid){
    cossymm = 0;
    refl = 0;
    symm = 0;
    transit = 0;
    document.getElementById("res2").innerHTML = ""
    mass = document.getElementById(nameid).value;
    mass = mass.split(";");
    DeleteExtra2(mass);
    for(var i = 0; i < mass.length; i++){
        mass[i] = mass[i].split(",");
        for(var j = 0; j < mass[i].length; j++){
            mass[i][j] = mass[i][j].split(" ");
            DeleteExtra2(mass[i][j]);
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
        document.getElementById("res2").innerHTML = "<br/>"
        throw new Error();
    }
    reflexivity2(mass);
    symmetry2(mass);
    cossymmetry2(mass);
    if(mass.length >= 3){
        transitivity2(mass);
    }
    if(refl > 0){
        document.getElementById("res2").innerHTML += "Отношение рефлексивно<br/>"
    }
    if(symm > 0){
        document.getElementById("res2").innerHTML += "Отношение симметрично<br/>"
    }
    if(cossymm > 0){
        document.getElementById("res2").innerHTML += "Отношение коссимметрично<br/>"
    }
    if(transit > 0){
        document.getElementById("res2").innerHTML += "Отношение транзитивно<br/>"
    }

}
/**reflexivity(mass)-Функция проверяющая отношение на рефлексивность
 *
 *Производит проверку отношения на свойство рефлексивности, проверяя количество пар вида xRx, которое должно быть равно количеству уникальных элементов.
 *
 **@return NULL
 */
function reflexivity2(mass){
    var uniqueElements = [];
    for(var i = 0; i < mass.length; i++){
        for(var j = 0; j < mass[i].length; j++){
            var q = true;
            for(var k = 0; k < uniqueElements.length; k++){
                if(mass[i][j][0] == uniqueElements[k]){
                    q = false;
                }
            }
            if(q){
                uniqueElements.push(mass[i][j][0]);
            }
        }
    }
    for(var i = 0; i < mass.length; i++){
        if((mass[i][0][0] == mass[i][1][0])&&(mass[i][1][0] != 0)&&(mass[i][0][0] != 0)){
            refl++;
        }
    }
    if(refl != uniqueElements.length){
        refl = 0;
    }

}
/**symmetry(mass)-Функция проверяющая отношение на симметричность
 *
 *Производит проверку отношения на свойство симметричности, проверяя массив на наличие пары вида xRy и yRx.
 *
 **@return NULL
 */
function symmetry2(mass){
    for(var i = 0; i < mass.length; i++){
        for(var k = i + 1; k < mass.length; k++){
            if((mass[i][0][0] == mass[k][1][0]) && (mass[i][1][0] == mass[k][0][0])){
                symm++;
            }
        }
    }
}
/**cossymmetry(mass)-Функция проверяющая отношение на коссимметричность
 *
 *Производит проверку отношения на свойство коссимметричности, проверяя массив на отсутствие пары вида xRy и yRx, учитывая исключение 0R0.
 *
 **@return NULL
 */
function cossymmetry2(mass){
    for(var i = 0; i < mass.length; i++){
        for(var k = i + 1; k < mass.length; k++){
            if(!((mass[i][0][0] == mass[k][1][0]) && (mass[i][1][0] == mass[k][0][0]))){
                cossymm++;
            } else if((mass[i][0][0] == mass[k][1][0]) && (mass[i][1][0] == mass[k][0][0])){
                cossymm = 0;
                if((mass[i][0][0] == mass[k][0][0]) && (mass[i][1][0] == mass[k][1][0])){
                    cossymm++;
                }
                break;
            }
        }
        if(cossymm == 0){
            break;
        }
    }
}
/**transitivity(mass)-Функция проверяющая отношение на транизитивность
 *
 *Производит проверку отношения на свойство транзитивности, проверяя проверяя массив на наличие пар вида xRy, yRz, xRz.
 *
 **@return NULL
 */
function transitivity2(mass){
    for(var i = 0; i < mass.length; i++){
        for(var k = i + 1; k < mass.length - 1; k++){
            if((mass[i][1][0] == mass[k][0][0]) && (mass[i][0][0] == mass[k+1][0][0]) && (mass[k][1][0] == mass[k+1][1][0])){
                transit++;
                break;
            }
        }
    }
}