export default {
    name: "fakeban",
    description: "Gerçekçi ban ekranı göster",
    
    async execute() {
        document.body.innerHTML = `
            <div style="position:fixed;top:0;left:0;width:100%;height:100%;
            background:#000;display:flex;align-items:center;justify-content:center;color:red;font-family:Arial;">
                <div style="text-align:center">
                    <h1 style="font-size:3em">ACCOUNT TERMINATED</h1>
                    <p style="font-size:1.2em">Reason: Exploiting</p>
                    <p>Ban ID: #${Math.floor(Math.random()*1000000)}</p>
                </div>
            </div>`;
    }
}
