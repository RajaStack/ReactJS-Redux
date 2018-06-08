import axios from 'axios';


// axios.create({
//   baseURL: `http://localhost:4000/`
// });

const HOST = 'http://localhost:4000/';

export function get(url){
	return new Promise((resolve, reject)=>{
		url = HOST + url;
		axios.get(url)
	      .then(res => {
		        resolve(res.data);
	      })
	});
}



export function post(url, data){
	return new Promise((resolve, reject)=>{
		url = HOST + url;
		axios.post(url, data)
	      .then(res => {
		        resolve(res.data);
	      })
	});
}



