import axios from 'axios'

const instance=axios.create({
    baseURL:'https://vuejs-axios-blog-47a5f-default-rtdb.firebaseio.com'
})

// instance.defaults.headers.common[""]

export default instance;