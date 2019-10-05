module.exports = function check(str, bracketsConfig) { 
    let str_check = str.split(''); 
    let check_result; 
    let arr_checked = [str_check[0]]; 

    for (let i = 1; i < str_check.length; i++) {  
        for (let y = 0; y < bracketsConfig.length; y++) { 
            if ((str_check[i] == bracketsConfig[y][1]) && (arr_checked[(arr_checked.length - 1)] == bracketsConfig[y][0]) ) { 
                arr_checked.pop(); 
                } else if (str_check[i] == bracketsConfig[y][0]) { 
                    arr_checked.push(str_check[i]); 
                    } else if (str_check[i] == bracketsConfig[y][1]) { 
                        arr_checked.push(str_check[i]); 
                } else {   
            } 
        }      
    }  
    if (arr_checked.length == 0) { 
        check_result = true; 
        } else { 
            check_result = false; 
        }  
    return check_result;
}
    