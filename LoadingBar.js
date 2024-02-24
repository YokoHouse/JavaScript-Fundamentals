function loadingBar(number){
    if(number / 10 === 10){
        console.log('100% complete!');
        console.log('[%%%%%%%%%%]');
        return;
    }

    let percentages = '%'.repeat(number / 10);
    let dots = '.'.repeat(10 - number / 10);

    console.log(`${number}% [${percentages + dots}]`);
    console.log('Still loading...');
}
loadingBar(50);
loadingBar(79);
loadingBar(100);