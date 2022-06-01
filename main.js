//命令通りに動いて、自由度が高い！！
const display = document.getElementById("change");
const button = document.getElementById("button");

button.onclick = () => {
  //中身の部分を変えよう！！
  display.textContent += "👍";
};
