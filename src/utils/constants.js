export const YOUTUBE_DATA_API_KEY='AIzaSyCItEo5kIW6ZR10FnUS1DACsd62y2CX-jk'
// export const YOUTUBE_DATA_API_URL="https://youtube.googleapis.com/youtube/v3"

export const YOUTUBE_DATA_API_URL=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=US&key=${YOUTUBE_DATA_API_KEY}`


//  export const YOUTUBE_DATA_API_SPECIFIC_VIDEO_URL='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY]'
export const YOUTUBE_DATA_API_SPECIFIC_VIDEO_URL='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics'