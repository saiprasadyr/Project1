function updateTime() {
    const now = new Date();
    const time = now.toDateLocalTimeString();
    document.getElementById("time").textContent = '${time}';

    const day = now.toLocaleString('en-US',{weekday:'long'});
    const date = now.getDate();
    const month = now.toLocaleString('en-US',{month:'long'});

    document.getElementById("date").textContent = '${day},${date},${month}';
}
updateTime(); //initial call to update time
setInterval(updateTime,1000);  //call updateTime every second