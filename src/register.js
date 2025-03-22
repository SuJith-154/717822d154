import axios from "axios";

const url = "http://20.244.56.144/test/register";

const data = {
    companyName: "karpagam college of engineering",
    ownerName: "SUJITH S",
    rollNo: "717822d154",
    ownerEmail: "717822d154@kce.ac.in",
    accessCode: "GEVSsY"
};
axios.post(url, data)
    .then(response => console.log("Response:", response.data))
    .catch(error => console.error("Error:", error));

// Response

//     Response: {
//         companyName: 'karpagam college of engineering',
//         clientID: '01143ab7-bb46-4360-b6a3-ba267769350b',
//         clientSecret: 'ysVhiRmbdrmMXdVx',
//         ownerName: 'SUJITH S',
//         ownerEmail: '717822d154@kce.ac.in',
//         rollNo: '717822d154'
//       }
      