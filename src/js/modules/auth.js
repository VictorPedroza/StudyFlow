import { SUPABASE_URL, API_KEY } from "../config/connection.js";

/**
 * Função para realizar login.
 * 
 * @author Victor Alexandre <victor242206@gmail.com>
 * @version 1.0.0
 * @since 20/11/2025
 * 
 * @param {string} email - Email de Acesso para Login.
 * @param {string} password - Senha de Acesso par Login.
 * 
 * @returns {boolean} Retorna "true" caso o login retorne com sucesso.
 * 
 * @throws {Error} Lança um erro caso o email ou senha estejam vazios.
 * @throws {Error} Lança um erro caso tenha um erro ao realizar Login.
 * 
**/
export async function login(email, password) {
    if (email.trim().length === 0 || password.trim().length === 0) {
        throw new Error('Email ou Senha vazios! Por favor, preencher.');
    }

    try {
        const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
            method: 'POST',
            headers: {
                'apiKey': API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            const data = await response.json();

            const token = data.access_token;
            const userId = data.user.id;

            localStorage.setItem('sb-access-token', token);
            localStorage.setItem('sb-user-id', userId);

            return true;
        }

        return false;
    } catch (err) {
        throw new Error('Erro ao realizar login', err.msg);
    }
}