const Time = new Date();
const date = ("0" + new Date().getDate()).slice(-2);
const month = new Date().toLocaleDateString('en-US', {month: 'short'});
const year = new Date().toLocaleDateString('en-US', {year: 'numeric'});
const day = new Date().toLocaleDateString('en-US', {weekday: 'long'});

const getDay=()=>{
    return new Date().getDay();
}

export {Time ,date , month , year, day , getDay};
