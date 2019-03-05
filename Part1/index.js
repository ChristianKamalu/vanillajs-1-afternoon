let arr = []

function play(val) {
    let swap = document.getElementById('player')
    let playerVal = document.getElementById(val)
    
    if (playerVal.innerText !== "X" && playerVal.innerText !== "O") {
        playerVal.innerText = swap.innerText;
        
        if (swap.innerText === "X"){
            swap.innerText = "O";
            arr[val] = "X"
        } else {
            swap.innerText = "X"
            arr[val] = "O"
        }
    } 
    
    // var a = [];
    // var b = [];
    // var c = [];
    // var d = [];
    // var e = [];
    // var f = [];
    // var g = [];
    // var h = [];

    // a.push(arr[0,3,6]);
    // b.push(arr[1,4,7]);
    // c.push(arr[2,5,8]);
    // d.push(arr[0,1,2]);
    // e.push(arr[3,4,5]);
    // f.push(arr[6,7,8]);
    // g.push(arr[0,4,8]);
    // h.push(arr[2,4,6]);

    // var winner = [a, b, c, d, e, f, g, h]

    if ((arr[0] === "X" && arr[3] === "X" && arr[6] === "X") ||
    (arr[1] === "X" && arr[4] === "X" && arr[7] === "X") ||
    (arr[2] === "X" && arr[5] === "X" && arr[8] === "X") ||
    (arr[0] === "X" && arr[1] === "X" && arr[2] === "X") ||
    (arr[3] === "X" && arr[4] === "X" && arr[5] === "X") ||
    (arr[6] === "X" && arr[7] === "X" && arr[8] === "X") ||
    (arr[0] === "X" && arr[4] === "X" && arr[8] === "X") ||
    (arr[2] === "X" && arr[4] === "X" && arr[6] === "X")) {
        alert("Player X wins!!");
    } else if ((arr[0] === "O" && arr[3] === "O" && arr[6] === "O") ||
    (arr[1] === "O" && arr[4] === "O" && arr[7] === "O") ||
    (arr[2] === "O" && arr[5] === "O" && arr[8] === "O") ||
    (arr[0] === "O" && arr[1] === "O" && arr[2] === "O") ||
    (arr[3] === "O" && arr[4] === "O" && arr[5] === "O") ||
    (arr[6] === "O" && arr[7] === "O" && arr[8] === "O") ||
    (arr[0] === "O" && arr[4] === "O" && arr[8] === "O") ||
    (arr[2] === "O" && arr[4] === "O" && arr[6] === "O")) {
        alert("Player O wins!!");
    } else {alert("DRAAAAW!")}
}