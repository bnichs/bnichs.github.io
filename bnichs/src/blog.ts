
export class PostInfo {
    permalink: string
    preview: string
    title: string
    path: string
    fetch_path: string
    ref: string
    tags: Array<string>
    published_date: Date;
    updated_date: Date;

    constructor(payload: Partial<PostInfo>) {
        this.title = payload.title || ""
        this.preview = payload.preview || ""
        this.permalink = payload.permalink || ""
        this.path = payload.path || ""
        this.fetch_path = payload.fetch_path || ""
        this.ref = payload.ref || ""
        this.tags = payload.tags || Array<string>()

        this.published_date = this.parseDate(payload.published_date)
        this.updated_date = this.parseDate(payload.updated_date)
    }


    parseDate(d: Date | string | undefined){
        if (d instanceof Date){
            return d
        } else if (typeof d === "string"){
            return new Date(Date.parse(d))
        } else {
            return new Date()
        }
    }
}


export declare interface PostManifestI {
    posts: Map<string, PostInfo>
}


export class PostManifest {
    public posts: Map<string, PostInfo>;

    loaded(){
        return this.posts.size > 0
    }

    constructor(payload: Partial<PostManifest>) {
        this.posts = new Map() ;

        const entries = Object.entries(payload.posts || new Map())

        entries.forEach( ([key, val]) =>{
            const post: PostInfo = new PostInfo(val)
            this.posts.set(key, post);
        })
    }
}


export function fetchManifest(){

    const man = fetch("/blog_out/manifest.json")
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
            }
        );
    return man
}


export function fetchPost(url: string){
    const p = fetch(url)
        .then(resp => {
            return resp.text()
        })
    return p
}