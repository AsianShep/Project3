class Food {
    constructor(name, carbohydrate, cholesterol, fat, fiber, sugar, protein) {
      this.name = name;
      this.carbohydrate = carbohydrate;
      this.cholesterol = cholesterol;
      this.fat = fat;
      this.fiber = fiber;
      this.sugar = sugar;
      this.protein = protein;
      this.rank = 0;
    }
  }

  let foodArr = [];
  let foodArrz = [];


  let carbString = localStorage.getItem('carbString');
  let fatString = localStorage.getItem('fatString');
  let cholesterolString = localStorage.getItem('cholesterolString');
  let fiberString = localStorage.getItem('fiberString');
  let sugarString = localStorage.getItem('sugarString');
  let proteinString = localStorage.getItem('proteinString');
  

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
  
  /*let shellSort = (arr, prop) => {
    let gap = Math.floor(arr.length / 2);
	  while (gap > 0) {
		  for (let i = gap; i < arr.length; i +=1) {
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
  }*/
function shellSort(arr,prop)
{
    let n = arr.length;
        for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
        {
          
            for (let i = gap; i < n; i += 1)
            {
              
                let temp = arr[i][prop];
                let j;
                for (j = i; j >= gap && arr[j - gap][prop] > temp; j -= gap) {
                    [arr[j], arr[j - gap]] = [arr[j - gap], arr[j]];
                  }
            }
        }
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
          parseFloat(row["Data.Sugar Total"]),
          parseFloat(row["Data.Protein"])
        ));
        foodArr = foodArrz.filter(food => !isNaN(food.carbohydrate));
        
        
          
        for (let i = 0; i < foodArr.length; i++) {
          function calculateScore(value, lowRange, mediumRange, level, isHigh) {
            if (level === 'Low') {
              return value <= lowRange ? 1 : 1 - Math.min((value - lowRange) * 0.1, 1);
            } else if (level === 'Medium') {
              if (value <= lowRange) {
                return 1 - Math.min((lowRange - value) * 0.1, 1);
              } else if (value <= mediumRange) {
                return 1;
              } else {
                return 1 - Math.min((value - mediumRange) * 0.1, 1);
              }
            } else { // High
              const score = value > mediumRange ? 1 : 1 - Math.min((mediumRange - value) * 0.1, 1);
              return isHigh ? score * 5 : score;
            }
          }
          
          for (let i = 0; i < foodArr.length; i++) {
            const food = foodArr[i];
            const ranges = {
              carb: { low: 10, medium: 30 },
              fiber: { low: 5, medium: 10 },
              fat: { low: 10, medium: 30 },
              cholesterol: { low: 100, medium: 200 },
              sugar: { low: 10, medium: 30 },
              protein: { low: 10, medium: 30 },
            };
          
            const nutrients = ['carb', 'fiber', 'fat', 'cholesterol', 'sugar', 'protein'];
          
            let score = 0;
            nutrients.forEach((nutrient) => {
              const nutrientString = eval(`${nutrient}String`);
              const nutrientVal = food[nutrient];
              const lowRange = ranges[nutrient].low;
              const mediumRange = ranges[nutrient].medium;
              const isHigh = nutrientString === 'High';
          
              score += calculateScore(nutrientVal, lowRange, mediumRange, nutrientString, isHigh);
            });
          
            food.rank = score;
          }
                   
        }
        
          
        


        // shellSort(foodArr, "fiber");
        mergeSort(foodArr, 0, foodArr.length - 1, "rank");
        const ul = document.querySelector("#foodapp");
        for(let i = 0; i < 300; i++) {
          const newLI = document.createElement("li");
          const ulE = document.createElement("ul");
          const newLI1 = document.createElement("li");
          const newLI2 = document.createElement("li");
          const newLI3 = document.createElement("li");
          const newLI4 = document.createElement("li");
          const newLI5 = document.createElement("li");
          const newLI6 = document.createElement("li");
          newLI.innerText = foodArr[i].name;
          newLI1.innerText = "Carbohydrates: " + foodArr[i].carbohydrate;
          newLI2.innerText = "Sugar: " + foodArr[i].sugar;
          newLI3.innerText = "Fat: " + foodArr[i].fat;
          newLI4.innerText = "Fiber: " + foodArr[i].fiber;
          newLI5.innerText = "Cholesterol: " + foodArr[i].cholesterol;
          newLI6.innerText = "Protein: " + foodArr[i].protein;
          ulE.append(newLI1);
          ulE.append(newLI2);
          ulE.append(newLI3);
          ulE.append(newLI4);
          ulE.append(newLI5);
          ulE.append(newLI6);
          newLI.append(ulE);
          ul.append(newLI);
        }
      },
    });
  }
  

  const clickMe = () => {
    let carbOption = document.querySelector(".carb-select");
    carbString = carbOption.options[carbOption.selectedIndex].text;
    let fatOption = document.querySelector(".fat-select");
    fatString = fatOption.options[fatOption.selectedIndex].text;
    let cholOption = document.querySelector(".cholesterol-select");
    cholesterolString = cholOption.options[cholOption.selectedIndex].text;
    let fiberOption = document.querySelector(".fiber-select");
    fiberString = fiberOption.options[fiberOption.selectedIndex].text;
    let sugarOption = document.querySelector(".sugar-select");
    sugarString = sugarOption.options[sugarOption.selectedIndex].text;
    let proteinOption = document.querySelector(".protein-select");
    proteinString = proteinOption.options[proteinOption.selectedIndex].text;
  
    localStorage.setItem('carbString', carbString);
    localStorage.setItem('fatString', fatString);
    localStorage.setItem('cholesterolString', cholesterolString);
    localStorage.setItem('fiberString', fiberString);
    localStorage.setItem('sugarString', sugarString);
    localStorage.setItem('proteinString', proteinString);
  
    window.location.href = "searchres.html";
  }
  

if (window.location.pathname.includes('searchres.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    fetchAndParseCSV('food.csv');
  });
}
