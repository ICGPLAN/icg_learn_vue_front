import request from '@/js/request'

const api = {
  async ping() {
    return request.get('/api/ping');
  },
  async contact(data) {
    return request.post('/api/contact', data);
  },
}

export default api