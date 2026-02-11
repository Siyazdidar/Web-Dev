let addBtn = document.getElementsByClassName("todolist")[0];


document.getElementsByClassName("input-butt")[0].onclick = function () {
  let text = document.querySelector(".input-tex").value
  let newList = document.createElement("div");
  newList.className = "list";
  newList.innerHTML = `
  <div style="text-align: left; flex: 1;"><input type="checkbox"></div>
  <div style="text-align: center;flex: 1;" class="txt">${text}</div>
  <div style="text-align: right;flex: 1;"><button class="box"> <img src="del.png" style="height: 30px;width:20px"> </button></div>
  `;
  addBtn.appendChild(newList)

  let delBtn = newList.querySelector("button");
  delBtn.onclick = function() {
    addBtn.removeChild(newList);
  };

  let complet = newList.querySelector("input[type=checkbox]");
  let txt = newList.querySelector(".txt")
  complet.onchange = function(){
    if (complet.checked){
      txt.style.textDecoration = "line-through";
    } else {
      txt.style.textDecoration = "none";
    }
  }
};
