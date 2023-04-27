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
  let sortString = localStorage.getItem('sortString');
  let timeTaken = 0;
  

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
      if (X[i][prop] >= Y[j][prop]) {
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
  

let shellSort = (arr,prop) => {
  let n = arr.length;
    for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
      for (let i = gap; i < n; i += 1) {
          let temp = arr[i][prop];
          let j;
          for (j = i; j >= gap && arr[j - gap][prop] < temp; j -= gap) {
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
      


      const ranges = {
        carb: { low: 15, medium: 30 },
        fiber: { low: 2, medium: 6 },
        fat: { low: 5, medium: 15 },
        cholesterol: { low: 5, medium: 20 },
        sugar: { low: 5, medium: 15 },
        protein: { low: 5, medium: 25 },
      };
      const nutrients = ['carb', 'fiber', 'fat', 'cholesterol', 'sugar', 'protein'];
      const levels = ['Low', 'Medium', 'High'];
      
      for (let i = 0; i < foodArr.length; i++) {
        const food = foodArr[i];
      
        nutrients.forEach((nutrient) => {
          const nutrientString = eval(`${nutrient}String`);
          let nutrientVal;
        
        
          if (nutrient === 'carb') {
            nutrientVal = food.carbohydrate;
          } else if (nutrient === 'fiber') {
            nutrientVal = food.fiber;
          } else if (nutrient === 'fat') {
            nutrientVal = food.fat;
          } else if (nutrient === 'cholesterol') {
            nutrientVal = food.cholesterol;
          } else if (nutrient === 'sugar') {
            nutrientVal = food.sugar;
          } else if (nutrient === 'protein') {
            nutrientVal = food.protein;
          }
        
          const lowRange = ranges[nutrient].low;
          const mediumRange = ranges[nutrient].medium;
          const isLow = nutrientVal <= lowRange;
          const isMedium = nutrientVal > lowRange && nutrientVal <= mediumRange;
          const weight = 1;
          levels.forEach((level) => {
            alert(nutrientString);
            if (nutrientString === level) {
              if (level === 'Low') {
                const distanceFromLow = (nutrientVal - lowRange) * 0.1;
                const reducedValue = Math.min(distanceFromLow, 1);
                food.rank += isLow ? 1 : (1 - reducedValue) * weight;
              } else if (level === 'Medium') {
                const distanceFromMiddle = Math.abs(nutrientVal - (lowRange + mediumRange) / 2) * 0.1;
                const reducedValue = Math.min(distanceFromMiddle, 1);
                food.rank += isMedium ? 1 : (1 - reducedValue) * weight;
              } else if (level === 'High') {
                const distanceFromHigh = (mediumRange - nutrientVal) * 0.1;
                const reducedValue = Math.min(distanceFromHigh, 1);
                food.rank += (nutrientVal > mediumRange) ? 1 : (1 - reducedValue) * weight;
            }
            
            }
          });
        });
        
      }
        
      

      if (sortString == "Merge") {
        const startTime = performance.now();
        mergeSort(foodArr, 0, foodArr.length - 1, "rank");
        const endTime = performance.now();
        timeTaken = (endTime - startTime).toFixed(4);
        document.querySelector("#timeTaken").innerText = `Time taken for ${sortString} sort: ${timeTaken} ms`;
      } else {
        const startTime = performance.now();
        shellSort(foodArr, "rank");
        const endTime = performance.now();
        timeTaken = (endTime - startTime).toFixed(4);
        document.querySelector("#timeTaken").innerText = `Time taken for ${sortString} sort: ${timeTaken} ms`;
      }
      



      const ul = document.querySelector("#foodapp");
      for(let i = 0; i < 500; i++) {
        const newLI = document.createElement("li");
        const ulE = document.createElement("ul");
        const newLI1 = document.createElement("li");
        const newLI2 = document.createElement("li");
        const newLI3 = document.createElement("li");
        const newLI4 = document.createElement("li");
        const newLI5 = document.createElement("li");
        const newLI6 = document.createElement("li");
        const newLI7 = document.createElement("li");
        newLI.innerText = foodArr[i].name;
        newLI1.innerText = "Carbohydrates: " + foodArr[i].carbohydrate;
        newLI2.innerText = "Sugar: " + foodArr[i].sugar;
        newLI3.innerText = "Fat: " + foodArr[i].fat;
        newLI4.innerText = "Fiber: " + foodArr[i].fiber;
        newLI5.innerText = "Cholesterol: " + foodArr[i].cholesterol;
        newLI6.innerText = "Protein: " + foodArr[i].protein;
        newLI7.innerText = "Score: " + foodArr[i].rank;
        ulE.append(newLI1);
        ulE.append(newLI2);
        ulE.append(newLI3);
        ulE.append(newLI4);
        ulE.append(newLI5);
        ulE.append(newLI6);
        ulE.append(newLI7);
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
    let sortOption = document.querySelector(".sort-select");
    sortString = sortOption.options[sortOption.selectedIndex].text;
    
    localStorage.setItem('carbString', carbString);
    localStorage.setItem('fatString', fatString);
    localStorage.setItem('cholesterolString', cholesterolString);
    localStorage.setItem('fiberString', fiberString);
    localStorage.setItem('sugarString', sugarString);
    localStorage.setItem('proteinString', proteinString);
    localStorage.setItem('sortString', sortString);
    window.location.href = "searchres.html";
  }
  

  const clickMe2 = () => {
    window.location.href = "index.html";
  }

if(window.location.pathname.includes('searchres.html')) {
  document.addEventListener('DOMContentLoaded', () => {
  fetchAndParseCSV('food.csv');
  });
}