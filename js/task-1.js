const liOfCategories = document.querySelectorAll("#categories > .item")
console.log("Number of categories:", liOfCategories.length);
const allTitles = document.querySelectorAll('h2');
allTitles.forEach(function (title) {
    const titleName = title.textContent;
    console.log(`Catecory: ${titleName}`)
    const categoriesNames = title.parentElement.querySelectorAll("ul > li");
    console.log(`"Elements: ${categoriesNames.length}`);
});

 
