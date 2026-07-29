const files = [
    {
        name: "File One: blah blah blah",
        tags: ["tar baby", "scroll"],
        link: "./fileone.html",
        author: "Luca Suarez",
        year: "1966",
        location: "Mexico",
        description: "the baby is on fire because it rolled in tar and then kept rolling and eventually fell off the tar table and into a big pit of bic lighters, which it proceeeded to grab at until one sparked and engulfed him in flames"
    },
    {
        name: "File Two: bleh bleh bleh",
        tags: ["pemex", "scroll"],
        link: "./filetwo.html",
        author: "Cassius Hall",
        year: "1967",
        location: "Boston",
        description: "cassius spilt oil in south station. sorrryyyyy sorryyyyyy he didnt mean to he just had a big fucking bucket of crude oil and he was trying to get on the amtrak but it fell over and got EVERYWHERE"
    },
    {
        name: "The Tlatelolco Stele",
        tags: ["tlatelolco", "brigada blanca", "dirty war", "olympics"],
        link: "./tlatelolco.pdf",
        author: "Ralf Roletschek",
        year: "1966",
        location: "Plaza de las Tres Culturas, Mexico City",
        description: "A monument erected in the Plaza de las Tres Culturas to honor those killed in the Tlatelolco Massacre. Only 20 names are engraved on its surface, despite the estimated death toll ranging somewhere between 300 and 400. The exact number of victims remains unknown. In the background, the Church of Santiago, and to the right, the Tlatelolco Archaeological Zone."
    },
    {
        name: "Brigada Blanca (White Brigade) Emblem",
        tags: ["brigada blanca", "dirty war", "olympics", "paramilitary", "death flight", "litempo"],
        link: "./brigadablanca.pdf",
        author: "Gobierno de Mexico",
        year: "Unknown",
        location: "Unknown",
        description: "The insignia of the White Brigade, a paramilitary unit led by Miguel Nazar Haro (LITEMPO-12) which carried out covert acts of state terrorism against left-wing militias such as the Party of the Poor (PdlP), La Iglesia del Tercer Milenio (IDTM), and La Liga Comunista 23 de Septiembre (LC23S) on behalf of the Dirección Federal de Seguridad (DFS) and the Mexican government."
    }
];

let curFiles = files;

const resultBox = document.getElementById("search-results");
const resultCount = document.getElementById("result-count");
const searchField = document.getElementById("searchfield");

const sortNameAsc = document.getElementById("sort-name-asc");
const sortNameDesc = document.getElementById("sort-name-desc");
const sortYearAsc = document.getElementById("sort-year-asc");
const sortYearDesc = document.getElementById("sort-year-desc");

function renderFiles(fileArray) {
    resultBox.replaceChildren();
    for (const file of fileArray) {
        // make card
        const curFile = document.createElement('div');
        curFile.className = "search-file";

        // fill card with review info
        curFile.innerHTML =
            `<div class="file-name">
                <a href=${file.link}>${file.name}</a>
            </div>
            <div class="file-data">
                <span class="file-author">${file.author}</span> | <span class="file-loc">${file.location}</span> | <span class="file-age">${file.year}</span>
            </div>   
            <div class="file-tags">
                ${file.tags.map(tag => `
                    <span class="file-tag">${tag}</span>
                `).join("")}
            </div>
            <div class="file-desc">
                ${file.description}
            </div>`;

        // append to search results
        for (const tag of curFile.querySelectorAll('.file-tag')) {
            tag.addEventListener('mouseup', function (event) {
                searchField.value = '';
                filterFiles(files, "tag", tag.innerHTML);
            })
        }
        resultBox.appendChild(curFile)
    }
    if (fileArray.length == 1) {
        resultCount.textContent = `${fileArray.length} result`
    } else {
        resultCount.textContent = `${fileArray.length} results`
    }

}

function searchFiles(fileArray, searchTerm) {
    const searchTerms = searchTerm.trim().split(/\s+/);
    curFiles = fileArray.filter(file => searchTerms.every(term =>
        file.name.toLowerCase().includes(term.toLowerCase()) ||
        file.tags.join(',').toLowerCase().includes(term.toLowerCase()) ||
        file.author.toLowerCase().includes(term.toLowerCase()) ||
        file.description.toLowerCase().includes(term.toLowerCase()) ||
        file.year.includes(term) ||
        file.location.toLowerCase().includes(term.toLowerCase())
    ));
    return curFiles;
}

function sortFiles(fileArray, type, desc) {
    let fileList;
    switch (type) {
        case "name":
            if (desc) {
                fileList = fileArray.sort((a, b) => b.name.localeCompare(a.name));
            } else {
                fileList = fileArray.sort((a, b) => a.name.localeCompare(b.name));
            }
            break;
        case "year":
            fileList = fileArray.sort((a, b) => {
                const aIsNum = !isNaN(a.year);
                const bIsNum = !isNaN(b.year);
                if (aIsNum && bIsNum) return (desc ? b.year - a.year : a.year - b.year);
                if (aIsNum && !bIsNum) return -1;
                if (!aIsNum && bIsNum) return 1;
                return 0;
            });
            break;
        default:
            return;
    }
    curFiles = fileList;
    renderFiles(curFiles);
}

function filterFiles(fileArray, type, term) {
    let fileList;
    switch (type) {
        case "tag":
            fileList = fileArray.filter(file => file.tags.includes(term));
            break;
        default:
            return;
    }
    renderFiles(fileList);
}

searchField.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchFiles(files, searchField.value);
        renderFiles(curFiles);
    }
});

sortNameAsc.addEventListener('click', function () {
    sortFiles(curFiles, "name", false);
})
sortNameDesc.addEventListener('click', function () {
    sortFiles(curFiles, "name", true);
})
sortYearAsc.addEventListener('click', function () {
    console.log("sort year asc");
    sortFiles(curFiles, "year", false);
})
sortYearDesc.addEventListener('click', function () {
    sortFiles(curFiles, "year", true);
})

sortFiles(files, "name", false);

const tagFilters = document.getElementById("tag-filters");

let allTags = [];
for (const file of files) {
    for (const tag of file.tags) {
        if (!allTags.includes(tag)) {
            allTags.push(tag);
        }
    }
}

for (const tag of allTags) {
    const curTag = document.createElement('div');
    curTag.className = "file-tag";
    curTag.innerHTML = tag;
    curTag.addEventListener('mouseup', function () {
        filterFiles(curFiles, "tag", tag)
    })
    tagFilters.appendChild(curTag);
}