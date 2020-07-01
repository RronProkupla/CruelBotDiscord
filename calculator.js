

const basicCalculations = (num1,num2,op) => {
    if(op == '+'){
        return num1+num2
    }else if(op == '-'){
        return num1 - num2
    }else if(op == '*'){
        return num1*num2
    }else if(op == '/'){
        if(num2 != 0)
            return num1/num2
        return 'Imagine that you have zero cookies, and you split them evenly among zero friends. How many cookies does each person get? See? It doesn’t make sense. And Cookie Monster is sad that there are no cookies, and you are sad that you have no friends.'
    }else if(op == '%'){
        return num1%num2
    }

}


module.exports = basicCalculations