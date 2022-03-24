import axios from 'axios';

const KEY = 'AIzaSyDPXZq7se-DD1c621-JPwnHb8Fdl4R2BtE'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        //KEY is KEY variable
        key: KEY,
        type: 'video'
    },

})

