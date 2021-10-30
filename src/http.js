// http.js
class Http {
    constructor() {
        this.api = "https://616b972716c3fa001717174a.mockapi.io/post"
        this.headers = {
            'Content-Type': "application/json",
        }
    }
    async send(method, url, body) {
        const data = await fetch(url, {
            method: method,
            headers: this.headers,
            body: body ? JSON.stringify(body) : undefined,
        }).then((res) =>
            res.json().then(data => {
                if (!res.ok) {
                    throw data.message;
                }
                return data
            })
        );
        return data;
    }
    async readPosts() {
        return await this.send('GET', this.api, null);
    }
    async readPost(id) {
        return await this.send('GET', `${this.api}/${id}`, null);
    }
    async creatPost(body) {
        return await this.send('POST', this.api, body);
    }
    async updatePost(body) {
        return await this.send('PUT', `${this.api}/${id}`, body);
    }
    async deletePost(id) {
        return await this.send('DELETE', `${this.api}/${id}`, null);
    }
}
export default new Http();