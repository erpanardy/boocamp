function getfulltime(){
    const months = ['jan','feb','mar','apr','mei','jun','jul','agus','sep','nov','des']

    const tanggal = date.getDate()
    const bulan = months[date.getMonth()]
    const tahun = date.getFullYear()

    let jam = date.getHours()
    let menit = date.getMinutes()

    if (jam < 10 ) {
        jam ='0' + jam ;
    }
    if (menit  < 10 ){
        menit ='0' + menit;
    }

    return `${tanggal} ${bulan} ${tahun} ${jam}:${menit} WIB`
}

function getDistanceTime(timePost){
    const timeNow = new Date()
    const distance =timeNow - timePost
    const 
}
