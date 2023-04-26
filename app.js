class Food {
    constructor(name, carbohydrate, cholesterol, fat, fiber, sugar) {
      this.name = name;
      this.carbohydrate = carbohydrate;
      this.cholesterol = cholesterol;
      this.fat = fat;
      this.fiber = fiber;
      this.sugar = sugar;
      this.rank = 0;
    }
  }

  let foodArr = [];
  let foodArrz = [];

let merge = (arr, left, mid, right, prop) => {
    let n1 = mid - left + 1;
    let n2 = right - mid;
  
    let X = new Array(n1);
    let Y = new Array(n2);
  
    for (let i = 0; i < n1; i++)
      X[i] = arr[left + i];
    for (let j = 0; j < n2; j++)
      Y[j] = arr[mid + 1 + j];
  
    let i = 0;
    let j = 0;
    let k = left;
    while (i < n1 && j < n2) {
      if (X[i][prop] <= Y[j][prop]) {
        arr[k] = X[i];
        i++;
      } else {
        arr[k] = Y[j];
        j++;
      }
      k++;
    }
    while (i < n1) {
      arr[k] = X[i];
      i++;
      k++;
    }
  
    while (j < n2) {
      arr[k] = Y[j];
      j++;
      k++;
    }
}
  
  let mergeSort = (arr, left, right, prop) => {
    if (left < right) {
      let mid = left + Math.floor((right - left) / 2);
  
      mergeSort(arr, left, mid, prop);
      mergeSort(arr, mid + 1, right, prop);
  
      merge(arr, left, mid, right, prop);
    }

  }
  
  let shellSort = (arr, prop) => {
    let gap = Math.floor(arr.length / 2);
	  while (gap > 0) {
		  for (let i = gap; i < arr.length; i++) {
			  for (let j = i; j >= gap; j = j - gap) {
				  if (arr[j][prop] < arr[j - gap][prop]) {
					  [arr[j], arr[j - gap]] = [arr[j - gap], arr[j]];
				  }
				  else
					  break;
			  }
		  }
	  }
	  gap = Math.floor(gap / 2);
  }
  
  async function fetchAndParseCSV(url) {
    const response = await fetch(url);
    const csvData = await response.text();
  
    Papa.parse(csvData, {
      header: true,
      complete: (results) => {
        foodArrz = results.data.map(row => new Food(
          row["Description"],
          parseFloat(row["Data.Carbohydrate"]),
          parseInt(row["Data.Cholesterol"]),
          parseFloat(row["Data.Fat.Total Lipid"]), 
          parseFloat(row["Data.Fiber"]),
          parseFloat(row["Data.Sugar Total"])
        ));
        foodArr = foodArrz.filter(food => !isNaN(food.carbohydrate));
        // shellSort(foodArr, "fiber");
        mergeSort(foodArr, 0, foodArr.length - 1, "carbohydrate");
        const ul = document.querySelector("#foodapp");
        for(let i = 0; i < foodArr.length; i++) {
          const newLI = document.createElement("li");
          const ulE = document.createElement("ul");
          const newLI1 = document.createElement("li");
          const newLI2 = document.createElement("li");
          const newLI3 = document.createElement("li");
          const newLI4 = document.createElement("li");
          const newLI5 = document.createElement("li");
          newLI.innerText = foodArr[i].name;
          newLI1.innerText = "Carbohydrates: " + foodArr[i].carbohydrate;
          newLI2.innerText = "Sugar: " + foodArr[i].sugar;
          newLI3.innerText = "Fat: " + foodArr[i].fat;
          newLI4.innerText = "Fiber: " + foodArr[i].fiber;
          newLI5.innerText = "Cholesterol: " + foodArr[i].cholesterol;
          ulE.append(newLI1);
          ulE.append(newLI2);
          ulE.append(newLI3);
          ulE.append(newLI4);
          ulE.append(newLI5);
          newLI.append(ulE);
          ul.append(newLI);
        }
      },
    });
  }
  

const clickMe = () => {
  window.location.href = "searchres.html";
}

if (window.location.pathname.includes('searchres.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    fetchAndParseCSV('food.csv');
  });
}
