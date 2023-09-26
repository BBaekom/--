const clicks = document.querySelectorAll(".addNew");

for (let click of clicks) {
    click.addEventListener("click", function (event) {
        const toDoList = document.createElement('div');
        const parent = event.target.parentNode; //parent = #list
        toDoList.innerHTML = `<div class="newBox">${parent.firstElementChild.value}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="three-dots2" viewBox="0 0 16 16">
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
      </svg></div>`;
        parent.before(toDoList);
        parent.firstElementChild.value = '';

    })
}


