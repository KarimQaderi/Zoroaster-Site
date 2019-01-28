<template>
    <div class="page LayoutPackage">
        <slot name="top"/>

        <h1>{{ this.$page.frontmatter.title }}</h1>
        <div class="dic">
            <span>سازنده :  <a :href="this.$page.frontmatter.authorUrl">{{ this.$page.frontmatter.authorName }}</a></span>
            <span>ادرس پکیچ : <a :href="this.$page.frontmatter.packageUrl">{{ this.$page.frontmatter.packageUrl }}</a></span>
        </div>

        <Content :custom="false"/>

        {{ lastUpdated }}

        <slot name="bottom"/>
    </div>
</template>


<script>


    export default {
        computed: {
            lastUpdated () {
                console.log(this);

                if (this.$page.lastUpdated) {

                    return new Date(this.$page.lastUpdated).toLocaleString(this.$lang)
                }
            },
        },


    }

</script>


