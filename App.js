let user = document.querySelector("#username");
let form = document.querySelector("form");
form.onsubmit = (e) => {
    e.preventDefault ();
    let value = user.value;
    fetchUserData(value);
};
let div = document.querySelector(".display-details");

let fetchUserData = async (user) => {
    let d = await fetch(`https://api.github.com/users/${user}`);
    let fd = await d.json();
    let { avatar_url, login, name, company, location, id } = fd;
    div.innerHTML = `
        <aside>
        <h1>USER DETAILS</h1>
        <hr/>
        </aside>
        <img src=${avatar_url} alt=${id} />
        <p>Name : ${name}</p>
        <p>Username : ${login}</p>
        <p>company : ${company}</p>
        <p>Location : ${location}</p>
        `;
    };