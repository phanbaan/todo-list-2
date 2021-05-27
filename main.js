var count = 1;
function addToList() {
  var category;
  var categorys = document.querySelector("#action_select").value;
  var title = document.querySelector(".input_title_desc").value;
  var date = document.querySelector("#date_select").value;
  var description = document.querySelector(".input_description").value;

  switch (categorys) {
    case "MARKETING":
      category = 0;
      break;
    case "DESIGN":
      category = 1;
      break;
    case "DEVELOPMENT":
      category = 2;
      break;
    case "MANAGEMENT":
      category = 3;
      break;
    default:
      break;
  }

  var todoLists = document.querySelector(".todo_lists ul");
  var classList = [
    "todo__marketing",
    "todo__design",
    "todo__development",
    "todo__management",
  ];
  var li = document.createElement("li");
  li.classList = classList[category] + " list__item-" + count;
  li.innerHTML =
    '<div class="todo__category"><p>' +
    categorys +
    "</p></div>" +
    '<div class="todo__content"> <h4>' +
    title +
    "</h4> <p>" +
    description +
    "</p> </div>" +
    '<div class="todo__time"><div class="todo__date"><p>' +
    date +
    "</p></div>" +
    '<div class="todo__check"><ul> <li> <a href="#" onclick="removeItem();" >' +
    '<img src="./img/check.png" width="20" height="15"  alt=""/></a></li> </ul> </div></div>';
  todoLists.appendChild(li);

  setTimeout(() => {
    document.querySelector(".list__item-" + count);
    count++;
  }, 200);
}

var countClick = 0;

function add_new() {
  if (countClick % 2 == 0) {
    var todoNew = document.querySelector(".todo__new");
    todoNew.classList = "todo__new todo__new-active";
    var todoHeaderAdd = document.querySelector(".todo-header__btn-add");
    todoHeaderAdd.classList = "todo-header__btn-add todo-header__btn-active";
    countClick++;
  } else {
    document.querySelector(".todo__new").classList = "todo__new";
    document.querySelector(".todo-header__btn-add").classList =
      "todo-header__btn-add";
    countClick++;
  }
}
