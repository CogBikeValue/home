const pages = [

{
    title: "Bike Collection",
    description: "Browse every bike available in COG.",
    link: "https://cogbikevalue.github.io/collection/",
    image: "https://picsum.photos/1200/600?1"
},

{
    title: "Bike Values",
    description: "Trading values and market information.",
    link: "https://cogbikevalue.github.io/bikes/",
    image: "https://picsum.photos/1200/600?2"
},

{
    title: "COG",
    description: "The main Roblox experience.",
    link: "https://www.roblox.com/games/100550219954127/Cog",
    image: "https://picsum.photos/1200/600?3"
},

{
    title: "Highway Loop",
    description: "Long roads and cruising.",
    link: "https://www.roblox.com/games/97656354500235/Highway-Loop",
    image: "https://picsum.photos/1200/600?4"
},

{
    title: "Downhill Touge",
    description: "Technical downhill riding.",
    link: "https://www.roblox.com/games/81716287708579/Cog-Touge-1",
    image: "https://picsum.photos/1200/600?5"
},

{
    title: "Trade Hub",
    description: "Meet traders and exchange bikes.",
    link: "https://www.roblox.com/games/119484254343449/Trade-Hub",
    image: "https://picsum.photos/1200/600?6"
},

{
    title: "Cogs & Chainrings",
    description: "Official Roblox community group.",
    link: "https://www.roblox.com/communities/34646663/Cogs-And-Chainrings",
    image: "https://picsum.photos/1200/600?7"
}

];

let current = 0;

const pageImage = document.getElementById("pageImage");
const title = document.getElementById("title");
const description = document.getElementById("description");
const visitBtn = document.getElementById("visitBtn");
const dots = document.getElementById("dots");

function render() {

    const page = pages[current];

    pageImage.src = page.image;
    pageImage.alt = page.title;

    title.textContent = page.title;
    description.textContent = page.description;

    visitBtn.href = page.link;

    dots.innerHTML = "";

    pages.forEach((_, index) => {

        const dot = document.createElement("div");

        dot.className =
            index === current
            ? "dot active"
            : "dot";

        dots.appendChild(dot);

    });

}

document.getElementById("next").addEventListener("click", () => {

    current++;

    if(current >= pages.length){
        current = 0;
    }

    render();

});

document.getElementById("prev").addEventListener("click", () => {

    current--;

    if(current < 0){
        current = pages.length - 1;
    }

    render();

});

render();
