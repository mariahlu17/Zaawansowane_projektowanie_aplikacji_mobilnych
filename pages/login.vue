<script setup>
definePageMeta({
    layout: "",
});

const login = ref('');
const password = ref('');
const correctLogin = 'admin';
const correctPassword = 'admin';



function loginFunction() {
    const loginError = document.getElementById('login');
    const passwordError = document.getElementById('password');
    if (login.value === correctLogin && password.value === correctPassword) {
        goToMainPage();
    }else if (login.value !== correctLogin && password.value !== correctPassword) {
        loginError.style.border="solid red";
        passwordError.style.border="solid red";
    } else if (login.value !== correctLogin) {
        loginError.style.border="solid red";
        passwordError.style.border="none";
    } else if (password.value !== correctPassword) {
        passwordError.style.border="solid red";
        loginError.style.border="none";
    } 
}

function goToMainPage() {
    navigateTo('/home');
}
</script>

<template>
    <div class="login_content">
        <main class="login_main">
        <img src="~assets/heat_logo.png" alt="" class="heat_logo">
        <h1>Witamy!</h1>
        <h2>Zaloguj się</h2>
        <form @submit.prevent="loginFunction" action="post">
            <label for="login">Login</label>
            <input v-model="login" type="text" name="login" id="login" :class="{ 'error': loginError }">
            <label for="password">Hasło</label>
            <input v-model="password" type="password" name="password" id="password" :class="{ 'error': passwordError }">
            <button type="submit">Zaloguj</button>
        </form>
        </main>
    </div>
</template>



<style scoped>
.login_content {
            background: linear-gradient(180deg, rgba(250, 250, 250, 0.40) 0%, #8DC3F4 56.25%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            min-height: 100vh;
        }

        .login_main {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 75vh;
        }

        .error {
            border: solid red;
        }

        form {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            margin: 5% 0%;
        }

        h1, h2, label {
            color: #2382DB;
            text-align: center;
            font-weight: 900;
            line-height: normal;
        }

        h1 {
            font-size: 100px;
        }

        h2 {
            font-size: 70px;
        }

        label {
            font-size: 50px;
            font-style: italic;
        }

        input {
            width: 276px;
            height: 48px;
            border-radius: 20px;
            background: #8AB5E9;
            border: 0;
            outline: none;
            padding: 0px 15px 0px 15px;
            color: #2387E4;
            
        }

        button {
            width: 164px;
            height: 46px;
            border-radius: 20px;
            background: #97b2cc;
            border: none;
            margin-top: 15%;
            color: #2387E4;
            outline: none; /* Added for consistency */
        }

        @media (min-width: 768px) and (max-width: 1400px) { 
            h1{
                font-size: 80px;
            }
            h2{
                font-size: 50px;
            }
            label{
                font-size: 35px;
            }
        }

        @media (max-width: 768px) { 
            h1{
                font-size: 70px;
            }
            h2{
                font-size: 40px;
            }
            label{
                font-size: 25px;
            }
        }

</style>