var num=1;

while(num<=10)
    {
console.log(num);
num=num+1;
    }

    console.log("completed");

    console.log("Print all the numbers in array using for each loop");
var arr1 = [4, 7, 12, 10, 15, 20];

for (var num of arr1) {
    console.log(num);
}

console.log("Print all the numbers in array normal for loop");
for (var index = 0; index < arr1.length; index++) {

    console.log(arr1[index]);
}
