/**
 * Função para ocultar e exibir a senha  
 * 
 * @author Victor Alexandre <victor242206@gmail.com>
 * @version 1.0.0
 * @since 20/11/2025
 * 
 * 
 * @param {document} input id: "password"
 * @param {document} icon id: "icon-password"
 * 
 * @returns {void} A função não retorna nenhum valor. Apenas realizar alteração no DOM.
 * 
 * @throws {Error} Lança erro caso algum dos IDs informados não exista no DOM.
 * 
**/

export function togglePassword() {
    const iconPassword = document.getElementById('icon-password');
    const inputPassword = document.getElementById('password');

    if (!inputPassword) {
        throw new Error('Input com ID não foi encontrado!');
    }

    if (!iconPassword) {
        throw new Error('Icon com ID não foi encontrado!');
    }

    iconPassword.addEventListener('click', () => {
        inputPassword.type = inputPassword.type === 'password'
            ? 'text'
            : 'password';

        iconPassword.textContent =
            inputPassword.type === 'password'
                ? 'visibility_off'
                : 'visibility';
    });
}
