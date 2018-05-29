const api_url = "https://reactnd-books-api.udacity.com"
const axios = require("axios");
// create random token for identification with the api
let token = localStorage.token;
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
};

// this has been refactored to make up a module for the api

export const BooksAPI = {

    getBookById: (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                let req_response = axios.get(`${api_url}/books/${id}`, {
                    "headers": headers
                });
                let d = await req_response;
                let book = d.data;
                resolve(book);
            }
            catch (ex) {
                reject(ex);
            }
        });
    },
    getAllBooks: () => {
        return new Promise(async (resolve, reject) => {
            try {
                let req_response = axios.get(`${api_url}/books`, {
                    "headers": headers
                });
                let d = await req_response;
                let all_books = d.data.books;
                resolve(all_books);
            }
            catch (ex) {
                reject(ex);
            }
        });
    },
    updateBookshelf: (book_id, shelf) => {
        return new Promise(async (resolve, reject) => {
            try {
                let req_response = axios.put(`${api_url}/books/${book_id}`, {
                    "body": JSON.stringify(shelf),
                    "headers": {
                        ...headers,
                        "Content-Type": "application/json"
                    }
                });
                let d = await req_response;
                let updated_books = d.data.books;
                resolve(updated_books);
            }
            catch (ex) {
                reject(ex);
            }
        });
    },
    searchBooks: (query, max_results) => {
        return new Promise(async (resolve, reject) => {
            try {
                let req_response = axios.post(`${api_url}/search`, {
                    "headers": {
                        ...headers,
                        'Content-Type': 'application/json'
                    },
                    "body": JSON.stringify({query, max_results})
                });

                let d = await req_response;
                let search_results = d.data;
                resolve(search_results);
            }
            catch (ex) {
                reject(ex);
            }
        })
    }
};


// export const search = (query, maxResults) =>
//     fetch(`${api}/search`, {
//         method: 'POST',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ query, maxResults })
//     }).then(res => res.json())
//         .then(data => data.books)