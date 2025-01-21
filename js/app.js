// Primary: #000000 (Black)
// Secondary: #FFFFFF (White)
// Accent: #A1A1A1 (Medium Gray)

const endpoint = "https://jsonplaceholder.typicode.com/users"
const linkContainer = document.querySelector("#links")
const cardsContainer = document.querySelector("#cardsContainer")
const toggleIcon = document.querySelector("#mode-toggle-icon");
const body = document.body;

const links = [
    { id: 0, title: "Home" },
    { id: 1, title: "Contact" },
    { id: 2, title: "About" },
    { id: 3, title: "Services" },
]
links.forEach((link) => {
    linkContainer.innerHTML += `<a href = "#">${link.title}</a>`
})

const xhr = new XMLHttpRequest()
xhr.open("GET", endpoint)
xhr.send()

xhr.onreadystatechange = (e) => {
    if (xhr.readyState === 4) {
        const data = JSON.parse(xhr.response)
        data.forEach((user) => {
            cardsContainer.innerHTML +=
                `
                    <div class="card">
                    <h2>${user.name}</h2>
                    <h3>${user.username}</h3>
                    <p>${user.email}</p>
                    </div>
            `
        })
    }
}
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleIcon.textContent = "🌙";
}


toggleIcon.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        toggleIcon.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    } else {
        toggleIcon.textContent = "🌞";
        localStorage.setItem("theme", "light");
    }
});