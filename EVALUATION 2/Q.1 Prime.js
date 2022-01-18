primeNumber(1, 200) 
function primeNumber(from, to){ 
    	var flag=false; 
    	for(i = from; i <= to; i++) 
         { 
             for( j = 2; j < i; j++) 
             { 
                 if(i % j == 0) 
                 { 
                     flag = false; 
                     break; 
                 } 
                 else 
                 { 
                     flag = true; 
                 } 
             } 
             if(flag) 
             { 
                 console.log(i); 
             } 
         } 
    } 
