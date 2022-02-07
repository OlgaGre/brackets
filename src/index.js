module.exports = function check(str, bracketsConfig) {
    // сревниваем 2 элемента с массивом, если не совпадают, то удаляем.
    // bracketsConfig массив 
    // 

    //
    let checkArr = '';
    let checkStr = '';
    let result = '';


    for (var i = 0; i < bracketsConfig.length; i++) {
        for (var j = 0; j < bracketsConfig[i].length; j++) {
            checkStr = str[i] + str[i += 1];
            i -= 1;

            checkArr = bracketsConfig[i][j] + bracketsConfig[i][j += 1];
            j -= 1;

            if (checkStr == checkArr) {
                result = str.substring(0, i) + str.substring(i = +2)
                i -= 2;
            } else {
                result = str
            }

        }

    }
    if (result.length == 0) {
        return true
    } else {
        return false
    }

}