// tpid.js
window.commands = window.commands || {};

window.commands.tpid = {
    description: "ID ile yönlen (Örn: tpid 142823291)",
    run: function() {
        const id = prompt("ID girin:");
        if (id) {
            if (id.length > 6) {
                window.location.href = `https://www.roblox.com/games/${id}`;
            } else {
                window.location.href = `https://www.roblox.com/users/${id}/profile`;
            }
        }
    }
};

