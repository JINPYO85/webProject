

document.getElementById("word").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault(); 

        const word = e.target;
        const result = document.getElementById("result");

        result.value += word.value + "\n";

        word.value = "";
        word.focus();
    }
});


document.getElementById("print").addEventListener("click", () => {
    const width = parseInt(document.getElementById("width").value);
    const height = parseInt(document.getElementById("height").value);
    const color = document.getElementById("color").value;
    const output = document.getElementById("output").value.trim();

    const view = document.getElementById("view");
    view.style.width = `${width}px`;
    view.style.height = `${height}px`
    view.style.backgroundColor = color;
    view.innerHTML = output;
    
    // 텍스트 중앙 정렬
    view.style.display = "flex";
    view.style.justifyContent = "center";  // 수평 중앙
    view.style.alignItems = "center";      // 수직 중앙
});