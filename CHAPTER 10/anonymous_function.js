function sendEmail(from,sub,message){
    let msg = `"${sub}">"${message}" received from "${from}"`;
    let send =function () {console.log(msg)}
    send();
}
sendEmail('karthik','re:subject','Good news');
