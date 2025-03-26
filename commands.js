// commands.js
window.commands = {
    tpgame: {
        description: "Oyun ara (Örn: tpgame mm2)",
        run: function() {
            const game = prompt("Oyun adı girin:");
            if (game) window.location.href = `https://www.roblox.com/tr/discover/?Keyword=${game}`;
        }
    },
    tpuser: {
        description: "Kullanıcı ara (Örn: tpuser bac)",
        run: function() {
            const user = prompt("Kullanıcı adı girin:");
            if (user) window.location.href = `https://www.roblox.com/search/users?keyword=${user}`;
        }
    },
    tpid: {
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
    },
    creater: {
        description: "Yapımcı profilini aç",
        run: function() {
            window.location.href = 'https://www.roblox.com/tr/users/1161867135/profile';
        }
    },
    roll: {
        description: "Zar at (1-1000)",
        run: function() {
            const roll = Math.floor(Math.random() * 1000) + 1;
            alert("🎲 Zar: " + roll);
        }
    },
    fakeban: {
        description: "Gerçekçi ban ekranı",
        run: function() {
            document.body.innerHTML = `
                <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:#000;display:flex;align-items:center;justify-content:center;color:red;font-family:Arial;">
                    <div style="text-align:center">
                        <h1 style="font-size:3em">ACCOUNT TERMINATED</h1>
                        <p style="font-size:1.2em">Reason: Exploiting</p>
                        <p>Ban ID: #${Math.floor(Math.random()*1000000)}</p>
                    </div>
                </div>
            `;
        }
    }
};
