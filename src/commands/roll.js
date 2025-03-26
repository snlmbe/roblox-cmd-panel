// roll.js
window.commands = window.commands || {};

window.commands.roll = {
    description: "Zar at (1-1000)",
    run: function() {
        const roll = Math.floor(Math.random() * 1000) + 1;
        alert(`🎲 Zar: ${roll}`);
    }
};
