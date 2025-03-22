import axios from 'axios';
const url="http://20.244.56.144/test/auth"

const data={
        companyName: 'karpagam college of engineering',
        clientID: '01143ab7-bb46-4360-b6a3-ba267769350b',
        clientSecret: 'ysVhiRmbdrmMXdVx',
        ownerName: 'SUJITH S',
        ownerEmail: '717822d154@kce.ac.in',
        rollNo: '717822d154'
}

axios.post(url,data)
    .then(response => console.log("Response:", response.data))
    .catch(error => console.error("Error:", error));