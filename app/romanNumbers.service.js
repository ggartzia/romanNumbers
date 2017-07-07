function RomanNumbersService() {
    var service = {
        convert: convert
    }

    var romanNumbers = {"I": {value: 1}, 
                        "V": {value: 5, exception: "I"}, 
                        "X": {value: 10, exception: "I"}, 
                        "L": {value: 50, exception: "X"}, 
                        "C": {value: 100, exception: "X"}, 
                        "D": {value: 500, exception: "C"}, 
                        "M": {value: 1000, exception: "C"}};

    function convert(number) {
        var romanNumber = "";

        var extractRomanLetter = function (letter) {
            if (number - romanNumbers[letter].value >= 0) {
                number -= romanNumbers[letter].value;
                return letter;
            }
            if (romanNumbers[letter].exception) {
                var exceptionNumber = romanNumbers[letter].value - romanNumbers[romanNumbers[letter].exception].value;

                if (number - exceptionNumber >= 0) {
                    number -= exceptionNumber;
                    return romanNumbers[letter].exception + letter; 
                }
            }
        };

        while (number != 0) {
            romanNumber += (extractRomanLetter("M") || extractRomanLetter("D") || 
                            extractRomanLetter("C") || extractRomanLetter("L") || 
                            extractRomanLetter("X") || extractRomanLetter("V") || 
                            extractRomanLetter("I"));
        }
        
        return romanNumber;
    }

    return service;
}

