export let updateDate = (date) => {
    let newsDate = new Date(date); 
    let now = new Date();
    let day = Math.ceil((now.getTime() - newsDate.getTime()) / 86400000);

    return day;
}
