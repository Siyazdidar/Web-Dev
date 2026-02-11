//1
let i = 3;

while (i) {
  alert( i-- );
}//3   2   1


//2
i = 0;
while (++i < 5) alert( i );//1 2 3 4 

i = 0;
while (i++ < 5) alert( i );//1 2 3 4 5

//3
for (let i = 0; i < 5; i++) alert( i );//0 1 2 3 4 

for (let i = 0; i < 5; ++i) alert( i );//0 1 2 3 4

