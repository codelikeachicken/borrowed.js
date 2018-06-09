module.exports = {
    php: {
        ucwords (words) {
            const isArray = Array.isArray(words);
            if (!isArray) {
                let strArray = words.split(" "),
                    retString = "";

                for (var s in strArray) {
                    let strCurrent = strArray[s],
                        letters = strCurrent.split("");       

                    letters[0] = letters[0].toUpperCase();       
                    
                    retString += letters.join("") + " ";
                }    
                return retString.trim();
            } else {
                const listOfWords = [];
                for (var i = 0; i < listOfWords; i++) {

                }
            }
        }
    },
    mysql: {}
}

