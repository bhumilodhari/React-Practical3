const getDay=(type)=>{

    switch(type){
        case 'Time' : return new Date();
        case 'date' : return ("0" + new Date().getDate()).slice(-2);
        case 'month' : return  new Date().toLocaleDateString('en-US', {month: 'short'});
        case 'year' : return new Date().toLocaleDateString('en-US', {year: 'numeric'});
        case 'day' : return new Date().toLocaleDateString('en-US', {weekday: 'long'});
        default: 
        break;
    }
    return new Date().getDay();
}

export {getDay};
