const handleChangePage = (text)=>{
    page = +document.querySelector('.pagination__item.active').innerText;
    if(text == '-1'){
        if(page > 1){
            page--;
        }
    } else if(text == '+1'){
        if(page < 10){
            page++;
        }
    } else if(text=='-5'){
        if(page > 5){
            page-=5;
        } else{
            page = 1;
        }
    } 
    else if(text=='+5'){
        if(page < 5){
            page+=5;
        } else{
            page = 10;
        }
    } else{
        page = text;
    }
    document.querySelectorAll('.pagination__item').forEach((item,i)=>{
        if( i >=2 && i<=11){
            if(i-1 == page){
                console.log(item);   
                item.classList.add('active');
            } else{
                item.classList.remove('active');
            }
        }
    })
}