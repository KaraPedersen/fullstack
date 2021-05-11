import request from 'superagent';

const URL = '/api/dogs';

export async function getDogs() {
  const response = await request.get(URL);
  return response.body;
}

export async function getDog(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}