let turn = true;
let btn1 = document.querySelector("#box1");
let btn2 = document.querySelector("#box2");
let btn3 = document.querySelector("#box3");
let btn4 = document.querySelector("#box4");
let btn5 = document.querySelector("#box5");
let btn6 = document.querySelector("#box6");
let btn7 = document.querySelector("#box7");
let btn8 = document.querySelector("#box8");
let btn9 = document.querySelector("#box9");
btn1.addEventListener("click", click);
btn2.addEventListener("click", click);
btn3.addEventListener("click", click);
btn4.addEventListener("click", click);
btn5.addEventListener("click", click);
btn6.addEventListener("click", click);
btn7.addEventListener("click", click);
btn8.addEventListener("click", click);
btn9.addEventListener("click", click);
let map = {};
function click() {
  if (map[this.id] != 1 || map[this.id] != 0) {
    if (turn) {
      map[this.id] = 1;
      this.innerHTML = `<i class="fa fa-times" aria-hidden="true" ${'style="color: green;"'}></i>`;
    } else {
      map[this.id] = 0;
      this.innerHTML = `<i class="fa fa-circle-o" aria-hidden="true"  ${'style="color: red;"'}></i>`;
    }
    turn = !turn;
    let player = check();
    if (player != 2) {
      setTimeout(() => {
        window.alert(`Player ${player == 1 ? "Green" : "Red"} wins.`);
        location.reload();
      }, 1);
    }
    if (Object.keys(map).length == 9) {
      setTimeout(() => {
        window.alert(`Match Draw.`);
        location.reload();
      }, 1);
    }
  }
}
function check() {
  if (
    map["box1"] == map["box2"] &&
    map["box1"] == map["box3"] &&
    map["box1"] != undefined
  ) {
    return map["box1"];
  }
  if (
    map["box4"] == map["box5"] &&
    map["box6"] == map["box4"] &&
    map["box4"] != undefined
  ) {
    return map["box4"];
  }
  if (
    map["box7"] == map["box8"] &&
    map["box9"] == map["box7"] &&
    map["box7"] != undefined
  ) {
    return map["box7"];
  }
  if (
    map["box1"] == map["box4"] &&
    map["box1"] == map["box7"] &&
    map["box1"] != undefined
  ) {
    return map["box1"];
  }
  if (
    map["box2"] == map["box5"] &&
    map["box8"] == map["box2"] &&
    map["box2"] != undefined
  ) {
    return map["box2"];
  }
  if (
    map["box3"] == map["box6"] &&
    map["box9"] == map["box6"] &&
    map["box3"] != undefined
  ) {
    return map["box3"];
  }
  if (
    map["box1"] == map["box5"] &&
    map["box1"] == map["box9"] &&
    map["box5"] != undefined
  ) {
    return map["box5"];
  }
  if (
    map["box3"] == map["box5"] &&
    map["box5"] == map["box7"] &&
    map["box5"] != undefined
  ) {
    return map["box5"];
  }
  return 2;
}
