



window.onload = function () {
    //document.getElementById("NewGameButton").style.visibility = "hidden";
    let temp_table = document.getElementById("myTable");

    for(var i=0;i<9;i++){

        let row = temp_table.insertRow();
        for(var j=0 ;j<9;j++){
            let cell1 = row.insertCell();
            let input = document.createElement('input');
            input.type = 'text';

            input.setAttribute("id", i.toString() + ":" + j.toString());
            cell1.appendChild(input);

        }


    }
    temp_table.rows[0].cells.item(0).childNodes.item("0:0").value=5;
    temp_table.rows[0].cells.item(1).childNodes.item("0:1").value=3;
    temp_table.rows[0].cells.item(4).childNodes.item("0:4").value=7;

    temp_table.rows[1].cells.item(0).childNodes.item("1:0").value=6;
    temp_table.rows[1].cells.item(3).childNodes.item("1:3").value=1;
    temp_table.rows[1].cells.item(4).childNodes.item("1:4").value=9;
    temp_table.rows[1].cells.item(5).childNodes.item("1:5").value=5;

    temp_table.rows[2].cells.item(1).childNodes.item("2:1").value=9;
    temp_table.rows[2].cells.item(2).childNodes.item("2:2").value=8;
    temp_table.rows[2].cells.item(7).childNodes.item("2:7").value=6;

    temp_table.rows[3].cells.item(0).childNodes.item("3:0").value=8;
    temp_table.rows[3].cells.item(4).childNodes.item("3:4").value=6;
    temp_table.rows[3].cells.item(8).childNodes.item("3:8").value=3;

    temp_table.rows[4].cells.item(0).childNodes.item("4:0").value=4;
    temp_table.rows[4].cells.item(3).childNodes.item("4:3").value=8;
    temp_table.rows[4].cells.item(5).childNodes.item("4:5").value=3;
    temp_table.rows[4].cells.item(8).childNodes.item("4:8").value=1;

    temp_table.rows[5].cells.item(0).childNodes.item("5:0").value=7;
    temp_table.rows[5].cells.item(4).childNodes.item("5:4").value=2;
    temp_table.rows[5].cells.item(8).childNodes.item("5:8").value=6;

    temp_table.rows[6].cells.item(1).childNodes.item("6:1").value=6;
    temp_table.rows[6].cells.item(6).childNodes.item("6:6").value=2;
    temp_table.rows[6].cells.item(7).childNodes.item("6:7").value=8;

    temp_table.rows[7].cells.item(3).childNodes.item("7:3").value=4;
    temp_table.rows[7].cells.item(4).childNodes.item("7:4").value=1;
    temp_table.rows[7].cells.item(5).childNodes.item("7:5").value=9;
    temp_table.rows[7].cells.item(8).childNodes.item("7:8").value=5;

    temp_table.rows[8].cells.item(4).childNodes.item("8:4").value=8;
    temp_table.rows[8].cells.item(7).childNodes.item("8:7").value=7;
    temp_table.rows[8].cells.item(8).childNodes.item("8:8").value=9;

   // alert(temp_table.rows[8].cells.item(8).childNodes.item("8:8").value);
    var x=8;
    var y=8;
    var z=x.toString() + ":" + y.toString();
    var what = temp_table.rows[8].cells.item(8).childNodes.item(x.toString() + ":" + y.toString()).value;
    console.log(what);


};

function checkFunc() {
    let matrix = document.getElementById("myTable");
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var value = matrix.rows[i].cells.item(j).childNodes.item(i.toString() + ":" + j.toString()).value;


            if (value) {

                for (var k = 0; k < 9; k++) {

                    if (k !== j && matrix.rows[i].cells.item(k).childNodes.item(i.toString() + ":" + k.toString()).value === value) {
                        return "line";
                    }
                }


                for (var l = 0; l < 9;l++) {
                    if (l !== i && matrix.rows[l].cells.item(j).childNodes.item(l.toString() + ":" + j.toString()).value === value) {

                        return "col";
                    }
                }

                // Check the square
                var startCubeI = Math.floor(i/3)*3;
                for (var x = startCubeI; x < startCubeI + 3; x++) {
                    var startCubeJ = Math.floor(j/3)*3;
                    for (z = startCubeJ; z < startCubeJ + 3; z++) {

                        if ((z !== j || x !== i) && matrix.rows[x].cells.item(z).childNodes.item(x.toString() + ":" + z.toString()).value === value) {
                            return "Cube";
                        }
                    }
                }
            }
        }
    }

    return "OK";
}

function checkCall() {
    var res = checkFunc();
    var isSolved = false;
    document.getElementById("demo").innerHTML = res + " ";
    if(res === "OK"){
        isSolved=checkSolve();
        if(isSolved === true){
            document.getElementById("CheckButton").innerText="New Game"
            document.getElementById("CheckButton").onclick=function() { setNewGame(); }
            document.getElementById("demo").innerHTML ="You WIN!!! "



            // firstbtn.parentNode.replaceChild(secondbtn, firstbtn);



        }
    }
}

function checkSolve() {
    let matrix = document.getElementById("myTable");
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var value = matrix.rows[i].cells.item(j).childNodes.item(i.toString() + ":" + j.toString()).value;


            if (!value) {
                return false;

            }
        }
    }
    return true;

}

function solveTheSudoku() {
    let temp_table = document.getElementById("myTable");
    temp_table.rows[0].cells.item(2).childNodes.item("0:2").value=4;
    temp_table.rows[0].cells.item(3).childNodes.item("0:3").value=6;
    temp_table.rows[0].cells.item(5).childNodes.item("0:5").value=8;
    temp_table.rows[0].cells.item(6).childNodes.item("0:6").value=9;
    temp_table.rows[0].cells.item(7).childNodes.item("0:7").value=1;
    temp_table.rows[0].cells.item(8).childNodes.item("0:8").value=2;

    temp_table.rows[1].cells.item(1).childNodes.item("1:1").value=7;
    temp_table.rows[1].cells.item(2).childNodes.item("1:2").value=2;
    temp_table.rows[1].cells.item(6).childNodes.item("1:6").value=3;
    temp_table.rows[1].cells.item(7).childNodes.item("1:7").value=4;
    temp_table.rows[1].cells.item(8).childNodes.item("1:8").value=8;

    temp_table.rows[2].cells.item(0).childNodes.item("2:0").value=1;
    temp_table.rows[2].cells.item(3).childNodes.item("2:3").value=3;
    temp_table.rows[2].cells.item(4).childNodes.item("2:4").value=4;
    temp_table.rows[2].cells.item(5).childNodes.item("2:5").value=2;
    temp_table.rows[2].cells.item(6).childNodes.item("2:6").value=5;
    temp_table.rows[2].cells.item(8).childNodes.item("2:8").value=7;

    temp_table.rows[3].cells.item(1).childNodes.item("3:1").value=5;
    temp_table.rows[3].cells.item(2).childNodes.item("3:2").value=9;
    temp_table.rows[3].cells.item(3).childNodes.item("3:3").value=7;
    temp_table.rows[3].cells.item(5).childNodes.item("3:5").value=1;
    temp_table.rows[3].cells.item(6).childNodes.item("3:6").value=4;
    temp_table.rows[3].cells.item(7).childNodes.item("3:7").value=2;

    temp_table.rows[4].cells.item(1).childNodes.item("4:1").value=2;
    temp_table.rows[4].cells.item(2).childNodes.item("4:2").value=6;
    temp_table.rows[4].cells.item(4).childNodes.item("4:4").value=5;
    temp_table.rows[4].cells.item(6).childNodes.item("4:6").value=7;
    temp_table.rows[4].cells.item(7).childNodes.item("4:7").value=9;


    temp_table.rows[5].cells.item(1).childNodes.item("5:1").value=1;
    temp_table.rows[5].cells.item(2).childNodes.item("5:2").value=3;
    temp_table.rows[5].cells.item(3).childNodes.item("5:3").value=9;
    temp_table.rows[5].cells.item(5).childNodes.item("5:5").value=4;
    temp_table.rows[5].cells.item(6).childNodes.item("5:6").value=8;
    temp_table.rows[5].cells.item(7).childNodes.item("5:7").value=5;

    temp_table.rows[6].cells.item(0).childNodes.item("6:0").value=9;
    temp_table.rows[6].cells.item(2).childNodes.item("6:2").value=1;
    temp_table.rows[6].cells.item(3).childNodes.item("6:3").value=5;
    temp_table.rows[6].cells.item(4).childNodes.item("6:4").value=3;
    temp_table.rows[6].cells.item(5).childNodes.item("6:5").value=7;
    temp_table.rows[6].cells.item(8).childNodes.item("6:8").value=4;

    temp_table.rows[7].cells.item(0).childNodes.item("7:0").value=2;
    temp_table.rows[7].cells.item(1).childNodes.item("7:1").value=8;
    temp_table.rows[7].cells.item(2).childNodes.item("7:2").value=7;
    temp_table.rows[7].cells.item(6).childNodes.item("7:6").value=6;
    temp_table.rows[7].cells.item(7).childNodes.item("7:7").value=3;


    temp_table.rows[8].cells.item(0).childNodes.item("8:0").value=3;
    temp_table.rows[8].cells.item(1).childNodes.item("8:1").value=4;
    temp_table.rows[8].cells.item(2).childNodes.item("8:2").value=5;
    temp_table.rows[8].cells.item(3).childNodes.item("8:3").value=2;
    temp_table.rows[8].cells.item(5).childNodes.item("8:5").value=6;
    // // temp_table.rows[8].cells.item(6).childNodes.item("8:6").value=1;
}

function setNewGame() {

    let temp_table = document.getElementById("myTable");
    refresh();

    temp_table.rows[0].cells.item(0).childNodes.item("0:0").value=5;
    temp_table.rows[0].cells.item(1).childNodes.item("0:1").value=3;
    temp_table.rows[0].cells.item(4).childNodes.item("0:4").value=7;

    temp_table.rows[1].cells.item(0).childNodes.item("1:0").value=6;
    temp_table.rows[1].cells.item(3).childNodes.item("1:3").value=1;
    temp_table.rows[1].cells.item(4).childNodes.item("1:4").value=9;
    temp_table.rows[1].cells.item(5).childNodes.item("1:5").value=5;

    temp_table.rows[2].cells.item(1).childNodes.item("2:1").value=9;
    temp_table.rows[2].cells.item(2).childNodes.item("2:2").value=8;
    temp_table.rows[2].cells.item(7).childNodes.item("2:7").value=6;

    temp_table.rows[3].cells.item(0).childNodes.item("3:0").value=8;
    temp_table.rows[3].cells.item(4).childNodes.item("3:4").value=6;
    temp_table.rows[3].cells.item(8).childNodes.item("3:8").value=3;

    temp_table.rows[4].cells.item(0).childNodes.item("4:0").value=4;
    temp_table.rows[4].cells.item(3).childNodes.item("4:3").value=8;
    temp_table.rows[4].cells.item(5).childNodes.item("4:5").value=3;
    temp_table.rows[4].cells.item(8).childNodes.item("4:8").value=1;

    temp_table.rows[5].cells.item(0).childNodes.item("5:0").value=7;
    temp_table.rows[5].cells.item(4).childNodes.item("5:4").value=2;
    temp_table.rows[5].cells.item(8).childNodes.item("5:8").value=6;

    temp_table.rows[6].cells.item(1).childNodes.item("6:1").value=6;
    temp_table.rows[6].cells.item(6).childNodes.item("6:6").value=2;
    temp_table.rows[6].cells.item(7).childNodes.item("6:7").value=8;

    temp_table.rows[7].cells.item(3).childNodes.item("7:3").value=4;
    temp_table.rows[7].cells.item(4).childNodes.item("7:4").value=1;
    temp_table.rows[7].cells.item(5).childNodes.item("7:5").value=9;
    temp_table.rows[7].cells.item(8).childNodes.item("7:8").value=5;

    temp_table.rows[8].cells.item(4).childNodes.item("8:4").value=8;
    temp_table.rows[8].cells.item(7).childNodes.item("8:7").value=7;
    temp_table.rows[8].cells.item(8).childNodes.item("8:8").value=9;

    document.getElementById("CheckButton").innerText="Check"
    document.getElementById("CheckButton").onclick= function() { checkCall(); }

}

function refresh() {
    let temp_table = document.getElementById("myTable");
    for(var i=0;i<9;i++){
        for(var j=0 ;j<9;j++){
            temp_table.rows[i].cells.item(j).childNodes.item(i.toString() + ":" + j.toString()).value="";


        }


    }

}