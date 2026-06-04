const pages = [

{
    title: "Bike Collection",
    description: "Browse every bike available in COG.",
    link: "https://cogbikevalue.github.io/collection/",
    image: "https://tr.rbxcdn.com/180DAY-4ee0c4013d91da788f51fbc2819b3528/768/432/Image/Webp/noFilter"
},

{
    title: "Bike Values",
    description: "Trading values and market information.",
    link: "https://cogbikevalue.github.io/bikes/",
    image: "https://tr.rbxcdn.com/180DAY-6978db8db6fb5670515df9a620a480bc/768/432/Image/Webp/noFilter"
},

{
    title: "COG",
    description: "The main Roblox experience.",
    link: "https://www.roblox.com/games/100550219954127/Cog",
    image: "https://tr.rbxcdn.com/180DAY-985744c74d17867110e860601da1eee8/768/432/Image/Webp/noFilter"
},

{
    title: "Highway Loop",
    description: "Long roads and cruising.",
    link: "https://www.roblox.com/games/97656354500235/Highway-Loop",
    image: "https://tr.rbxcdn.com/180DAY-1bdfd22ea9cf1c3b3717e56adca18377/768/432/Image/Webp/noFilter"
},

{
    title: "Downhill Touge",
    description: "Technical downhill riding.",
    link: "https://www.roblox.com/games/81716287708579/Cog-Touge-1",
    image: "https://tr.rbxcdn.com/180DAY-9d19199eeca6759f8dd746127d651bd1/768/432/Image/Webp/noFilter"
},

{
    title: "Trade Hub",
    description: "Meet traders and exchange bikes.",
    link: "https://www.roblox.com/games/119484254343449/Trade-Hub",
    image: "https://tr.rbxcdn.com/180DAY-103aa322b41ccafc77d46a44a413b5a8/768/432/Image/Webp/noFilter"
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
