<template>

    <div class="list">
        <div class="list_title"></div>
        <div class="list_body">

            <div class="list_item" v-for="post in posts" :style="randomColor()">

                <router-link :to="post.path"><h2>{{ post.frontmatter.title }}</h2></router-link>

                <h3>{{ post.frontmatter.description }}</h3>

                <div class="list_footer">
                    <router-link class="more" :to="post.path">ادامه مطلب</router-link>
                    <a :href="post.frontmatter.authorUrl">{{ post.frontmatter.authorName }}</a>
                </div>

            </div>

        </div>
    </div>




</template>



<!--<div>-->
<!--Tags:-->
<!--<router-link-->
<!--v-for="tag in post.frontmatter.tags"-->
<!--:key="tag"-->
<!--:to="{ path: `/tags.html#${tag}`}">-->
<!--{{tag}}-->
<!--</router-link>-->
<!--</div>-->



<script>
    export default {
        methods:{
            randomColor: function () {
                return 'border-color:rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            }
        },
        computed: {
            posts() {
                return this.$site.pages
                    .filter(x => x.path.startsWith('/packages/') && !x.frontmatter.blog_index)
                    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
            },
        }
    }
</script>