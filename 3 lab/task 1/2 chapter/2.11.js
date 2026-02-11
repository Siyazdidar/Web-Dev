// 1
alert( null || 2 || undefined );//2
// 2
alert( alert(1) || 2 || alert(3) );//1  2
// 3
alert( 1 && null && 2 );//null
// 4
alert( alert(1) && alert(2) );//1  undefined
// 5
alert( null || 2 && 3 || 4 );//3

