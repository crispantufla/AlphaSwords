export const fetchResource = (resource, id, method, data, options={}, headers={}) => {

    const defaultOptions = {
        mode: 'cors',
        method: method,
    }

    const defaultHeaders = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `bearer ${localStorage.getItem('token')}`
    }

    let url = `http://localhost:3001/${resource}`;

    if (id) {
        url += `/${id}`;
    }

    const finalOptions = {
       ...defaultOptions,
       ...options,
        headers: {
            ...defaultHeaders,
            ...headers,
        },
        body: JSON.stringify(data)
    }

    return fetch(url, finalOptions).then(res => res.json());
}