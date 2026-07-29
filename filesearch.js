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
    resultCount.textContent = `${fileArray.length} results`
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
            if (desc) {
                fileList = fileArray.sort((a, b) => b.year - a.year);
            } else {
                fileList = fileArray.sort((a, b) => a.year - b.year);
            }
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
    curFiles = fileList;
    renderFiles(curFiles);
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