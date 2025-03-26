export default {
    name: "tpgame",
    description: "Oyun arama komutu",
    
    async execute(args) {
        const gameName = args.join(' ');
        window.location.href = `https://www.roblox.com/tr/discover/?Keyword=${gameName}`;
    }
}
