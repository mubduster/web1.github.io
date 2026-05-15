const image = document.querySelector("#images");
const outmodal = document.querySelector("#modalBg");

function hideCatto() {
    document.getElementById("btn").style.display = "block";
    document.getElementById("G").style.display = "none";
    document.getElementById("G").style.opacity = "0";
    document.getElementById("modalBg").style.display = "none";
}
function showCatto() {
    document.getElementById("btn").style.display = "none";
    document.getElementById("G").style.display = "block";
    document.getElementById("G").animate(
        [
            { opacity: "0" },
            { opacity: "1" }
        ],
        {
            duration: 2000,
            easing: "linear",
            fill: "forwards",
            delay: 500
        }
    )
}
image.addEventListener("click", (event) => {
    const id = event.target.dataset.id;
    console.log(id);
    let string;
    switch (id) {
        case "A":{
            string = "The Logo: This is the logo of the almighty Catto! Which signifies its strength and superiority over all other cat nations and biger cats. The brave warior, now a ledgend, was the best they had of all time now his logo rests here in rememberance of his last battle against the corrupt cat nations.";
            document.getElementById("modalText").innerText = string;
            document.getElementById("modalBg").style.display = "block";
            break;}
        case "B":{
            string = "The Black Catto: This is the black catto, the most feared and respected cat in the whole cat world. He is the leader of the cat nation and is known for his bravery and strength. He is also known for his loyalty to his people and his willingness to sacrifice himself for the greater good.";
            document.getElementById("modalText").innerText = string;
            document.getElementById("modalBg").style.display = "block";
            break;}
        case "C":{
            string = "The Cato Look: This is the cato look, a look that is used by the catto to intimidate his enemies and show his dominance. It is a look that is feared by all other cats and is a symbol of the catto's power and strength.";
            document.getElementById("modalText").innerText = string;
            document.getElementById("modalBg").style.display = "block";
            break;}
        case "D":{
            string = "The Cato Ready: This is the cato ready, a pose that is used by the catto to show that he is ready for battle. It is a pose that is feared by all other cats and is a symbol of the catto's readiness to fight and defend his people.";
            document.getElementById("modalText").innerText = string;
            document.getElementById("modalBg").style.display = "block";
            break;}
        case "E":{
            string = "The Cato Stare: This is the cato stare, a stare that is used by the catto to intimidate his enemies and show his dominance. It is a stare that is feared by all other cats and is a symbol of the catto's power, strength and might!";
            document.getElementById("modalText").innerText = string;
            document.getElementById("modalBg").style.display = "block";
            break;}
        case "F":{
            string = "The Cato: This is the cato, the most powerful and respected cat in the whole cat world sadly now gone. He was the leader of the biggest cat nation and was known for his bravery and strength. He was also known for his loyalty to his people and his willingness to sacrifice himself for the greater good and to end all corruption in the cats.";
            document.getElementById("modalText").innerText = string;
            document.getElementById("modalBg").style.display = "block";
            break;}
        case "G":{
            string = "The Hidden Catto: This is the hidden catto, a cat that is hidden from the world and is only known to a select few. He is a mysterious figure that is feared by all other cats and is a symbol of the catto's power and strength.";
            document.getElementById("modalText").innerText = string;
            document.getElementById("modalBg").style.display = "block";
            break;}
    }
})

outmodal.addEventListener("click", (event) => {
    if (event.target.id === "modalBg" || event.target.id === "close") {
        document.getElementById("modalBg").style.display = "none";
    }
});