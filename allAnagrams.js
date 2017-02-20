/**
 * Given a single input string, write a function that produces all
 * possible anagrams of a string and outputs them as an array.
 * At first, don't worry about repeated strings.  What time complexity
 * is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**

* example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 function allAnagrams(string){
  	var uniqueOutput = {};

  	(function anagram(ana, string){
  		/*
		console.log ("Inside function anagram ");
		console.log ("ana = "+ ana);
      	console.log ("string = "+ string);
  		*/
      	if(string === ''){
      		/*
	        console.log('string is empty and ana = ' + ana)
	  		console.log('Assigned Value =  ' + ana);
	        console.log('           '); */
	        uniqueOutput[ana] = 1;
  		}

  		for(var i=0; i<string.length; i++){
  			/*
	       	console.log("Inside for loop - i = "+ i) ;
	        console.log ("ana = "+ ana);
	        console.log ("string = "+ string);
	        console.log("ana+string[i] = " + ana+string[i]); 
	        console.log("string.slice(0,i) = " + string.slice(0,i));
	        console.log("string.slice(i+1) = " + string.slice(i+1));
	        console.log('Calling anagram with parameter ' +  (ana+string[i]) + ', ' + string.slice(0,i) + string.slice(i+1) + "'");
	        console.log('            '); */
  			anagram(ana+string[i], string.slice(0,i) + string.slice(i+1));
  		}
  		/*
      	console.log(' Loop over for ana = ' + ana + ' and string = ' + string);
        console.log('            ');
        */

  	})('',string)

  	return Object.keys(uniqueOutput);
  }
  
  var anagrams = allAnagrams('abcd');
  //console.log(anagrams); '