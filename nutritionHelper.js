var myWindow = window.open("", "myWindow", "width=800, height=600");

// Set the title of the window
myWindow.document.title = "Nutrition Helper";

// Create a div for the header and center it
var header = myWindow.document.createElement("div");
header.style.textAlign = "center";
header.style.marginTop = "20px";
myWindow.document.body.appendChild(header);

// Add colored text to the header
var headerText = myWindow.document.createElement("h1");
headerText.appendChild(document.createTextNode("Nutrition "));
var magentaSpan = document.createElement("span");
magentaSpan.style.color = "magenta";
magentaSpan.appendChild(document.createTextNode("Helper"));
headerText.appendChild(magentaSpan);
headerText.style.fontSize = "72px";
header.appendChild(headerText);
headerText.style.fontWeight = "bold";

// Create a container div for the dropdowns and center it
var containerDiv = myWindow.document.createElement("div");
containerDiv.style.textAlign = "center";
containerDiv.style.marginTop = "40px";
myWindow.document.body.appendChild(containerDiv);

// Create a div for the first row of dropdowns and center it
var firstRowDiv = myWindow.document.createElement("div");
firstRowDiv.style.display = "inline-block";
firstRowDiv.style.verticalAlign = "top";
containerDiv.appendChild(firstRowDiv);

// Create a Diet dropdown
var dietLabel = myWindow.document.createElement("label");
dietLabel.for = "diet";
dietLabel.innerText = "Diet: ";
dietLabel.style.fontSize = "32px";
firstRowDiv.appendChild(dietLabel);

var dietDropdown = myWindow.document.createElement("select");
dietDropdown.name = "diet";
dietDropdown.id = "diet";
dietDropdown.style.fontSize = "18px";
firstRowDiv.appendChild(dietDropdown);
dietDropdown.style.borderRadius = "20px";
dietDropdown.style.padding = "5px 10px";
dietDropdown.style.backgroundColor = "magenta";


var dietOptions = ["Vegetarian", "Vegan", "Keto", "Paleo", "Mediterranean", "Low-Carb"];
for (var i = 0; i < dietOptions.length; i++) {
    var option = myWindow.document.createElement("option");
    option.value = dietOptions[i];
    option.text = dietOptions[i];
    dietDropdown.appendChild(option);
}

// Create a Fat dropdown
var fatLabel = myWindow.document.createElement("label");
fatLabel.for = "fat";
fatLabel.innerText = "Fat: ";
fatLabel.style.fontSize = "32px";
firstRowDiv.appendChild(fatLabel);

var fatDropdown = myWindow.document.createElement("select");
fatDropdown.name = "fat";
fatDropdown.id = "fat";
fatDropdown.style.fontSize = "18px";
firstRowDiv.appendChild(fatDropdown);
fatDropdown.style.borderRadius = "20px";
fatDropdown.style.padding = "5px 10px";
fatDropdown.style.backgroundColor = "magenta";

var fatOptions = ["Low Fat", "Moderate Fat", "High Fat"];
for (var i = 0; i < fatOptions.length; i++) {
    var option = myWindow.document.createElement("option");
    option.value = fatOptions[i];
    option.text = fatOptions[i];
    fatDropdown.appendChild(option);
}

// Create a div for the second dropdown and center it
var secondRowDiv = myWindow.document.createElement("div");
secondRowDiv.style.display = "inline-block";
secondRowDiv.style.verticalAlign = "top";
firstRowDiv.parentNode.appendChild(secondRowDiv);

// Create a Sugar dropdown
var sugarLabel = myWindow.document.createElement("label");
sugarLabel.for = "sugar";
sugarLabel.innerText = "Sugar: ";
sugarLabel.style.fontSize = "32px";
secondRowDiv.appendChild(sugarLabel);

var sugarDropdown = myWindow.document.createElement("select");
sugarDropdown.name = "sugar";
sugarDropdown.id = "sugar";
sugarDropdown.style.fontSize = "18px";
secondRowDiv.appendChild(sugarDropdown);
sugarDropdown.style.borderRadius = "20px";
sugarDropdown.style.padding = "5px 10px";
sugarDropdown.style.backgroundColor = "magenta";

var sugarOptions = ["Low Sugar", "Moderate Sugar", "High Sugar"];
for (var i = 0; i < sugarOptions.length; i++) {
    var option = myWindow.document.createElement("option");
    option.value = sugarOptions[i];
    option.text = sugarOptions[i];
    sugarDropdown.appendChild(option);
}

// Create a Fiber dropdown
var fiberLabel = myWindow.document.createElement("label");
fiberLabel.for = "fiber";
fiberLabel.innerText = "Fiber: ";
fiberLabel.style.fontSize = "32px";
secondRowDiv.appendChild(fiberLabel);

var fiberDropdown = myWindow.document.createElement("select");
fiberDropdown.name = "fiber";
fiberDropdown.id = "fiber";
fiberDropdown.style.fontSize = "18px";
secondRowDiv.appendChild(fiberDropdown);
fiberDropdown.style.borderRadius = "20px";
fiberDropdown.style.padding = "5px 10px";
fiberDropdown.style.backgroundColor = "magenta";

var fiberOptions = ["Low Fiber", "Moderate Fiber", "High Fiber"];
for (var i = 0; i < fiberOptions.length; i++) {
    var option = myWindow.document.createElement("option");
    option.value = fiberOptions[i];
    option.text = fiberOptions[i];
    fiberDropdown.appendChild(option);
}

// Create a div for the third row of dropdowns and center it
var thirdRowDiv = myWindow.document.createElement("div");
thirdRowDiv.style.display = "inline-block";
thirdRowDiv.style.verticalAlign = "top";
containerDiv.appendChild(thirdRowDiv);

// Create a Carbs dropdown
var carbsLabel = myWindow.document.createElement("label");
carbsLabel.for = "carbs";
carbsLabel.innerText = "Carbs: ";
carbsLabel.style.fontSize = "32px";
thirdRowDiv.appendChild(carbsLabel);

var carbsDropdown = myWindow.document.createElement("select");
carbsDropdown.name = "carbs";
carbsDropdown.id = "carbs";
carbsDropdown.style.fontSize = "18px";
thirdRowDiv.appendChild(carbsDropdown);
carbsDropdown.style.borderRadius = "20px";
carbsDropdown.style.padding = "5px 10px";
carbsDropdown.style.backgroundColor = "magenta";

var carbsOptions = ["Low Carbs", "Moderate Carbs", "High Carbs"];
for (var i = 0; i < carbsOptions.length; i++) {
    var option = myWindow.document.createElement("option");
    option.value = carbsOptions[i];
    option.text = carbsOptions[i];
    carbsDropdown.appendChild(option);
}

// Create a Sodium dropdown
var sodiumLabel = myWindow.document.createElement("label");
sodiumLabel.for = "sodium";
sodiumLabel.innerText = "Sodium: ";
sodiumLabel.style.fontSize = "32px";
thirdRowDiv.appendChild(sodiumLabel);

var sodiumDropdown = myWindow.document.createElement("select");
sodiumDropdown.name = "sodium";
sodiumDropdown.id = "sodium";
sodiumDropdown.style.fontSize = "18px";
thirdRowDiv.appendChild(sodiumDropdown);
sodiumDropdown.style.borderRadius = "20px";
sodiumDropdown.style.padding = "5px 10px";
sodiumDropdown.style.backgroundColor = "magenta";

var sodiumOptions = ["Low Sodium", "Moderate Sodium", "High Sodium"];
for (var i = 0; i < sodiumOptions.length; i++) {
    var option = myWindow.document.createElement("option");
    option.value = sodiumOptions[i];
    option.text = sodiumOptions[i];
    sodiumDropdown.appendChild(option);
}

// Center the container div
containerDiv.style.position = "absolute";
containerDiv.style.top = "50%";
containerDiv.style.left = "50%";
containerDiv.style.transform = "translate(-50%, -50%)";

// Create a div for the search button and center it
var searchButtonDiv = myWindow.document.createElement("div");
searchButtonDiv.style.textAlign = "center";
searchButtonDiv.style.position = "absolute";
searchButtonDiv.style.bottom = "30px";
searchButtonDiv.style.left = "50%";
searchButtonDiv.style.transform = "translateX(-50%)";
myWindow.document.body.appendChild(searchButtonDiv);

// Add the search button to the div
var searchButton = myWindow.document.createElement("button");
var buttonText = myWindow.document.createTextNode("Search");
searchButton.appendChild(buttonText);
searchButtonDiv.appendChild(searchButton);

// Set the font size and padding of the search button
searchButton.style.fontSize = "24px";
searchButton.style.padding = "10px 20px";

// Add style to the search button
searchButton.style.borderRadius = "20px";
searchButton.style.padding = "10px 20px";
searchButton.style.backgroundColor = "magenta";

// Add an event listener to the search button
searchButton.addEventListener("click", function() {
    var dietDropdown = myWindow.document.getElementById("diet");
    var fatDropdown = myWindow.document.getElementById("fat");
    var sugarDropdown = myWindow.document.getElementById("sugar");
    var fiberDropdown = myWindow.document.getElementById("fiber");
    var carbsDropdown = myWindow.document.getElementById("carbs");
    var sodiumDropdown = myWindow.document.getElementById("sodium");
    var searchAlgoDropdown = myWindow.document.getElementById("searchAlgo");

    var resultWindow = window.open("", "resultWindow", "width=800, height=600");

    var results = [
        "Diet: " + dietDropdown.value,
        "Fat: " + fatDropdown.value,
        "Sugar: " + sugarDropdown.value,
        "Fiber: " + fiberDropdown.value,
        "Carbs: " + carbsDropdown.value,
        "Sodium: " + sodiumDropdown.value,
        "Search Algorithm: " + searchAlgoDropdown.value
    ];

    var resultList = resultWindow.document.createElement("ul");
    resultList.style.fontSize = "24px";
    resultList.style.fontWeight = "bold";

    for (var i = 0; i < results.length; i++) {
        var listItem = resultWindow.document.createElement("li");
        listItem.innerText = results[i];
        resultList.appendChild(listItem);
    }

    resultWindow.document.body.appendChild(resultList);
});


// Create a button for searching and position it in the bottom right corner
var otherButton = myWindow.document.createElement("button");
otherButton.innerText = "Other";
otherButton.style.position = "absolute";
otherButton.style.bottom = "20px";
otherButton.style.right = "20px";
otherButton.onclick = function() {
    // Open a new window with a search bar
    var searchWindow = window.open("", "searchWindow", "width=600, height=400");

    // Set the title of the search window
    searchWindow.document.title = "Food Search";

    // Create a search bar
    var searchBar = searchWindow.document.createElement("input");
    searchBar.type = "text";
    searchBar.id = "foodSearch";
    searchBar.placeholder = "Search for a specific food...";
    searchBar.style.fontSize = "18px";
    searchBar.style.padding = "10px";
    searchBar.style.width = "70%";
    searchBar.style.margin = "20px";

    // Append the search bar to the search window
    searchWindow.document.body.appendChild(searchBar);

    // Create a search button
    var searchBtn = searchWindow.document.createElement("button");
    searchBtn.innerText = "Search";
    searchBtn.style.fontSize = "18px";
    searchBtn.style.padding = "10px";
    searchBtn.style.margin = "20px";

    // Add an event listener to the search button
    searchBtn.addEventListener('click', function() {
        var searchTerm = searchBar.value;
        var resultWindow = window.open("", "resultWindow", "width=600, height=400");
        resultWindow.document.write("<h1>Search Query: " + searchTerm + "</h1>");
    });

    // Append the search button to the search window
    searchWindow.document.body.appendChild(searchBtn);
};
myWindow.document.body.appendChild(otherButton);

// Create a div for the search algorithm dropdown and position it in the bottom left corner
var searchAlgoDiv = document.createElement("div");
searchAlgoDiv.style.position = "absolute";
searchAlgoDiv.style.bottom = "20px";
searchAlgoDiv.style.left = "20px";
myWindow.document.body.appendChild(searchAlgoDiv);

// Create a label for the search algorithm dropdown
var searchAlgoLabel = document.createElement("label");
searchAlgoLabel.for = "searchAlgo";
searchAlgoLabel.innerText = "Search Algo: ";
searchAlgoLabel.style.fontSize = "18px";
searchAlgoDiv.appendChild(searchAlgoLabel);

// Create the search algorithm dropdown
var searchAlgoDropdown = document.createElement("select");
searchAlgoDropdown.name = "searchAlgo";
searchAlgoDropdown.id = "searchAlgo";
searchAlgoDropdown.style.fontSize = "18px";
searchAlgoDiv.appendChild(searchAlgoDropdown);

// Add options to the search algorithm dropdown
var searchAlgoOptions = ["Merge Sort", "Shell Sort"];
for (var i = 0; i < searchAlgoOptions.length; i++) {
    var option = document.createElement("option");
    option.value = searchAlgoOptions[i];
    option.text = searchAlgoOptions[i];
    searchAlgoDropdown.appendChild(option);
}

firstRowDiv.style.marginBottom = "20px";
secondRowDiv.style.marginBottom = "20px";
thirdRowDiv.style.marginBottom = "20px";

// Add a margin to the first dropdown in the first row
dietLabel.style.marginRight = "0px";
dietDropdown.style.marginRight = "40px";
firstRowDiv.style.marginLeft = "0px";

// Set the marginRight property of the sugarLabel element
sugarLabel.style.marginRight = "0px";
sugarDropdown.style.marginRight = "40px";
secondRowDiv.style.marginLeft = "0px";

// Add a margin to the first dropdown in the first row
carbsLabel.style.marginRight = "0px";
carbsDropdown.style.marginRight = "40px";
thirdRowDiv.style.marginLeft = "0px";

firstRowDiv.style.width = "600px";
firstRowDiv.style.height = "60px";
secondRowDiv.style.width = "600px";
secondRowDiv.style.height = "60px";
thirdRowDiv.style.width = "800px";
thirdRowDiv.style.height = "60px";