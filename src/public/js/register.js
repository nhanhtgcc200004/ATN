$(document)(function () {
    const appRegister = {
        eventListener: function () {
            $('btn-register').click(function () {
                appRegister.handleRegister()
            })
        },
        animation: function () {

        },
        handleRegister: function () {
            let username = $('#username').val()
            let password = $('#password').val()
            let confirmpassword = $('#confirmpassword').val()
            if (username !== '' && password !== '' && password === confirmpassword) {
                $.ajax({
                    url: '/register',
                    type: 'post',
                    beforeSend: appRegister.animation(),
                    data: {username, password},
                    success: function (data) {
                        if (data.status === 200) {
                            location.href = '/'
                        } else {
                            appRegister.animation()
                            $('.errorregister').show
                        }
                    },
                    error: function () {
                        appRegister.animation()
                        alert('error')
                    }
                })
            }
        },
        run: function () {
            this.eventListener()
        }
    }
    appRegister.run()
})

