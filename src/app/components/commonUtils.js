export const fetchData = async(url = '') =>{
    // console.log('in fetchData===', url);
    const res = await fetch(url);
    // console.log('in res===', res);
    const resData = await res.json();
    // console.log('in resData===', resData);
    return resData
}