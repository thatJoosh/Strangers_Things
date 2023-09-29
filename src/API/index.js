const COHORT_NAME = '2302-ACC-ET-WEB-PT-D'

const APIURL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

class StrangerThingsService {
    constructor(APIURL) {
        this.APIURL = APIURL;
    }

    async fetchPosts() {
        try {
            const response = await fetch(`${this.APIURL}/posts`)
            const data = await response.json();
            return data.data.posts;
        } catch (error) {
            console.error('Uh oh, trouble fetching posts!', error);
            return []
        }
    }
}

const api = new StrangerThingsService(APIURL);

export default api;