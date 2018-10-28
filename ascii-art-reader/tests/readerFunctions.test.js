const {getFiles, getFile} = require("../readerFunctions");

test("getFiles displays file content", (done) =>{
    //Arrange
    const expected = ["test.txt"];
    //Act
    const callback = (actual) => {
        expect(actual).toEqual(expected);
        done();
    };
    //Assert
    getFiles("./tests/testData", callback);
});

test("getFile returns correct file", (done) => {
    //Arrange
    const expected = "Here are some text.";
    //Act 
    const callback = (actual)=> {
        expect(actual).toEqual(expected);
        done();
    };
    //Assert
    getFile( 0, "./tests/testData", callback);
});