
// Question : 1

var studentName = []
console.log(studentName)

// Question : 2

var studentName = {}
console.log(studentName)

// Question : 3

var str =["Muhammad"]
console.log(str)

// Question : 4

var num = [17]
console.log(num)

// Question : 5

var bool = [true]
console.log(bool)

// Question : 6

var mixed =["Muhammad" , 17 , true ]
console.log(mixed)
    
// Question : 7

var mobileNetworks = ["Jazz","Zong","Ufone","Telenor","SCOM"]
console.log(mobileNetworks)
    
// Question : 8

var qulification = ["SSC","HSC","BCS","BS","BCOM","MS","M.phil","PhD"]
console.log(qulification)

// Question : 9

var movie = []
movie.push("Age Of Ultron")
movie.push("Spectre")
movie.push("Jurassic World")
movie.push("Inside Out")
console.log(movie)
console.log(movie.length)

// Question : 10

var cars = ["Audi","Volvo","Ford","Lamborghini"]
console.log(cars)
console.log(cars[0])
console.log(cars[3])

// Question : 11

var student= ["Michel","Johan","Tony"]
var studentMarks = [323,230,480]
var total = 500;

var per1 = (studentMarks[0]/total)*100;
var per2 = (studentMarks[1]/total)*100;
var per3 = (studentMarks[2]/total)*100;

console.log("Score of "+ student[0] + " is "+ studentMarks[0]+" Percentage :" + per1)
console.log("Score of "+ student[1] + " is "+ studentMarks[1]+" Percentage :" + per1)
console.log("Score of "+ student[2] + " is "+ studentMarks[2]+" Percentage :" + per1)

// Question : 12
// Question : 12(a)
var color = ["red","green","blue","yellow"]
var user = prompt("Add that color at the start of the array.")
color.unshift(user)
console.log(color)
// Question : 12(b)
var user = prompt("Add that color at the end of the array.")
color.push(user)
console.log(color)
// Question : 12(c)
color.unshift("purple",'orange')
console.log(color)
// Question : 12(d)
color.shift()
console.log(color)
// Question : 12(e)
color.pop()
console.log(color)
// Question : 12(f)
var user = prompt("At which index do you want to add a color?");
var newColor = prompt("Which color do you want to add?");
color.splice(user, 0, newColor);
console.log(color);
// Question : 12(g)
var user = prompt("At which index do you want to delete color(s)?")
var userdel = prompt("How many colors do you want to delete?")
color.splice(user,userdel)
console.log(color);
// Question : 13

var score = [320, 230,480,120]
score.sort()
console.log(score)

// Question : 14

var fruits = ["strawberry", "apple", "orange", "banana"]; 
console.log("Fruits List")
console.log(fruits)
console.log("Oder Fruits List")
fruits.sort()
console.log(fruits)

// Question : 15

var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshwar"]
var selectCities =[cities[0],cities[2],cities[4]]

console.log("Cities List")
console.log(cities)
console.log("Selected Cities List")
console.log(selectCities)

// Question : 17

var devices = []
devices.push("keyboard")
devices.push('mouse')
devices.push("monitor")
devices.push('printer')
console.log("Devices :")
console.log(devices)
devices.shift(0)
devices.shift(1)
devices.shift(2)
console.log(devices)

// Question : 18

var devices = []
devices.push("keyboard")
devices.push('mouse')
devices.push("monitor")
devices.push('printer')
console.log("Devices :")
console.log(devices)
devices.pop(0)
devices.pop(1)
devices.pop(2)
console.log(devices)

// Question : 19

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony"];

document.write("<select>")

document.write("<option>" + manufacturers[0] + "</option>");
document.write("<option>" + manufacturers[1] + "</option>");
document.write("<option>" + manufacturers[2] + "</option>");
document.write("<option>" + manufacturers[3] + "</option>");
document.write("<option>" + manufacturers[4] + "</option>");

document.write("</select>");

// Question : 20

var empty = [
    [

    ]
]
console.log(empty)

// Question : 21

var multidimensional =[
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1],
]
console.log(multidimensional)