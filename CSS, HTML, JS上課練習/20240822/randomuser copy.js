const { createApp } = Vue;

createApp({
    data() {
        return {
            users: [] , 
            resolution: '清晰',
            pictureKey: 'large',
        };
    },
    mounted() {
        this.fetchData();  // Fetch data when component is mounted
    },
    methods: {
        fetchData() {
            fetch('https://randomuser.me/api/?results=6')  // Fetch 6 users
                .then(response => response.json())
                .then(json => {
                    this.users = json.results;
                    console.log(this.users);
                });
        },
        changeResolution(){
            if(this.resolution==='清晰'){
                this.resolution='中等';
                this.pictureKey='medium';

            }else if(this.resolution==='中等'){
                this.resolution='模糊';
                this.pictureKey='thumbnail';

            }else{
                this.resolution='清晰';
                this.pictureKey='large';
            }
        }
    }
}).mount('#app');
