let candles = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43]

function birthdayCakeCandles(candles) {
    function getTallest(candles) {
        let tallest = candles[0];
        candles.forEach((candle) => (candle >= tallest) ? tallest = candle : null)
        return tallest
    }

    let tallestCandle = getTallest(candles);
    let counter = 0;

    candles.forEach((candle) => (candle == tallestCandle) ? counter++ : 0)

    return counter
}

// console.log(birthdayCakeCandles(candles))

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(15)

function getBinarie (number) {
    let decimalNumber = number
    let binarieResult = [];
    let residuo = 0;
    while (decimalNumber > 0) {
        residuo = Math.floor(decimalNumber % 2)
        decimalNumber = Math.floor(decimalNumber / 2)
        binarieResult.push(residuo)
    }

    console.log(binarieResult)
    console.log(residuo)
}

getBinarie(37)

let number = 37
let binarie = (number.toString(2)).split("");
console.log(binarie)

console.log("##########################################")

function getOneBits(n) {
    let binaries = (n.toString(2)).split("");
    const binariesNumber = binaries.map((number) => parseInt(number, 10))
    console.log(binariesNumber)
    let counter = 0
    let positions = []
    let result = [];
    for (let i = 0; i <= binariesNumber.length; i++) {
        if (binariesNumber[i] == 1) {
            counter++
            positions.push(i + 1)
        }
    }
    result = [counter, ...positions]
    return result
}

console.log(getOneBits(37))

console.log("\n########################################")

const timestamp = [10, 20, 80, 10, 65];
const serviceId = ["svc1", "svc1", "svc1", "svc2", "svc2"];
const threshold = 30; 

function detectServiceTimeOuts(timestamp, serviceId, threshold) {
    let results = [];
    let limit = 0
    for (let i = 0; i <= timestamp.length; i++) {
        if (timestamp[i] >= threshold) {
            limit = i
            break
        }
    }
    results = [...serviceId.slice(0, limit)]

    return results
}

console.log(detectServiceTimeOuts(timestamp, serviceId, threshold))