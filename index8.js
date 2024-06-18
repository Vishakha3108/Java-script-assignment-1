/* You are given with an array of numbers and strings. Your task is to find the first string in the array . On finding the first string print "Found the first string" and its value.*/

const arr = [1 , 2, 55, 99, "Mithun" , 1235, "PW"];
for (let  i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "string") {
        console.log(`Found the first string: ${arr[i]}`);
        break;
    }
}