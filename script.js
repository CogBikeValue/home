const pages = [

{
    title: "Bike Collection",
    description: "Browse every bike available in COG.",
    link: "https://cogbikevalue.github.io/collection/",
    image: "https://cogbikevalue.github.io/home/images/adwawdadwadw.png"
},

{
    title: "Bike Values",
    description: "Trading values and market information.",
    link: "https://cogbikevalue.github.io/bikes/",
    image: "https://cogbikevalue.github.io/home/images/awdawdadwadw.png"
},

{
    title: "COG",
    description: "The main Roblox experience.",
    link: "https://www.roblox.com/games/100550219954127/Cog",
    image: "https://cogbikevalue.github.io/home/images/2602806146_100550219954127_1780547337326.png"
},

{
    title: "Highway Loop",
    description: "Long roads and cruising.",
    link: "https://www.roblox.com/games/97656354500235/Highway-Loop",
    image: "https://cogbikevalue.github.io/home/images/2602806146_97656354500235_1780547142012.png"
},

{
    title: "Downhill Touge",
    description: "Technical downhill riding.",
    link: "https://www.roblox.com/games/81716287708579/Cog-Touge-1",
    image: "https://cogbikevalue.github.io/home/images/2602806146_81716287708579_1780547244887.png"
},

{
    title: "Trade Hub",
    description: "Meet traders and exchange bikes.",
    link: "https://www.roblox.com/games/119484254343449/Trade-Hub",
    image: "https://cogbikevalue.github.io/home/images/2602806146_119484254343449_1780547015110.png"
},

{
    title: "Cogs & Chainrings",
    description: "Official Roblox community group.",
    link: "https://www.roblox.com/communities/34646663/Cogs-And-Chainrings",
    image: "https://tr.rbxcdn.com/180DAY-60cf0ee99daa1d88dd5cb734ba51bc0e/150/150/Image/Webp/noFilter"
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
