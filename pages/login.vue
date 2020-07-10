<template>
    <div>
        <header class="masthead contact-bg">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="page-heading">
                            <h1>Log in</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 mx-auto">
                    <form @submit="userLogin">
                        <div class="form-group">
                            <label>Username</label>
                            <input type="text" class="form-control" v-model="login.username"/>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="text" class="form-control" v-model="login.password"/>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                login: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            async userLogin() {
                try {
                    let response = await this.$auth.loginWith('local', {data: this.login})
                    console.log(response)
                } catch (err) {
                    console.log(err)
                }
            }
        }
    }
</script>