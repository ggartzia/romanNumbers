"use strict";

describe('Roman Numbers', function() {

    it("Returns something", function () {
        var romanNum = RomanNumbersService().convert(0);
        expect(romanNum).toBe("");
    });

    it("Returns I", function () {
        var romanNum = RomanNumbersService().convert(1);
        expect(romanNum).toBe("I");
    });

    it("Returns II", function () {
        var romanNum = RomanNumbersService().convert(2);
        expect(romanNum).toBe("II");
    });

    it("Returns V", function () {
        var romanNum = RomanNumbersService().convert(5);
        expect(romanNum).toBe("V");
    });

    it("Returns VIII", function () {
        var romanNum = RomanNumbersService().convert(8);
        expect(romanNum).toBe("VIII");
    });

    it("Returns IV", function () {
        var romanNum = RomanNumbersService().convert(4);
        expect(romanNum).toBe("IV");
    });

    it("Returns X", function () {
        var romanNum = RomanNumbersService().convert(10);
        expect(romanNum).toBe("X");
    });

    it("Returns 34 as XXXIV", function () {
        var romanNum = RomanNumbersService().convert(34);
        expect(romanNum).toBe("XXXIV");
    });

    it("Returns 44 as XLIV", function () {
        var romanNum = RomanNumbersService().convert(44);
        expect(romanNum).toBe("XLIV");
    });

    it("Returns 89 as LXXXIX", function () {
        var romanNum = RomanNumbersService().convert(89);
        expect(romanNum).toBe("LXXXIX");
    });

    it("Returns 3582 as MMMDLXXXII", function () {
        var romanNum = RomanNumbersService().convert(3582);
        expect(romanNum).toBe("MMMDLXXXII");
    });

    it("Returns 3998 as MMMCMXCVIII", function () {
        var romanNum = RomanNumbersService().convert(3998);
        expect(romanNum).toBe("MMMCMXCVIII");
    });

});
