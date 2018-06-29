var m1 = [];
var m2 = [];
var mu = [];
/**DeleteExtra(mass)-Функция служит для удаления пустых и повторяющихся элементов
 *@param mass - сам массива
 *@return NULL
 */
function DeleteExtra1(mass){
    for(var i = 0; i < mass.length; i++){
        if(mass[i] == ""){
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
/**Check(j, m, nameid)-Функция, производящая валидацию.
 *
 *Проходится по всем элементам массива, проверяя каждый на соответсвующий формат и выдает ошибку в случае несоответствия.
 *
 * @param j - номер массива
 * @param m - сам массива
 * @param nameid1 - id массива
 ** @return m - массив
 */
function Check1(j, m, nameid){
    m = document.getElementById(nameid).value;
    m = m.split(" ");
    DeleteExtra1(m);
    var er = 0;
    for(var i = 0; i < m.length; i++){
        var temp = m[i];
        if(temp.length > 3){
            alert("Введено больее трех символов в " +(i+1)+ " элементе" +j+ "массива");
            er++;
        }
        else if(temp.length < 3){
            alert("Введено менее трех символов в " +(i+1)+ " элементе" +j+ "массива");
            er++;
        }
        var n = parseInt(temp[0]);
        if (isNaN(n)) {
            alert("не число в первом символе " +(i+1)+ " элемента" +j+ "массива");
            er++;
        }
        else{
            if(n%2==0){
                alert("четное число в первом символе " +(i+1)+ " элемента" +j+ "массива");
                er++;
            }
        }
        var n = parseInt(temp[1]);
        if (isNaN(n)) {
            alert("не число во втором символе " +(i+1)+ " элемента" +j+ "массива");
            er++;
        }
        var n = parseInt(temp[2]);
        if (!isNaN(n)) {
            alert("не буква в третьем символе " +(i+1)+ " элемента" +j+ "массива");
            er++;
        }
        else {
            if(!(((temp[2] >= 'A')&&(temp[2] <= 'Z'))||((temp[2] >= 'a')&&(temp[2] <= 'z'))||((temp[2] >= 'А')&&(temp[2] <= 'я')))){
                alert("не буква в третьем символе " +(i+1)+ " элемента" +j+ "массива");
                er++;
            }
        }

    }
    if(er > 0){
        document.getElementById("resforlab1").innerHTML = "<br/>"
        throw new Error();
    } else {
        return m;
    }
}

/**Intersection()-Функция пересечения
 *Производит операцию пересечения двух множеств, добавляя в третий массив элементы, содержащиеся в первом и втором массиве.
 *@return NULL
 */
function Intersection1(){

    var m1 = Check1(1, m1, "arr1");
    var m2 = Check1(2, m2, "arr2");
    var m3 = [];
    DeleteExtra1(m1);
    DeleteExtra1(m2);
    for(var i = 0, k = 0; i < m1.length; i++){
        for(var j = 0; j < m2.length; j++){
            if(m1[i] == m2[j]){
                m3[k] = m1[i];
                k++;
            }
        }
    }

    DeleteExtra1(m3);
    document.getElementById("resforlab1").innerHTML = m3+"<br/>"
}
/**union()-Функция объединения
 *Производит операцию объединения двух множеств, добавляя в третий массив первый и второй массив и удаляя второй повторяющийся элемент.
 *@return NULL
 */
function union1(){
    var m1 = Check1(1, m1, "arr1");
    var m2 = Check1(2, m2, "arr2");
    var m3 = [];
    DeleteExtra1(m1);
    DeleteExtra1(m2);
    for(var i = 0; i < m1.length; i++){
        m3[i] = m1[i];
    }
    for(var i = 0; i < m2.length; i++){
        m3[i + m1.length] = m2[i];
    }
    for(var i = 0; i < m3.length; i++){
        for(var j = i + 1; j < m3.length; j++){
            if(m3[i] == m3[j]){
                m3.splice(j, 1);
            }
        }
    }
    DeleteExtra1(m3);
    document.getElementById("resforlab1").innerHTML = m3+"<br/>"
}

/**SymmDiff()-Функция симметрической разности
 *Производит операцию симметрической разности двух множеств, добавляя в третий массив первый и второй массив и удаляя повторяющиеся элементы.
 *@return NULL
 */
function SymmDiff1(){
    var m1 = Check1(1, m1, "arr1");
    var m2 = Check1(2, m2, "arr2");
    var m3 = [];
    DeleteExtra1(m1);
    DeleteExtra1(m2);
    for(var i = 0; i < m1.length; i++){
        m3[i] = m1[i];
    }
    for(var i = 0; i < m2.length; i++){
        m3[i + m1.length] = m2[i];
    }
    for(var i = 0; i < m3.length; i++){
        for(var j = 0; j < m3.length; j++){
            if(j == i){
                continue;
            }
            if(m3[i] == m3[j]){
                m3.splice(j, 1);
                m3.splice(i, 1);
                i--;
                break;
            }
        }
    }
    DeleteExtra1(m3);
    document.getElementById("resforlab1").innerHTML = m3+"<br/>"
}
/**Addition(num1, mass1, nameid1, num2, mass2, nameid2) -Функция дополнения
 *Производит операцию дополнения двух множеств, путем добавления в третий массив элементов, которых нет в первом или втором массиве,
 *выводит результирующий массив на экран.
 *@param num1 - номер массива
 *@param mass1 - сам массива
 *@param nameid1 - id массива
 *и для второго массива соответственно.
 *@return NULL
 */
function Addition1(num1, mass1, nameid1, num2, mass2, nameid2){

    var m1 = Check1(num1, mass1, nameid1);
    var m2 = Check1(num2, mass2, nameid2);
    var m3 = [];
    DeleteExtra1(m1);
    DeleteExtra1(m2);
    for(var i = 0, k = 0; i < m2.length; i++, k++){
        for(var j = 0; j < m1.length; j++){
            if(m2[i] != m1[j]){
                m3[k] = m2[i];
            }
            else{
                m3.splice(k, 1);
                k--;
                break;
            }
        }
    }
    DeleteExtra1(m3);
    document.getElementById("resforlab1").innerHTML = m3+"<br/>"
}