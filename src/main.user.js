// ==UserScript==
// @name         Roblox CMD Panel (Main)
// @namespace    http://github.com/snlmbe
// @version      1.0
// @description  Ana script, komut paneli
// @author       
// @match        https://www.roblox.com/*
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict'

    // 1) UI KURULUMU
    GM_addStyle(`
        .cmd-btn { position: fixed; bottom: 20px; right: 20px; width: 50px; height: 50px; background: #fff; border-radius: 50%; cursor: pointer; box-shadow: 0 0 15px rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center; z-index: 9999; }
        .cmd-panel { position: fixed; bottom: 90px; right: 20px; width: 350px; background: #fff; border-radius: 10px; box-shadow: 0 5px 20px rgba(0,0,0,0.15); padding: 15px; display: none; z-index: 9998; }
        .cmd-input { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; margin-bottom: 10px; }
        .cmd-list { max-height: 300px; overflow-y: auto; }
        .cmd-item { padding: 10px; margin: 5px 0; border-radius: 5px; cursor: pointer; transition: 0.2s; background: #f8f8f8; }
        .cmd-item:hover { background: #e6f3ff; }
    `)

    const btn = document.createElement('div')
    btn.className = 'cmd-btn'
    btn.innerHTML = '⌘'

    const panel = document.createElement('div')
    panel.className = 'cmd-panel'
    panel.innerHTML = `
        <input type="text" class="cmd-input" placeholder="Komut ara...">
        <div class="cmd-list"></div>
    `

    document.body.appendChild(btn)
    document.body.appendChild(panel)

    btn.addEventListener('click', () => {
        panel.style.display = (panel.style.display === 'block') ? 'none' : 'block'
        panel.querySelector('.cmd-input').focus()
        buildCommandList('')
    })

    // 2) KOMUTLARI YÜKLEME
    // GitHub API ile commands klasöründeki dosyaları listele
    const GITHUB_API_URL = 'https://api.github.com/repos/snlmbe/roblox-cmd-panel/contents/commands'

    GM_xmlhttpRequest({
        method: 'GET',
        url: GITHUB_API_URL,
        onload: function(response) {
            if (response.status === 200) {
                const files = JSON.parse(response.responseText)
                files.forEach(file => {
                    if (file.name.endsWith('.js')) {
                        fetchAndInject(file.download_url)
                    }
                })
            } else {
                console.error('Commands klasörü bulunamadı veya hata oluştu', response)
            }
        }
    })

    function fetchAndInject(url) {
        GM_xmlhttpRequest({
            method: 'GET',
            url: url,
            onload: function(response) {
                if (response.status === 200) {
                    // Komut dosyasını sayfaya script olarak ekliyoruz
                    const script = document.createElement('script')
                    script.textContent = response.responseText
                    document.head.appendChild(script)
                }
            }
        })
    }

    // 3) KOMUT ARAMA VE LİSTELEME
    let searchTimeout
    const input = panel.querySelector('.cmd-input')
    input.addEventListener('input', function(e) {
        clearTimeout(searchTimeout)
        searchTimeout = setTimeout(() => {
            buildCommandList(e.target.value.toLowerCase())
        }, 100)
    })

    function buildCommandList(filter) {
        const list = panel.querySelector('.cmd-list')
        list.innerHTML = ''

        // Tüm komutlar window.commands içinde
        if (!window.commands) return

        Object.keys(window.commands).forEach(cmdName => {
            if (cmdName.includes(filter)) {
                const cmdObj = window.commands[cmdName]
                const div = document.createElement('div')
                div.className = 'cmd-item'
                div.innerHTML = `
                    <strong>${cmdName}</strong>
                    <div style="color:#666;font-size:0.9em">${cmdObj.description || ''}</div>
                `
                div.addEventListener('click', () => {
                    panel.style.display = 'none'
                    cmdObj.run()
                })
                list.appendChild(div)
            }
        })
    }
})()
