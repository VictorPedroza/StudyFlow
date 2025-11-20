import { login } from "../modules/auth.js";

/**
 * Função que controla o comportamento de Login:
 * - Captura os valor do Formulário (email, senha).
 * - Chama a função de autenticação, enviando os parametros de email e senha.
 * - Gerencia os erros da função de autenticação.
 * 
 * @author Victor Alexandre <victor2022406@gmail.com>
 * @version 1.0.0
 * @since 20/11/2025
 * 
 * @param {document} email id: "email".
 * @param {document} password id: "password"
 * @param {document} form id: "formLogin"
 * 
 * @return {void} A função não retorna nenhum valor. Apenas chama e controla a função de autenticação.
 * 
 * @throws {Error} Lança o erro caso tenha algum retorno da função de autenticação.
 * 
**/
export function loginUi() {
    const formLogin = document.getElementById('formLogin');

    formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const result = await login(email, password);

            const userId = localStorage.getItem('sb-user-id');

            if (result) {
                console.log('Logado', userId);
            }
        } catch (err) {
            console.warn(err.message)
        }
    })
}