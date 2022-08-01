
export class Post {
    permalink: string
    preview: string
    title: string

    constructor(payload: Partial<Post>) {
        this.title = payload.title || ""
        this.preview = payload.preview || ""
        this.permalink = payload.permalink || ""
    }
}


export declare interface PostManifestI {
    posts: Map<string, Post>
}


export class PostManifest {
    public posts: Map<string, Post>;
    // bam: string;


    constructor(payload: Partial<PostManifest>) {
        this.posts = new Map() ;

        // const keys = Object.keys(this.posts)
        const entries = Object.entries(payload.posts || new Map())
        // console.log(keys)

        entries.forEach( ([key, val]) =>{
            console.log(key)
            console.log(val)
            const post: Post = new Post(val)
            console.log(post)
            this.posts.set(key, post);
            // const post = this.posts.get(key)
            // console.log(post)
        })
    }

    // constructor(jsonData: PostManifestI) {
    //     console.log("making man")
    //     // const instance:Po = Object.assign(new C(), o);
    //     console.log(jsonData.posts)
    //     jsonData.posts.forEach(function(val: Post, ind: string) {
    //         console.log(val)
    //     })
    //     //     post =>{
    //     //     console.log(post)
    //     // })
    //     this.posts = ""
    // }
}


export function fetchManifest(){
    // let posts: PostManifest = {} // = {} as PostManifest

    fetch("./blog/manifest.json")
        .then(response => {
            return response.json();
            // console.log(this.posts)
        })
        .then(jsondata => {
            // console.log(jsondata)
            // let j = JSON.parse(jsondata)
            const manifest = new PostManifest(jsondata)
            console.log(manifest)
            return manifest
            // console.log(foo)
            //
            // console.log("I hate js")
            // // const instance: PostManifest = Object.assign(new PostManifest(), jsondata)
            // // console.log(instance)
            // let manifest = new PostManifest(jsondata)
            // console.log(manifest)
            //
            // let foo = <PostManifest>JSON.parse(jsondata)
            // foo.onFoo()
            // let bar = foo as PostManifest
            // // let bar = Object.setPrototypeOf(jsondata, PostManifest.prototype);
            // console.log(foo)
            // console.log(bar)
            // // posts = jsondata.posts as PostManifest
            // // if (jsondata){
            // //   } else{
            // //     this.posts = []
            // //   }
            // console.log("fooo")
            // console.log(posts)
            // return posts
            }
        );
    return new PostManifest({})
    // return posts
    // return posts
}