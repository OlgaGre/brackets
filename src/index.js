module.exports = function check(str, bracketsConfig) {

    //
    let strOfArr = '';

    let result = str;
    for (var j = 0; j < str.length; j++) {
        for (var i = 0; i < bracketsConfig.length; i++) {

            strOfArr = bracketsConfig[i][0] + bracketsConfig[i][1];
            let index = result.indexOf(strOfArr);
            if (index >= 0) {
                result = result.substring(0, index) + result.substring(index += 2)
            }

        }
    }

    if (result.length == 0) {
        return true
    } else {
        return false
    }

}