const files = [
    {
        name: "The Tlatelolco Stele",
        tags: ["tlatelolco", "white brigade", "dirty war", "olympics"],
        link: "./tlatelolco.pdf",
        author: "Ralf Roletschek",
        year: "1966",
        location: "Plaza de las Tres Culturas, Mexico City",
        description: "A monument erected in the Plaza de las Tres Culturas to honor those killed in the Tlatelolco Massacre. Only 20 names are engraved on its surface, despite the estimated death toll ranging somewhere between 300 and 400. The exact number of victims remains unknown. In the background, the Church of Santiago, and to the right, the Tlatelolco Archaeological Zone.",
        source: "",
        image: "./placeholder.png"
    },
    {
        name: "Brigada Blanca (White Brigade) Emblem",
        tags: ["white brigade", "dirty war", "olympics", "paramilitary", "death flight", "litempo"],
        link: "./brigadablanca.pdf",
        author: "Gobierno de México",
        year: "Unknown",
        location: "Unknown",
        description: "The insignia of the White Brigade, a paramilitary unit led by Miguel Nazar Haro (LITEMPO-12) which carried out covert acts of state terrorism against left-wing militias such as the Party of the Poor (PdlP), La Iglesia del Tercer Milenio (IDTM), and La Liga Comunista 23 de Septiembre (LC23S) on behalf of the Dirección Federal de Seguridad (DFS) and the Mexican government.",
        source: "Sitios de Memoria",
        image: "./placeholder.png"
    },
    {
        name: "Dirección Federal de Seguridad (FDS) Fabric Patch",
        tags: ["white brigade", "dirty war", "olympics", "paramilitary", "death flight"],
        link: "./fabricpatch.pdf",
        author: "Gobierno de México",
        year: "Unknown",
        location: "Unknown",
        description: "A cloth patch belonging to an agent of the Dirección Federal de Seguridad (DFS). The perimeter text reads: “Do not fear where you go; you are meant to die where you must.”",
        source: "Sitios de Memoria",
        image: "./placeholder.png"
    },
    {
        name: "21-438-71, L-1H-10",
        tags: ["dirty war", "olympics", "paramilitary", "disappearances", "LC23S"],
        link: "./21-438-71.pdf",
        author: "Gobierno de México",
        year: "1966",
        location: "Unknown",
        description: "Identifications of alleged members of the Liga Comunista 23 de Septiembre (LC23S).",
        source: "Sitios de Memoria",
        image: "./placeholder.png"
    },
    {
        name: "Ex 21-438-71 H-2 L-1",
        tags: ["dirty war", "olympics", "disappearances", "halcones", "DFS"],
        link: "./ex-21-438-71.pdf",
        author: "Gobierno de México",
        year: "1966",
        location: "Unknown",
        description: "Follow-up to a statement from Gabriel Millan Arellano. Halcones were employed by the DFS.",
        source: "Sitios de Memoria",
        image: "./placeholder.png"
    },
    {
        name: "Exp. 100-18-1-78 H-159 L-65",
        tags: ["dirty war", "olympics", "disappearances", "halcones", "DFS"],
        link: "./exp-100-18-1-78.pdf",
        author: "Gobierno de México",
        year: "1965",
        location: "Oaxaca de Juárez, Oaxaca, Mexico",
        description: "Kidnapping of a Medical Student from UABJO.",
        source: "Sitios de Memoria",
        image: "./placeholder.png"
    },
    {
        name: "File of the Special Brigade of the Dirección Federal de Seguridad (DFS)",
        tags: ["dirty war", "olympics", "disappearances", "halcones", "DFS", "LC23S", "litempo", "white brigade"],
        link: "./dfs.pdf",
        author: "Gobierno de México",
        year: "1965",
        location: "Circular de Morelia No. 8, Colonia Roma, DF",
        description: "A letter addressed to Miguel Nazar Haro, Deputy Director of the DFS regarding the activities of the Liga Comunista 23 de Septiembre (LC23S).",
        source: "",
        image: "./placeholder.png"
    },
    {
        name: "1-A",
        tags: ["corpus christi", "halcones", "paramilitary"],
        link: "./1a.pdf",
        author: "Unknown",
        year: "1966-06-10",
        location: "Mexico City, Mexico",
        description: "Enrique Bordes Mangel photographing the approaching Halcones.",
        source: "General Directorate Fund for Political and Social Research, Box 1266B, exp. 4.",
        image: "./placeholder.png"
    },
    {
        name: "Diagram of Transferred Potential (TP)",
        tags: ["syntergic theory", "lattices", "parapsychology"],
        link: "./diagram-tp.pdf",
        author: "Jacobo Grinberg-Zylberbaum",
        year: "1965",
        location: "Sierra Madre del Sur, Guerrero",
        description: "Found alongside encrypted text in the notes of J. Grinberg: “i) Brain activity exists outside the skull. ii) This extra-skull activity establishes a functional connection between different brains and unites them. iii) Space is a component in our brain's perceptual construction of reality. iv) A fundamental energetic matrix exists behind every material object and physical manifestation. v) The feeling of individuality can be transcended to gain access to perception of unity.”",
        source: "“Psychophysiological Correlates of Communication, Gravitation and Unity: The Syntergic Theory”",
        image: "./placeholder.png"
    },
    {
        name: "CIA-RDP96-00792R000700130002-5",
        tags: ["pemex", "aztec doodlebug", "psionic devices", "ufo", "cobalt-60"],
        link: "./CIA-RDP96-00792R000700130002-5.pdf",
        author: "United States Federal Government",
        year: "1965-03-24",
        location: "Aztec, New Mexico",
        description: "A detailed photograph of the “Aztec Doodlebug” sold by Silas Newton and Leonard GeBauer to Petróleos Mexicanos (Pemex) in 1965.",
        source: "Unknown",
        image: "./placeholder.png"
    },
    {
        name: "CIA-RDP79-00752A000300120171-2",
        tags: ["aztec doodlebug", "ufo", "cobalt-60"],
        link: "./CIA-RDP79-00752A000300120171-2.pdf",
        author: "United States Federal Government",
        year: "1965-03-13",
        location: "Aztec, New Mexico",
        description: "Necropsy performed on creature of unknown origin.",
        source: "Unknown",
        image: "./placeholder.png"
    },
    {
        name: "CIA-RDP96-00788R001200030002-5",
        tags: ["ufo", "cobalt-60", "psionic devices", "athena rtv"],
        link: "./CIA-RDP96-00788R001200030002-5.pdf",
        author: "United States Federal Government",
        year: "1966-06-06",
        location: "White Sands Missile Range, New Mexico",
        description: "Early psionic missile prototype constructed using traces of cobalt-60 found at an excavation site near Aztec, New Mexico.",
        source: "Unknown",
        image: "./placeholder.png"
    },
    {
        name: "“Little Men Due Soon: Flying Saucer Landing Forecast”",
        tags: ["aztec doodlebug", "psionic devices"],
        link: "./little-men.pdf",
        author: "David Mathias",
        year: "1965-09-13",
        location: "Denver, Colorado",
        description: "Author Frank Scully (right) and oil prospector Silas Newton (center) demonstrate ideas about magnetism and earth's orbit using Scully's book Behind the Flying Saucers (1950) to represent a flying saucer and a bowl held by KMYR radio salesman George Koehler (left) to represent the earth.",
        source: "The Denver Post",
        image: "./placeholder.png"
    },
    {
        name: "Silas M. Newton Case File",
        tags: ["aztec doodlebug", "psionic devices", "FBI"],
        link: "./newton-case-file.pdf",
        author: "United States Federal Government",
        year: "1965-04-24",
        location: "Washington, D.C.",
        description: "FBI case file opened on Silas M. Newton after his claims of owning a gadget that could detect minerals and oil were published in the Denver Post. Two months later, he was added to the FBI’s Most Wanted list on charges of espionage, treason, supporting the production of foreign psionic weapons, and aiding suspected narco-satanist organizations.",
        source: "Federal Bureau of Investigation",
        image: "./placeholder.png"
    },
    {
        name: "“Doodlebug Role In Alleged Swindle of Flader Probed”",
        tags: ["aztec doodlebug", "psionic devices"],
        link: "./doodlebug-flader-probed.pdf",
        author: "Charles Roos",
        year: "1965-10-17",
        location: "Denver, Colorado",
        description: "Headline of an article from the Denver Post reporting on the prosecution of Silas M. Newton and Leonard GeBauer for allegedly defrauding Herman A. Flader of $50,000 through his investment in GeBauer’s Colorado Geophysics & Development company, which failed to meet its projected earnings.",
        source: "The Denver Post",
        image: "./placeholder.png"
    },
    {
        name: "“Oil Tycoons Flee to Mexico”",
        tags: ["aztec doodlebug", "psionic devices", "FBI"],
        link: "./oil-tycoons-mexico.pdf",
        author: "J. P. Cahn",
        year: "1965-10-21",
        location: "New York City, New York",
        description: "Images of Silas M. Newton and Leo A. GeBauer published in an article covering their flight across the border to evade U.S. authorities.",
        source: "True, The Man's Magazine",
        image: "./placeholder.png"
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

const locationDrop = document.getElementById("loc-filter");

const selectedTags = document.getElementById("selected-tags");

let activeFilters = [];

function renderFiles(fileArray) {
    resultBox.replaceChildren();
    for (const file of fileArray) {
        // make card
        const curFile = document.createElement('div');
        curFile.className = "search-file";

        // fill card with review info
        curFile.innerHTML =
            `<img class="search-thumb" src='${file.image}'/>
            <div>
                <div class="file-name">
                    <a href='${file.link}'>${file.name}</a>
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
                </div>
            </div>`;

        // append to search results
        for (const tag of curFile.querySelectorAll('.file-tag')) {
            tag.addEventListener('mouseup', function () {
                searchField.value = '';
                activeFilters = [{ type: "tag", value: tag.innerHTML }];
                filterFiles();
            })
        }
        // for (const loc of curFile.querySelectorAll('.file-loc')) {
        //     loc.addEventListener('mouseup', function () {
        //         searchField.value = '';
        //         activeFilters = [{ type: "location", value: loc.innerHTML.toLowerCase() }];
        //         filterFiles();
        //     })
        // }
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
    locationDrop.selectedIndex = 0;
    activeFilters = [];
    renderSelectedFilters();
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
                const aIsNum = !isNaN(new Date(a.year));
                const bIsNum = !isNaN(new Date(b.year));
                if (aIsNum && bIsNum) return (desc ? new Date(b.year) - new Date(a.year) : new Date(a.year) - new Date(b.year));
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

function renderSelectedFilters() {
    selectedTags.replaceChildren();
    if (activeFilters.length > 0) {
        selectedTags.className = "open";
    } else {
        selectedTags.className = "";
    }

    for (const filter of activeFilters) {
        switch (filter.type) {
            case "tag":
                const curTag = document.createElement('span');
                curTag.className = "file-tag";
                curTag.innerHTML = filter.value;
                curTag.addEventListener('mouseup', () => {
                    activeFilters = activeFilters.filter(f => f.type !== "tag" || f.value !== filter.value);
                    renderSelectedFilters();
                    filterFiles();
                });
                selectedTags.appendChild(curTag);
                break;
            // case "location":
            //     const curLoc = document.createElement('span');
            //     curLoc.className = "file-loc";
            //     curLoc.innerHTML = filter.value;
            //     curLoc.addEventListener('mouseup', () => {
            //         activeFilters = activeFilters.filter(f => f.type !== "location" || f.value !== filter.value);
            //         renderSelectedFilters();
            //         filterFiles();
            //     });
            //     selectedTags.appendChild(curLoc);
            //     break;
            default:
                break;
        }
    }
}

function filterFiles() {
    let fileList = files;

    for (const filter of activeFilters) {
        switch (filter.type) {
            case "tag":
                fileList = fileList.filter(file => file.tags.includes(filter.value));
                break;
            case "location":
                fileList = fileList.filter(file => file.location.toLowerCase().includes(filter.value));
                break;
            default:
                break;
        }
    }

    curFiles = fileList;
    renderFiles(curFiles);
    renderSelectedFilters();
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
        if (!activeFilters.some(f => f.type === "tag" && f.value === tag)) {
            activeFilters.push({ type: "tag", value: tag });
        }
        filterFiles();
    })
    tagFilters.appendChild(curTag);
}

const allLocs = {};
for (const file of files) {
    if (file.location in allLocs) {
        allLocs[file.location] = allLocs[file.location] + 1;

    } else {
        allLocs[file.location] = 1;
    }
}

for (const item of Object.keys(allLocs)) {
    // if (allLocs[item] > 1) {
    const newOption = document.createElement('option');
    newOption.value = item.toLowerCase();
    newOption.text = item;
    locationDrop.appendChild(newOption);
    // }
};

locationDrop.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    activeFilters = activeFilters.filter(f => f.type !== "location");
    if (!activeFilters.some(f => f.type === "location" && f.value === selectedValue)) {
        activeFilters.push({ type: "location", value: selectedValue });
    }
    filterFiles();
});