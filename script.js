

var tree = "";
for(i=1;i<=8;i++){
    tree = "";
    for(j=i;j<8;j++){
        tree += " ";
    }
    for(k=0;k<(i*2)-1;k++){
        tree += "*";
    }
    console.log(tree);
}


