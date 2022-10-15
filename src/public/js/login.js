$(document).ready(function (){
    const appLogin = {
        eventListener: function (){
            $('#btn_login').click(function (){
                appLogin.handleLogin()
            })
        },
        animation: function (){

        },
        handleLogin: function (){
            let username = $('#username').val()
            let password = $('#password').val()
            if(username !== '' && password !== '')
            {
                $.ajax({
                    url:'/login',
                    type: 'POST',
                    beforeSend: appLogin.animation(),
                    data: {username, password},
                    success: function (data){
                        if(data.status === 200){
                            location.href = '/home'
                        } else {
                            appLogin.animation()
                            $('.error-login').show()
                        }
                    },
                    error: function (){
                        appLogin.animation()
                        alert('error')
                    }
                })
            }
        },
        run: function (){
            this.eventListener()
        }
    }
    appLogin.run()
})