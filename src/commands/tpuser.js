// tpuser.js
window.commands = window.commands || {};

window.commands.tpuser = {
    description: "Kullanıcı ara (Örn: tpuser bac)",
    run: function() {
        const user = prompt("Kullanıcı adı girin:");
        if (user) {
            window.location.href = `https://www.roblox.com/search/users?keyword=${user}`;
        }
    }
};
