//lert("login js");

const corectEmail = 'jwd_b@gmail.com';
const corectPassword = "1234";

const messageCountainer = document.getElementById
('message-countainer'); 
function cekLogin(){
    const userEmail = document.getElementById('fEmail').
    value;
    const userPassword = document.getElementById('fPassword').
    value;

    if (userEmail != corectEmail || userPassword !=corectPassword){

    messageCountainer.innerHTML = 
    "<p class='error-message'>Login Gagal, Password atau Email salah !</p>";
    } else {
        messageCountainer.innerHTML = 
        "<p class='success-message'>Login Berhasil . . .</p>";
    }
}