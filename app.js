class Food {
    constructor(name, carbohydrate, cholesterol, fat, fiber, sugar, protein, alpha_Carotene, beta_Carotene, beta_Cryptoxanthin, choline, lutein_And_Zeaxanthin, lycopene, niacin, retinol, riboflavin, selenium, thiamin, water, monosaturated_Fat, polysaturated_Fat, saturated_Fat, calcium, copper, iron, magnesium, phosphorus, potassium, sodium, zinc, vitaminA, vitaminB12, vitaminB6, vitaminC, vitaminE, vitaminK) {
      this.name = name;
      this.carbohydrate = carbohydrate;
      this.cholesterol = cholesterol;
      this.fat = fat;
      this.fiber = fiber;
      this.sugar = sugar;
      this.protein = protein;
		  this.alpha_Carotene = alpha_Carotene;
		  this.beta_Carotene = beta_Carotene;
		  this.beta_Cryptoxanthin = beta_Cryptoxanthin;
		  this.choline = choline;
		  this.lutein_And_Zeaxanthin = lutein_And_Zeaxanthin;
		  this.lycopene = lycopene;
		  this.niacin = niacin;
		  this.retinol = retinol;
		  this.riboflavin = riboflavin;
		  this.selenium = selenium;
		  this.thiamin = thiamin;
		  this.water = water;
		  this.monosaturated_Fat = monosaturated_Fat;
		  this.polysaturated_Fat = polysaturated_Fat;
		  this.saturated_Fat = saturated_Fat;
		  this.calcium = calcium;
		  this.copper = copper;
		  this.iron = iron;
		  this.magnesium = magnesium;
		  this.phosphorus = phosphorus;
		  this.potassium = potassium;
		  this.sodium = sodium;
		  this.zinc = zinc;
		  this.vitaminA = vitaminA;
		  this.vitaminB12 = vitaminB12;
		  this.vitaminB6 = vitaminB6;
		  this.vitaminC = vitaminC;
		  this.vitaminE = vitaminE;
		  this.vitaminK = vitaminK;
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
  

function shellSort(arr,prop)
{
    let n = arr.length;
        for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
        {
          
            for (let i = gap; i < n; i += 1)
            {
              
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
        parseFloat(row["Data.Protein"]),
        parseInt(row["Data.Alpha Carotene"]),
        parseInt(row["Data.Beta Carotene"]),
        parseInt(row["Data.Beta Cryptoxanthin"]),
        parseFloat(row["Data.Choline"]),
        parseInt(row["Data.Lutein and Zeaxanthin"]),
        parseInt(row["Data.Lycopene"]),          parseFloat(row["Data.Niacin"]),
        parseInt(row["Data.Retinol"]),
        parseFloat(row["Data.Riboflavin"]),
        parseFloat(row["Data.Selenium"]),
        parseFloat(row["Data.Thiamin"]),
        parseFloat(row["Data.Water"]),
        parseFloat(row["Data.Fat.Monosaturated Fat"]),
        parseFloat(row["Data.Fat.Polysaturated Fat"]),
        parseFloat(row["Data.Fat.Saturated Fat"]),
        parseInt(row["Data.Major Minerals.Calcium"]),
        parseFloat(row["Data.Major Minerals.Copper"]),
        parseFloat(row["Data.Major Minerals.Iron"]),
        parseInt(row["Data.Major Minerals.Magnesium"]),
        parseInt(row["Data.Major Minerals.Phosphorus"]),
        parseInt(row["Data.Major Minerals.Potassium"]),
        parseInt(row["Data.Major Minerals.Sodium"]),
        parseFloat(row["Data.Major Minerals.Zinc"]),
        parseInt(row["Data.Vitamins.Vitamin A - RAE"]),
        parseFloat(row["Data.Vitamins.Vitamin B12"]),
        parseFloat(row["Data.Vitamins.Vitamin B6"]),
        parseFloat(row["Data.Vitamins.Vitamin C"]),
        parseFloat(row["Data.Vitamins.Vitamin E"]),
        parseFloat(row["Data.Vitamins.Vitamin K"])
      ));
      foodArr = foodArrz.filter(food => !isNaN(food.carbohydrate));
      
        
      for (let i = 0; i < foodArr.length; i++) {
        const food = foodArr[i];
        const ranges = {
          carb: { low: 10, medium: 30 },
          fiber: { low: 10, medium: 30 },
          fat: { low: 10, medium: 30 },
          cholesterol: { low: 10, medium: 30 },
          sugar: { low: 10, medium: 30 },
          protein: { low: 10, medium: 30 },
        };
      
        const nutrients = ['carb', 'fiber', 'fat', 'cholesterol', 'sugar', 'protein'];
        const levels = ['Low', 'Medium', 'High'];
      
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
        
          levels.forEach((level) => {
            if (nutrientString === level) {
              const weight = 1;
        
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
        const newLI8 = document.createElement("li");
        const newLI9 = document.createElement("li");
        const newLI10 = document.createElement("li");
        const newLI11 = document.createElement("li");
        const newLI12 = document.createElement("li");
        const newLI13 = document.createElement("li");
        const newLI14 = document.createElement("li");
        const newLI15 = document.createElement("li");
        const newLI16 = document.createElement("li");
        const newLI17 = document.createElement("li");
        const newLI18 = document.createElement("li");
        const newLI19 = document.createElement("li");
        const newLI20 = document.createElement("li");
        const newLI21 = document.createElement("li");
        const newLI22 = document.createElement("li");
        const newLI23 = document.createElement("li");
        const newLI24 = document.createElement("li");
        const newLI25 = document.createElement("li");
        const newLI26 = document.createElement("li");
        const newLI27 = document.createElement("li");
        const newLI28 = document.createElement("li");
        const newLI29 = document.createElement("li");
        const newLI30 = document.createElement("li");
        const newLI31 = document.createElement("li");
        const newLI32 = document.createElement("li");
        const newLI33 = document.createElement("li");
        const newLI34 = document.createElement("li");
        const newLI35 = document.createElement("li");
        const newLI36 = document.createElement("li");
        newLI.innerText = foodArr[i].name;
        newLI1.innerText = "Carbohydrates: " + foodArr[i].carbohydrate;
        newLI2.innerText = "Sugar: " + foodArr[i].sugar;
        newLI3.innerText = "Fat: " + foodArr[i].fat;
        newLI4.innerText = "Fiber: " + foodArr[i].fiber;
        newLI5.innerText = "Cholesterol: " + foodArr[i].cholesterol;
        newLI6.innerText = "Protein: " + foodArr[i].protein;
        newLI8.innerText = "Alpha Carotene: " + foodArr[i].alpha_Carotene;
        newLI9.innerText = "Beta Carotene: " + foodArr[i].beta_Carotene;
        newLI10.innerText = "Beta Cryptoxanthin: " + foodArr[i].beta_Cryptoxanthin;
        newLI11.innerText = "Choline: " + foodArr[i].choline;
        newLI12.innerText = "Lutein & Zeaxanthin: " + foodArr[i].lutein_And_Zeaxanthin;
        newLI13.innerText = "Lycopene: " + foodArr[i].lycopene;
        newLI14.innerText = "Niacin: " + foodArr[i].niacin;
        newLI15.innerText = "Niacin: " + foodArr[i].retinol;
        newLI16.innerText = "Niacin: " + foodArr[i].riboflavin;
        newLI17.innerText = "Niacin: " + foodArr[i].selenium;
        newLI18.innerText = "Niacin: " + foodArr[i].thiamin;
        newLI19.innerText = "Niacin: " + foodArr[i].water;
        newLI20.innerText = "Monosaturated Fat: " + foodArr[i].monosaturated_Fat;
        newLI21.innerText = "Polysaturated Fat: " + foodArr[i].polysaturated_Fat;
        newLI22.innerText = "Saturated Fat: " + foodArr[i].saturated_Fat;
        newLI23.innerText = "Calcium: " + foodArr[i].calcium;
        newLI24.innerText = "Copper: " + foodArr[i].copper;
        newLI25.innerText = "Iron: " + foodArr[i].iron;
        newLI26.innerText = "Magnesium: " + foodArr[i].magnesium;
        newLI27.innerText = "Phosphorus: " + foodArr[i].phosphorus;
        newLI28.innerText = "Potassium: " + foodArr[i].potassium;
        newLI29.innerText = "Sodium: " + foodArr[i].sodium;
        newLI30.innerText = "Zinc: " + foodArr[i].zinc;
        newLI31.innerText = "Vitamin A: " + foodArr[i].vitaminA;
        newLI32.innerText = "Vitamin B12: " + foodArr[i].vitaminB12;
        newLI33.innerText = "Vitamin B6: " + foodArr[i].vitaminB6;
        newLI34.innerText = "Vitamin C: " + foodArr[i].vitaminC;
        newLI35.innerText = "Vitamin E: " + foodArr[i].vitaminE;
        newLI36.innerText = "Vitamin K: " + foodArr[i].vitaminK;
        newLI7.innerText = "Score: " + foodArr[i].rank;
        ulE.append(newLI1);
        ulE.append(newLI2);
        ulE.append(newLI3);
        ulE.append(newLI4);
        ulE.append(newLI5);
        ulE.append(newLI6);
        ulE.append(newLI8);
        ulE.append(newLI9);
        ulE.append(newLI10);
        ulE.append(newLI11);
        ulE.append(newLI12);
        ulE.append(newLI13);
        ulE.append(newLI14);
        ulE.append(newLI15);
        ulE.append(newLI16);
        ulE.append(newLI17);
        ulE.append(newLI18);
        ulE.append(newLI19);
        ulE.append(newLI20);
        ulE.append(newLI21);
        ulE.append(newLI22);
        ulE.append(newLI23);
        ulE.append(newLI24);
        ulE.append(newLI25);
        ulE.append(newLI26);
        ulE.append(newLI27);
        ulE.append(newLI28);
        ulE.append(newLI29);
        ulE.append(newLI30);
        ulE.append(newLI31);
        ulE.append(newLI32);
        ulE.append(newLI33);
        ulE.append(newLI34);
        ulE.append(newLI35);
        ulE.append(newLI36);
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
