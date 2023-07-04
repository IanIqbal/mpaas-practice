Page({
    onLoad() {
        this.titleClick = my.on('titleClick', () => {
            console.log('title clicked')
            my.alert({
                title: 'dear',
                content: 'You just clicked on the title',
                buttonText: 'I got it!',
            })
        })
    },
    onUnload(){
        this.titleClick.remove();
    },
})