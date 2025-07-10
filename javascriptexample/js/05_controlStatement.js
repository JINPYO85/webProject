
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
    

}