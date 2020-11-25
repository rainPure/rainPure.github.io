<template>
    <div class="home">
        <img src="static/logo.png" width="120" />

        <h1>卿只为伊人醉</h1>
        <h2>
            月夜，谁为你递纸拭泪<br />
            枫黄，谁为你戴帽添裳<br />
            细雨，谁为你播弦谱曲<br />
            多纯，两眼相望止若水<br />
            多好，研磨提笔相望老<br />
            多美，为伊人躬身画眉
        </h2>
        <ul>
            <li>
                <a href="/" target="_blank"> Home </a>
            </li>
            <li>
                <a href="#/demohub" target="_blank"> DemoHub </a>
            </li>
            <li>
                <a href="#/contact" target="_blank"> Contact </a>
            </li>
            <li>
                <a href="https://github.com/rainpure" target="_blank"> Github </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
