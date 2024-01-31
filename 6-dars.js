///1//

function getLevel2(n) {
    const result = [];
    let value = 2;
    for (let i = 0; i < n; i++) {
      result.push(value);
      value *= 2;
    }
    return result;
  }
  
  const output = getLevel2(5);
  console.log(output);  
  
  //2//
  
  function genArray(n, A, B) {
    const arr = [A, B];
  
    for (let i = 2; i < n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  
    return arr;
  }
  
  const n = 5;
  const A = 2;
  const B = 3;
  const result = genArray(n, A, B);
  console.log(result); 
  
  //3///
  
  function reverseArray(arr) {
    return arr.reverse();
  }
  
  const inputArray = [1, 2, 3, 4, 5];
  const reversedArray = reverseArray(inputArray);
  console.log(reversedArray); 
  
  
  //4//
  function extractOddIndex(arr) {
    const oddElements = [];
    for (let i = 1; i < arr.length; i += 2) {
      if (arr[i] % 2 !== 0) {
        oddElements.push(arr[i]);
      }
    }
    return oddElements;
  }
  
  const inputArray = [4, 9, 7, 8, 6, 5];
  const result = extractOddIndex(inputArray);
  console.log(result); 
  
  
  //5//
  
  function sortEvenOdd(arr) {
    const evenNum = [];
    const oddNum = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenNum.push(arr[i]);
      } else {
        oddNum.unshift(arr[i]);
      }
    }
  
    return evenNum.concat(oddNumbers);
  }
  
  const inputArray = [4, 5, 7, 8, 6, 9];
  const result = sortEvenOdd(inputArray);
  
  console.log(result); 
  
  //6//
  
  function selectEl(arr) {
    const selectedEl = [];
    for (let i = 0; i < arr.length; i += 2) {
      selectedEl.push(arr[i]);
    }
    return selectedEl;
  }
  
  const inputArray = [4, 5, 7, 8, 6, 9];
  const result = selectEl(inputArray);
  
  console.log(result); 
  
  //7//
  
   let myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   let arrReverse = myarr.reverse();
   function IndexOdd(arrReverse) {
    for (let i = 0; i < arrReverse.length; i += 2) {
    console.log(myarr[i]);
    }
    return;
   }
  
   IndexOdd(arrReverse);
  
  // 8//
  
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  
    function myIndex(arr) {
   for (let i = 0; i < arr.length; i++) {
     if (i % 2 == 0) {
     console.log(`Juft-indekslar: ${i}, Number: ${arr[i]}`);
     }
    }
    for (let i = 0; i < arr.length; i++) {
  if (i % 2 != 0) {
     console.log(`Toq indekslar: ${i}, Number: ${arr[i]}`);
    }
   }
   return;
  }
  
  myIndex(arr);
  
  // 9 //
  
  let arr = [1, 2, 3, 4, 5];
   function elementsofIndex(arr) {
    for (let i = 1; i < arr.length; i += 2 ) {
     console.log(arr[i]);
   }
    let arrReverse = arr.reverse()
    for (let i = 0; i < arrReverse.length; i += 2 ) {
     console.log(arr[i]);
    }
    return;
   }
  
   elementsofIndex(arr);
  
  //10//
  let inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
  function ArrayOrder(arr) {
    const Order = [];
    const n = arr.length;
  
    for (let i = 0; i <= n / 2; i++) {
      Order.push(arr[i]);
      if (i !== n - 1 - i) {
        Order.push(arr[n - 1 - i]);
      }
    }
  
    return Order;
  }
  
  const result = ArrayOrder(inputArray);
  
  console.log(result); 
  
  
  //11//
  
  let arr = [1, 2, 3, 4, 5, 6];
  let K = 2;
  let L = 5;
  
  function rangeOutSum(arr, K, L) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (i < K || i >= L) {
        sum += arr[i];
      }
    }
  
    return sum;
  }
  
  const totalSum = rangeOutSum(arr, K, L);
  console.log(totalSum); 
  
  
  ///12//
  let inputArray = [10, false, "", "Abdulaziz", null];
  
  let result = TruthyFalsy(inputArray);
  
  function TruthyFalsy(arr) {
    const truthyArray = [];
    const falsyArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        truthyArray.push(arr[i]);
      } else {
        falsyArray.push(arr[i]);
      }
    }
  
    return { truthy: truthyArray, falsy: falsyArray };
  }
  
  console.log("Truthy:", result.truthy); 
  console.log("Falsy:", result.falsy); 
  
  //13//
  let arr = [5, 2, 9, 1, 7, 3, 8, 4, 6];
  let result = getOddMin(arr);
  function getOddMin(arr) {
    if (arr.length === 0) {
        return "Arrayimiz bo'sh ekan";
    }
  
    let minValue = arr[0];
  
    for (let i = 2; i < arr.length; i += 2) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }
  
    return minValue;
  }
  
  
  console.log("Juft indeksli sonlar ichidan eng kichigi:", result);
  
  //14//
  let arr = [5, 2, 9, 1, 7, 3, 8, 4, 6];
  let result = getEvenMax(arr);
  function getEvenMax(arr) {
    if (arr.length === 0) {
        return "Arrayimiz bo'sh";
    }
  
    let maxValue = arr[1];
  
    for (let i = 3; i < arr.length; i += 2) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
  
    return maxValue;
  }
  console.log("Toq indeksli eng katta son:", result);
  
  
  //15//
  let arr = [1, 3, 7, 1, 2, 6, 4, 8, 9];
  let result = lastLocalMaxIndex(arr);
  function LokalMaxIndex(arr) {
    if (arr.length < 3) {
        return "Kamida uchta element kiriting";
    }
  
    let LokalMaxIndex = -1;
  
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            LokalMaxIndex = i;
        }
    }
  
    return LokalMaxIndex;
  }
  
  
  
  if (result !== -1) {
    console.log("Lokal maksimumning indeksi", result);
  } else {
    console.log("Lokal maksimum yo'q");
  }
  //16//
  
  function engyaqin(arr, R) {
    if (arr.length === 0) {
        return "Array bo'sh";
    }
  
    let closestNumber = arr[0];
    let minfarq = Math.abs(arr[0] - R);
  
    for (let i = 1; i < arr.length; i++) {
        let farq = Math.abs(arr[i] - R);
  
        if (farq < minfarq) {
            closestNumber = arr[i];
            minfarq = farq;
        }
    }
  
    return closestNumber;
  }
  
  let arr = [1, 3, 7, 12, 15, 18, 21];
  let R = 14;
  let result = engyaqin(arr, R);
  console.log( R,"ga eng yaqin son bu:", result);
  
  //17//
  
  function Array(arr) {
    if (arr.length < 2) {
        return "Arrayda kamida ikkita element bo'lsin";
    }
  
    let maxSum = arr[0] + arr[1];
    let maxQoshni = [arr[0], arr[1]];
  
    for (let i = 1; i < arr.length - 1; i++) {
        let currentSum = arr[i] + arr[i + 1];
  
        if (currentSum > maxSum) {
            maxSum = currentSum;
            maxQoshni = [arr[i], arr[i + 1]];
        }
    }
  
    return maxQoshni;
  }
  
  let arr = [1, 3, 7, 12, 15, 18, 21];
  let result = Array(arr);
  console.log("Javob:", result);
  
  
  //18//
  
  function myArray(D) {
       for (let i = 0; i < D.length; i++) {
            for (let j = 0; j < D.length; j++) {
              if ( D[i] == D[j] && i != j ) {
                    console.log(`${i} ----- ${D[i]}`);
               }            
           }        
       }
     }
     myArray([1,2,4,5,3,6,7,8,9,2,3])
  
  //19//
  
  
  
  //20//
  let arr = [1, 3, 7, 12, 15, 18, 7, 21, 8];
  let result = EvenElements(arr);
  function EvenElements(arr) {
    if (arr.length === 0) {
        return "Array bo'sh";
    }
  
    let evenArray = [];
  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArray.push(arr[i]);
        }
    }
  
    return evenArray;
  }
  console.log("Javob:", result);
  
  //21//
  let arr = [1, 3, 7, 12, 15, 18, 7, 21];
  let k = 5;
  function Kqiymatgaoshir(arr, k) {
  for (let i = 0; i < arr.length; i++) {
        arr[i] += k;
    }
  }
  
  
  console.log( k," qiymatga oshirilgach natija:" , arr);
  
  // 22//
  
  function half(d,a) {
      let array = []
      let array1 = []
    for (let i = 0; i < d.length; i++) {
           if (i < 5){
             array.push(d[i])
         }
        else{
             array1.push(d[i])
        }
      }        
      console.log(array1.concat(array));
   }
   half([1,2,4,5,3,6,7,8,9,2])
  
  
  // 24 //
  
   function array(d) {
      let min = d[0]
      let max = d[0]
     for (let i = 0; i < d.length; i++) {
         if (max < d[i]) {
            max = i
           }
           if (min > d[i]) {
              min = i
         }
     }    
      console.log(d.fill(0,min,max));
   }
  
   array([1,2,4,5,3,4,5,7,4,3])
  
  ///27///
  let exampleArray = [1, 2, 3, 4, 5, 6, 7];
  let k = 2;
  let m = 4;
  function deleteElements(arr, k, m) {
    arr.splice(k, m - k + 1); 
    return {
      length: arr.length,
      resultArray: arr
    };
  }
  
  const result = deleteElements(exampleArray, k, m);
  console.log("Array uzunligi:", result.length); 
  console.log( result.resultArray); 
  
  
  ///28///
  let exampleArray = [1, 2, 2, 3, 4, 4, 5];
  let result = deleteEl(exampleArray);
  function deleteEl(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i, 1); 
        return arr; 
      }
    }
    return arr; 
  }
  
  console.log( result); 
  
  //29//
  let inputArray = [1, 5, 6, 1, 5, 7, 2];
  let output = getElementsOneTime(inputArray);
  function getElementsOneTime(arr) {
    const elCount = {}; 
    const oneTimeElements = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (elCount[arr[i]]) {
        elCount[arr[i]]++;
      } else {
        elCount[arr[i]] = 1;
      }
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (elCount[arr[i]] === 1) {
        oneTimeElements.push(arr[i]);
      }
    }
  
    return oneTimeElements;
  }
  
  
  console.log("Bir martalik elementlar:", output); 
   
  
  ///30///
  let inputArray = [3, 5, 2, 8, 5, 7, 2];
  let k = 5;
  let output = searchAllElements(inputArray, k);
  function searchAllElements(arr, k) {
    const index = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === k) {
        index.push(i); 
      }
    }
    return index;
  }
  
  
  console.log( output);
  
  