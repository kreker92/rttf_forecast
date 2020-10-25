let prognos = [];
Array.from(document.querySelectorAll('#tour-reg-list table:not(.hide) tbody tr')).forEach(function(r) {
    let plr = {
        id: r.querySelector('td:nth-child(2) a').attributes.href.value.split('/')[1].split('?')[0],
        name: r.querySelector('td:nth-child(2) a').textContent,
        rating: parseInt(r.querySelector('td:nth-child(3)').textContent),
    };
    if(isNaN(plr.rating)) {
        plr.rating = 0;
    }
    let isTop = false;
    let rats = prognos.map((p) => p.rating);
    for(let i=0,len=rats.length;i < len;i++) {
        if(isTop)
            break;
        isTop = (rats[i] < plr.rating);
    }
    if(prognos.length < 3) {
        prognos.push(plr);
    } else {
        if(isTop) {
            prognos.sort((a,b) => a.rating-b.rating);
            prognos[0] = plr;
        }
    }
});
prognos.sort((a,b) => b.rating-a.rating);

if(prognos.length > 2) {
    prognos.forEach(function(i,j) {
        document.querySelector('#place'+(j+1)).value = i.id;
    });
    console.log(document.querySelector('#place1').value);
    console.log(document.querySelector('#place2').value);
    console.log(document.querySelector('#place3').value);

    document.querySelector('.forecast button').click();
}
