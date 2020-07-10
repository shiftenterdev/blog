<template>
    <div>
        <!-- Page Header -->
        <Header></Header>
        <!-- Main Content -->
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <div v-for="post in posts" :key="post.id">
                        <div class="post-preview">
                            <a :href="post.link">
                                <h2 class="post-title">
                                    {{post.title.rendered}}
                                </h2>
                                <h3 class="post-subtitle" v-html="post.excerpt.rendered">

                                </h3>
                            </a>
                            <p class="post-meta">Posted by
                                <a href="#">bappa</a>
                                on {{post.date}}</p>
                        </div>
                        <hr>
                    </div>
                    <!-- Pager -->
                    <div class="clearfix">
                        <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                    </div>
                </div>
            </div>
        </div>

        <hr>

    </div>
</template>

<script>
    import Header from '@/components/Header';

    export default {
        components: {
            Header
        },
        data() {
            return {
                posts: []
            }
        },
        mounted() {
            this.$axios.get('https://mazeapi.com/wp-json/wp/v2/posts?_fields=excerpt,date,title,link&per_page=6&categories=2').then(res => {
                this.posts = res.data
            });
        }
    }
</script>