import { GM_addStyle } from '$';
import styles from './styles.css';

export class CommandPanel {
    constructor(commandHandler) {
        this.commandHandler = commandHandler;
        GM_addStyle(styles);
        this.initUI();
    }

    initUI() {
        this.panel = document.createElement('div');
        this.panel.className = 'cmd-panel';
        this.panel.innerHTML = `
            <input type="text" class="cmd-input" placeholder="Komut girin...">
            <div class="cmd-list"></div>
        `;
        
        this.input = this.panel.querySelector('.cmd-input');
        this.list = this.panel.querySelector('.cmd-list');
        
        this.input.addEventListener('input', () => this.showSuggestions());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.executeCommand();
        });
        
        document.body.appendChild(this.panel);
        this.createToggleButton();
    }

    createToggleButton() {
        this.btn = document.createElement('div');
        this.btn.className = 'cmd-btn';
        this.btn.innerHTML = '⌘';
        this.btn.addEventListener('click', () => this.togglePanel());
        document.body.appendChild(this.btn);
    }

    togglePanel() {
        this.panel.style.display = this.panel.style.display === 'block' ? 'none' : 'block';
        this.input.focus();
    }

    showSuggestions() {
        const value = this.input.value.toLowerCase();
        this.list.innerHTML = '';
        
        for (const [name, cmd] of this.commandHandler.commands) {
            if (name.includes(value)) {
                const div = document.createElement('div');
                div.className = 'cmd-item';
                div.innerHTML = `
                    <strong>${name}</strong>
                    <span>${cmd.description}</span>
                `;
                div.addEventListener('click', () => this.runCommand(name));
                this.list.appendChild(div);
            }
        }
    }

    async executeCommand() {
        const [commandName, ...args] = this.input.value.split(' ');
        await this.commandHandler.execute(commandName, args);
        this.panel.style.display = 'none';
        this.input.value = '';
    }
}
