// tpgame.js
window.commands = window.commands || {};

window.commands.tpgame = {
    description: "Oyun ara (Örn: tpgame mm2)",
    run: function() {
        const game = prompt("Oyun adı girin:");
        if (game) {
            window.location.href = `https://www.roblox.com/tr/discover/?Keyword=${game}`;
        }
    }
};
