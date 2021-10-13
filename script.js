const msg = (count) =>
new Promise((resolve,reject) => {

    if (count > 1){
        setTimeout(() => {
            document.querySelector(".countdown").innerText = count;
            resolve(count);
        },1000);
    }else {
        setTimeout(()=>{
            document.querySelector("countdown").innerText =
            "Happy independence day";
            reject("completed");
        },1000);
    }
});

msg(9)
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .catch((err) => console.log(err));   
