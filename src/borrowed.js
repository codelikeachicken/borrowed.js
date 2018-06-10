module.exports = {
    php: {
        ucwords (strings) {
            const isArray = Array.isArray(strings);

            if (!isArray) {
                var strArray = strings.split(" "),
                    retString = uppercase(strArray).trim()
  
                return retString
            } else {
                const listOfStrings = [];

                for (let i = 0; i < strings.length; i++) {
                    var strCurrent = strings[i].split(" "),
                        temp = uppercase(strCurrent).trim()

                    listOfStrings.push(temp)
                }

                return listOfStrings;
            }
        }
    },
    mysql: {}
}

function uppercase (strArray) {
    let retString = ""

    for (let s in strArray) {
        var strCurrent = strArray[s],
            letters = strCurrent.split(""),
            counter = 0

        if (counter === 0) {
            letters[counter] = letters[0].toUpperCase()
            counter = 1
        }
        
        retString += letters.join("") + " "   
    }  

    return retString;
}
