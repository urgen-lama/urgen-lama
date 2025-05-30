const glossary = [
    { term: "String", description: "A guitar string can be of many gauge. Different gauge produces different sounds."},
    { term: "Keys", description: "Keys are important for creating a unique sounds. You can tweak the different settings to create different sounds."},
    { term: "Bass", description: "Bass can be played by bass guitar or keys. Modern bass sounds are created by using keys but in a band settings bass guitar is suitable"},
    { term: "Drums", description: "Drums are very important for timing and rhythm of the song."},
];

const main = document.getElementById("creating-a-glossary");

const heading = document.createElement("h1");
heading.textContent = "Glossary";
main.appendChild(heading);

const dl = document.createElement("dl");
glossary.forEach(entry => {
    const dt = document.createElement("dt");
    dt.textContent = entry.term;

    const dd = document.createElement("dd");
    dd.textContent = entry.description;

    dl.appendChild(dt);
    dl.appendChild(dd);
})
main.appendChild(dl);