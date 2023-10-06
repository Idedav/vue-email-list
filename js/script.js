const { createApp } = Vue;

createApp({
    data(){
        return{
            emails:[],
            item: 10
        }
    },

    methods:{
        getApi(){
            for(let i = 0; i < this.item; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((email)=>{
                    this.emails.push(email.data.response)
                })
            }
        }
        
    },

    mounted(){
        setTimeout(()=>{
            this.getApi();
        },2000)
        console.log(this.emails);
    }
}).mount('#app')