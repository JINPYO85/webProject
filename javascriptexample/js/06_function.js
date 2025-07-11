function test1(){
    alert("함수 선언식");
}

function bgChange(color){
    document.getElementById("divBg").style.backgroundColor = color;

}

function clickCount(){
    const btn = document.getElementById("btn1");
    btn.innerText = parseInt(btn.innerText) + 1;
}

/*function clickCount(btn){
    btn.innerText = parseInt(btn.innerText) + 1;
}*/


function add(){

    const NUM1 = Number((document.getElementById("number1")).value);
    const NUM2 = Number((document.getElementById("number2")).value);
        
    const SUM = NUM1+NUM2;

    document.getElementById("result").value= SUM;
}


/*
function add(){
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");

    const val1 = number1.value.trim(val1);
    const val2 = number1.value.trim(val2);

}
*/

//화살표 함수 
//1. 기본형태 : ([매개변수]) => {}

document.getElementById("btn2-1").addEventListener("click", ()=>
    {alert("화살표 함수 기본 형태입니다.");})

//2. 매개변수가 하나일경우 : 매개변수 =>{}
document.getElementById("btn2-2").addEventListener("click", e=>
    {console.log(e.target.id);
    e.target.style.backgroundColor = "yellow";})



function printConsole(fn){// 매개변수로 함수가 전달됨
    //1),2)실행문
    //console.log( fn(2));
    //3) 실행문
    console.log( fn("홍길동",20));
}

//3. {}, return 생략
document.getElementById("btn2-3").addEventListener("click",() => {
    //1)함수 호출(익명 함수)
    //printConsole( function(num){return num * 10});

    //2) 함수 호출 (화살표 함수)
    //printConsole(num =>num*5);

    //3) {},return 생략
    //printConsole( (name,age)=> {"name" : name,"age" : age}); //문법오류
    printConsole( (name,age)=> {return {"name" : name,"age" : age}});
    //printConsole( (name,age)=> ({"name" : name,"age" : age})); 
});


//this(이벤트가 발생한 요소 )사용 불가

// 1) 익명 함수는 this 사용가능
document.getElementById("btn2-4").addEventListener("click", function(){
    this.style.backgroundColor = "pink";
})

//2) 화살표 함수는 this 사용 불가
document.getElementById("btn2-4").addEventListener("click",(e)=> {
    console.log(e.target);

    //this.style.color = "white"; //불가
    e.target.style.color = "white";//가능
})

document.getElementById("fontChange").addEventListener("click",function(){
document.getElementById("bicycle").style.color = (document.getElementById("fontColor")).value;
}) 


/*
document.getElementById("fontColor").addEventListener("input",e=>{
    const fontColor = e.target.value;
    document.getElementById("bicycle").style.color = fontColor;
//document.getElementById("bicycle").style.color = (document.getElementById("fontColor")).value;
})
*/