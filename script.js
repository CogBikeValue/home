const pages = [
{
    title:"Bike Collection",
    description:"Browse every bike available in COG.",
    link:"https://cogbikevalue.github.io/collection/"
},
{
    title:"Bike Values",
    description:"Trading values and market information.",
    link:"https://cogbikevalue.github.io/bikes/"
},
{
    title:"COG",
    description:"The main Roblox experience.",
    link:"https://www.roblox.com/games/100550219954127/Cog"
},
{
    title:"Highway Loop",
    description:"Long roads and cruising.",
    link:"https://www.roblox.com/games/97656354500235/Highway-Loop"
},
{
    title:"Downhill Touge",
    description:"Technical downhill riding.",
    link:"https://www.roblox.com/games/81716287708579/Cog-Touge-1"
},
{
    title:"Trade Hub",
    description:"Meet traders and exchange bikes.",
    link:"https://www.roblox.com/games/119484254343449/Trade-Hub"
},
{
    title:"Cogs & Chainrings",
    description:"Official Roblox community group.",
    link:"https://www.roblox.com/communities/34646663/Cogs-And-Chainrings"
}
];

let current = 0;

const title = document.getElementById("title");
const description = document.getElementById("description");
const visitBtn = document.getElementById("visitBtn");
const dots = document.getElementById("dots");

function render(){

    const page = pages[current];

    title.textContent = page.title;
    description.textContent = page.description;
    visitBtn.href = page.link;

    dots.innerHTML = "";

    pages.forEach((_,i)=>{
        const dot = document.createElement("div");
        dot.className = "dot" + (i === current ? " active" : "");
        dots.appendChild(dot);
    });
}

document.getElementById("next").onclick = ()=>{
    current = (current + 1) % pages.length;
    render();
};

document.getElementById("prev").onclick = ()=>{
    current = (current - 1 + pages.length) % pages.length;
    render();
};

render();
