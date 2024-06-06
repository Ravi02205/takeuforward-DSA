let n=5;
const output= document.querySelector('#output');
const last= document.querySelector('#last');
let str='';
str+="<br/><span id='pat'> Pattern No : "+1+"</span><br/> ";

for(let i=0;i<n;i++){
  for(let j=0;j<n;j++){ 
    str+="*";
  }
  str+=" <br/> ";
}

str+="<br/><span id='pat'> Pattern No : "+2+"</span><br/> ";
 
for(let i=0;i<n;i++){
  for(let j=0;j<i+1;j++){
    str+="*";
  }
  str+=" <br/> ";
}

str+="<br/><span id='pat'> Pattern No : "+3+"</span><br/> ";

for(let i=0;i<n;i++){
  for(let j=0;j<i+1;j++){
    str+=j+1;
  }
  str+=" <br/> ";
}

str+="<br/><span id='pat'> Pattern No : "+4+"</span><br/> ";

for(let i=0;i<n;i++){
  for(let j=0;j<i+1;j++){
    str+=i+1;
  }
  str+=" <br/> ";
}

str+="<br/><span id='pat'> Pattern No : "+5+"</span><br/> ";

for(let i=0;i<n;i++){
  for(let j=i;j<n;j++){
    str+="*";
  }
  str+=" <br/> ";
}

str+="<br/><span id='pat'> Pattern No : "+6+"</span><br/> ";

for(let i=0;i<n;i++){
  for(let j=i;j<n;j++){
    str+=j-i+1;
  }
  str+=" <br/> ";
}

str+="<br/><span id='pat'> Pattern No : "+7+"</span><br/> ";

for(let i=0;i<n;i++){
  for(let j=0;j<n-i;j++){
    str+="^";
  }
  for(let j=0;j<i+1;j++){
    str+="*";
  }
  for(let j=0;j<i;j++){
    str+="*";
  }
  str+=" <br/> ";
}

str+="<br/><span id='pat'> Pattern No : "+8+"</span><br/> ";

for(let i=0;i<n;i++){
  for(let j=0;j<i;j++){
    str+="^";
  }
  for(let j=0;j<n-i-1;j++){
    str+="*";
  }
  for(let j=0;j<n-i;j++){
    str+="*";
  }
  str+=" <br/> ";
}

str+="<br/><span id='pat'> Pattern No : "+9+"</span><br/> ";

for(let i=0;i<n;i++){
  for(let j=0;j<n-i-1;j++){
    str+="^";
  }
  for(let j=0;j<i+1;j++){
    str+="*";
  }
  for(let j=0;j<i;j++){
    str+="*";
  }
  str+=" <br/> ";
}
for(let i=0;i<n;i++){
  for(let j=0;j<i;j++){
    str+="^";
  }
  for(let j=0;j<n-i-1;j++){
    str+="*";
  }
  for(let j=0;j<n-i;j++){
    str+="*";
  }
  str+=" <br/> ";
}

str+="<br/><span id='pat'> Pattern No : "+10+"</span><br/> ";

for(let i=0;i<n;i++){
  for(let j=0;j<i+1;j++){
    str+="*";
  }
  str+=" <br/> ";
}
for(let i=0;i<n-1;i++){
  for(let j=0;j<n-i-1;j++){
    str+="*";
  }
  str+=" <br/> ";
}

str+="<br/><span id='pat'> Pattern No : "+11+"</span><br/> ";

for(let i=0;i<n;i++){
  for(let j=0;j<i+1;j++){
    str+=((i+j)%2)?"0 ":"1 ";
  }
  str+=" <br/> ";
}

str+="<br/><span id='pat'> Pattern No : "+12+"</span><br/> ";

for(let i=0;i<n;i++){
  for(let j=0;j<i+1;j++){
    str+=j+1;
  }
  for(let j=0;j<n-i-1;j++){
    str+="^";
  }
  for(let j=0;j<n-i-1;j++){
    str+="^";
  }
   for(let j=i+1;j>0;j--){
    str+=j;
  }
  str+=" <br/> ";
}

str+="<br/><span id='pat'> Pattern No : "+13+"</span><br/> ";
let c=1;
for(let i=0;i<n;i++){
  for(let j=0;j<i+1;j++){
    str+=c+" ";
    c++;
  }
  str+=" <br/> ";
}
str+="<br/><span id='pat'> Pattern No : "+14+"</span><br/> ";
for(let i=0;i<n;i++){
  for(let j=0;j<i+1;j++){
    str+=String.fromCharCode(65+j);
  }
  str+=" <br/> ";
}
str+="<br/><span id='pat'> Pattern No : "+15+"</span><br/> ";
for(let i=0;i<n;i++){
  for(let j=0;j<n-i;j++){
    str+=String.fromCharCode(65+j);
    c++;
  }
  str+=" <br/> ";
}
str+="<br/><span id='pat'> Pattern No : "+16+"</span><br/> ";
for(let i=0;i<n;i++){
    for(let j=0;j<i+1;j++){
      str+=String.fromCharCode(65+i);
      c++;
    }
    str+=" <br/> ";
  }

str+="<br/><span id='pat'> Pattern No : "+17+"</span><br/> ";

for(let i=0;i<n;i++){
  for(let j=0;j<n-i-1;j++){
    str+="^";
  }
  for(let j=0;j<i+1;j++){
    str+=String.fromCharCode(65+j);
  }
  for(let j=i;j>0;j--){
    str+=String.fromCharCode(65+j-1);
  }
  str+=" <br/> ";
}


str+="<br/><span id='pat'> Pattern No : "+18+"</span><br/> ";

for(let i=0;i<n;i++){
  for(let j=i+1;j>0;j--){
    str+=String.fromCharCode(65+n-j);
  }
  str+=" <br/> ";
}

str+="<br/><span id='pat'> Pattern No : "+19+"</span><br/> ";

for(let i=0;i<n;i++){
  for(let j=n;j>i;j--){
    str+="*";
  }
  for(let j=0;j<i;j++){
    str+="^";
  }
  for(let j=0;j<i;j++){
    str+="^";
  }
  for(let j=n;j>i;j--){
    str+="*";
  }
  str+=" <br/> ";
}
for(let i=n-1;i>=0;i--){
    for(let j=n;j>i;j--){
      str+="*";
    }
    for(let j=0;j<i;j++){
      str+="^";
    }
    for(let j=0;j<i;j++){
      str+="^";
    }
    for(let j=n;j>i;j--){
      str+="*";
    }
    str+=" <br/> ";
}


str+="<br/><span id='pat'> Pattern No : "+20+"</span><br/> ";

for(let i=n-1;i>=0;i--){
    for(let j=n;j>i;j--){
      str+="*";
    }
    for(let j=0;j<i;j++){
      str+="^";
    }
    for(let j=0;j<i;j++){
      str+="^";
    }
    for(let j=n;j>i;j--){
      str+="*";
    }
    str+=" <br/> ";
}
for(let i=1;i<n;i++){
    for(let j=n;j>i;j--){
      str+="*";
    }
    for(let j=0;j<i;j++){
      str+="^";
    }
    for(let j=0;j<i;j++){
      str+="^";
    }
    for(let j=n;j>i;j--){
      str+="*";
    }
    str+=" <br/> ";
  }

str+="<br/><span id='pat'> Pattern No : "+21+"</span><br/> ";

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        str+=(i==0 || j==0 || i==n-1 || j==n-1)?"*":"^";
    }
    str+=" <br/> "; 
}

str+="<br/><span id='pat'> Pattern No : "+22+"</span><br/> ";

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        str+=n-Math.min(i,j);
    }
    for(let j=n-2;j>=0;j--){
        str+=n-Math.min(i,j);
    }
    str+=" <br/> "; 
}
for(let i=n-2;i>=0;i--){
    for(let j=0;j<n;j++){
        str+=n-Math.min(i,j);
    }
    for(let j=n-2;j>=0;j--){
        str+=n-Math.min(i,j);
    }
    str+=" <br/> "; 
}

output.innerHTML=str;
last.scrollIntoView({});