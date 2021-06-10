// Your code here
const Calculator = {
    add: function(a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b
    },
    multiply: function(a, b) {
        return a * b
    },
    divide: function(a, b) {
        return a / b
    }
}

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair = '*') {
    return function(string = 'special') {
        return `You are ${flair}${string}${flair}!`
    }
}

function actionApplyer(int, arr) {
    if (arr === []) {
        return int
    } else {
        for (let i = 0; i < arr.length; i++) {
            int = arr[i](int)
        }
        return int
    }
}