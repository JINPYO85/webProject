
function calScore(){

    const kor = document.getElementById("kor");
    const eng = document.getElementById("eng");
    const math = document.getElementById("math");

    const KOR = Number(kor.value);
    const ENG = Number(eng.value);
    const MATH = Number(math.value);

    if (isNaN(KOR) || isNaN(ENG)|| isNaN(MATH)){
        alert("모든 과목에 숫자를 입력해주세요.");
        return;
    }
        

    const SUM = KOR+ENG+MATH;
    const AVG = SUM/3;
    
    document.getElementById("sum").value=`합계 : ${SUM}`;
    document.getElementById("avg").value=`평균 : ${AVG.toFixed(1)}`;
    
    let grade;

    if (AVG >=90&&AVG <=100){
        grade = "A학점";
    }else if (AVG >= 80){
        grade = "B학점";
    }else if (AVG >= 70){
        grade = "C학점";
    }else if (AVG >= 60){
        grade = "D학점";
    }else {grade = "F학점";}
    
    document.getElementById("grade").value=grade;

}

function executeFor(){

    //const hprint = document.getElementById("examFor");
    //const imgprint = document.getElementById("examForImg");

    for(let i=1; i<7; i++){
        examFor.innerHTML+=`<h${i}> Hello JavaScript </h${i}>`;
    }
    
    
    for(let i=1; i<7; i++){
        examForImg.innerHTML += `<img src = '../image/${i}.jpg' />`;
    }
}

function googoodan(){
    let data = "";
    const examgoogoodan = document.getElementById("examgoogoodan");

    for (let i = 1; i <= 9; i++) {
        data += "<table>";
        data += `<tr><th>${i}단</th></tr>`;
        for (let j = 1; j <= 9; j++) {
            data += `<tr><td>${i} x ${j} = ${i * j}</td></tr>`;
        }
        data += "</table>";
    }
    examgoogoodan.innerHTML = data;
 

}

const computerNumber = Math.floor((Math.random()*10) +1);
let nGuesses = 0;
let gameOver = false;

function guess(){
    if(gameOver) return;

    let input = document.getElementById("user");
    let number = parseInt(input.value);
    let result = "";

    /* 입력값 유효성 검사 */
    if (isNaN(number) || number < 1 || number > 10) {
        alert("1부터 10 사이의 숫자를 입력해 주세요.");
        input.value = "";
        input.focus();
        return;
    }
    nGuesses++;

    if (number === computerNumber) {
        result = "성공입니다! 🥳";
        gameOver = true;
    } else if (number < computerNumber) {
        result = "입력한 숫자가 너무 낮습니다.";
    } else {
        result = "입력한 숫자가 너무 높습니다.";
    }

    document.getElementById("result").value = result;
    document.getElementById("guesses").value = nGuesses;

    input.value = "";
    input.focus();

}