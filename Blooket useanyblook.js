--BlooketCheatmaster21/Blooket-cheats-
    (async () => { /* This is to prevent "identifier i is already declared errors" */
    let i = document.createElement('iframe');
    document.body.append(i);
    window.confirm = i.contentWindow.confirm.bind(window);
    i.remove();
    Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + location.host + "/api/games?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/useAnyBlook.js")?.answers?.[0]}`)).then(async x => {
        if (x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/BlooketCheatmaster21/Blooket-Cheats-")) {
            /* Update Checker end */
            const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
            const unlocks = Object.keys(webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b } }, [['1234']]]).webpack("MDrD").a);
            if (location.pathname == "/blooks") stateNode.setState({ blookData: unlocks.reduce((a, b) => (a[b] = (stateNode.state.blookData[b] || 1), a), {}) });
            else stateNode.setState({ unlocks });
        }
    });
})();
