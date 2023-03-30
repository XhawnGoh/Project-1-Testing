//let message ="benr"// bcm string type variable
//console.log (message)
//console.log(typeof message)

//message = 123
//console.log(message,typeof message)


//let str = "BENR"
//let num = 3523
//let course = str + num
//console.log(course,typeof course)

//let str = "1.258"
//let num = 1

//let total = parseFloat(str) + num
//console.log(total,typeof total)

//let Data1 = ["Benr", 3523, true]

//console.log(Data1[0])
//console.log(Data1[2])

//let Data2 = {
//    Name:"Goh", 
//    Age: 24, 
//    Faculty: "FKEKK"
//}

//console.log(Data2.Name)
//console.log(Data2.Age)

//当我们有array save 着我们的data user interface里面就可以用 array【0】 来show array里面的data
//所以用array会有一个问题 array 的顺序会影响 user interface show 的data
//所以 我们用object 来区分全部data 就可以用key 来分辨data exp 叫 name 就可以显示名字 不用 array[0]
//array 和 object 是相互相成的

// [{name: ,age: ,F: }{name: ,age: ,F: }{name: ,age: ,F: }]
//  第一个element of array
//                      第二个          第三个

let message =[
    {
        Name:"Goh",
        Date:"12/12/12",
        msg: "Dafuq",
        like: 666,
    },
    {
        Name:"MR goo",
        Date:"30/12/12",
        msg: "niupay",
        like: 0,
    },
    {
        Name:"khoo",
        Date:"1/1/32",
        msg: "Future",
        like: 99999999,
    }
]

console.log(message[0].msg)