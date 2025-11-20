import { loginUi } from '../ui/auth.js';
import { togglePassword } from '../ui/togglePassword.js';

document.addEventListener('DOMContentLoaded', () => {
    togglePassword();
    loginUi();
})