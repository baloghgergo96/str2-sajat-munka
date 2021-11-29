const getUsers = async (url="") => {
    const response = await fetch(url)
    const data = await response.json()
    return data
};


const createTable = (data) => {
    document.querySelector("table").innerHTML = data
    .map(item => `<td>${item.id}</td>
                  <td>${item.name}</td>
                  <td>${item.emailAddress}</td>
                  <td>${item.address}</td>
                  <td><button class="modify">Szerkesztés</button>
                  </td><td><button class="delete">Törlés</button></td>`)
    .map(item => `<tr>${item}</tr>`)
};


const modifyButtonSelector = () => {
    const button = document.querySelectorAll(".modify")
    const modifyButton = [...button]
    modifyButton.map(item => item.addEventListener("click", modifyUsers))
}


const modifyUsers = (modifyButton) => {
    console.log("szerkesztés")
}


const deleteButtonSelector = () => {
    const button = document.querySelectorAll(".delete")
    const deleteButton = [...button]
    deleteButton.map(item => item.addEventListener("click", deleteUsers))
}


const deleteUsers = (deleteButton) => {
    let id = deleteButton.path[2].querySelector("td:first-child").innerHTML;
    let fetchOptions = {
        method : "DELETE",
        mode : "cors",
        cache : "no-cache"
    };
    fetch(`http://localhost:3000/users/${id}`, fetchOptions)
}


getUsers("http://localhost:3000/users").then(createTable).then(modifyButtonSelector).then(deleteButtonSelector)