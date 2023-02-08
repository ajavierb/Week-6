const validAnagram = ((str1, str2)=>{
    let charFrequency1 ={};
    let charFrequency2 = {};


  str1 = str1.toLowerCase().replace(/[^a-z]/g, "");

  str2 = str2.toLowerCase().replace(/[^a-z]/g, "");

  // Iterate through each string, and add the frequency of each character
  for (let char of str1) {
    charFrequency1[char] = (charFrequency1[char] || 0) + 1;
  }
  for (let char of str2) {
    charFrequency2[char] = (charFrequency2[char] || 0) + 1;
  }

   // Compare objects for identical keys and values
   return (
    Object.keys(charFrequency1).every(
      (key) => charFrequency1[key] === charFrequency2[key]
    ) &&
    Object.keys(charFrequency2).every(
      (key) => charFrequency1[key] === charFrequency2[key]
    )
  );
    }
)




     console.log( validAnagram('rail safety', 'fairy tales') );//--> True
     console.log( validAnagram('RAIL! SAFETY!', 'fairy tales'))// --> True
     console.log(validAnagram('Hi there', 'Bye there'))// --> False