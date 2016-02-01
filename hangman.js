var prompt = require('prompt');
var wordList = ['banana', 'chocolate', 'antelope', 'monster', 'xylophone'];

var word = wordList[Math.floor(Math.random * wordList.length)];

prompt.start();
prompt.get(['letter'], function (err, result) {
    
});

function showHangman (attempt) {
    switch (attempt) {
        case 0:
            console.log(
            " __________  \n" +
            " |/          \n" +
            " |           \n" +
            " |           \n" +
            " |           \n" +
            " |           \n" +
            " |           \n" +
            " |           \n" +
            " |           \n" +
            "===");
            break;
        case 1:
            console.log(
            " __________  \n" +
            " |/       :  \n" +
            " |        :  \n" +
            " |           \n" +
            " |           \n" +
            " |           \n" +
            " |           \n" +
            " |           \n" +
            " |           \n" +
            "===");
        case 2:
            console.log(
            " __________  \n" +
            " |/       :  \n" +
            " |        :  \n" +
            " |        0  \n" +
            " |           \n" +
            " |           \n" +
            " |           \n" +
            " |           \n" +
            " |           \n" +
            "===");
        case 3:
            console.log(
            " __________  \n" +
            " |/       :  \n" +
            " |        :  \n" +
            " |        0  \n" +
            " |        |  \n" +
            " |        |  \n" +
            " |           \n" +
            " |           \n" +
            " |           \n" +
            "===");
        case 4:
            console.log(
            " __________  \n" +
            " |/       :  \n" +
            " |        :  \n" +
            " |        0  \n" +
            " |      >-|  \n" +
            " |        |  \n" +
            " |           \n" +
            " |           \n" +
            " |           \n" +
            "===");
        case 5:
            console.log(
            " __________  \n" +
            " |/       :  \n" +
            " |        :  \n" +
            " |        0  \n" +
            " |      >-|-<\n" +
            " |        |  \n" +
            " |           \n" +
            " |           \n" +
            " |           \n" +
            "===");
        case 6:
            console.log(
            " __________  \n" +
            " |/       :  \n" +
            " |        :  \n" +
            " |        0  \n" +
            " |      >-|-<\n" +
            " |        |  \n" +
            " |       ,^  \n" +
            " |           \n" +
            " |           \n" +
            "===");
        case 7:
            console.log(
            " __________  \n" +
            " |/       :  \n" +
            " |        :  \n" +
            " |        0  \n" +
            " |      >-|-<\n" +
            " |        |  \n" +
            " |       ,^, \n" +
            " |           \n" +
            " |    game over!\n" +
            "===");
    }
}