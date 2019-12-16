//抛出混入对象，方便外部访问
export const mixin={
    data(){
        return {
            number:1
        }
    },
    mounted() {
        this.demo1();
    },
    methods: {
        demo1(){
        }
    }
}