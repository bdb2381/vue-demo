const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green'},
                {id: 22235, color: 'blue'},
            ],
            sizes:[
                {id: 2234, size: 'sm'},
                {id: 2235, size: 'md'},
                {id: 2236, size: 'lg'},
            ]            
        }
    }
})
