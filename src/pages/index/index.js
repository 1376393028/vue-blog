export default {
    data(){
        return {

        }
    },
    methods:{
        open1() {
            this.$msg('这是一条默认消息')
        },
        open2() {
            this.$confirm('这是一段内容', '标题名称',{
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            .then(res=>{
                this.$msg.success('用户点击确认')
            }).catch(err=>{
                this.$msg.error('用户点击取消或x')
            })
        }
    }
}