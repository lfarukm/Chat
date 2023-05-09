function togglePassword(){
    var element = document.getElementsByClassName('password');
    element.type = (element.type == 'password' ? 'text' : 'password');
}