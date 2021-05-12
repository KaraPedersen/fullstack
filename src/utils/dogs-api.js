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

export async function addDog(dog) {
  const response = await request.post(URL).send(dog);
  return response.body;
}

export async function deleteDog(id) {
  const response = await request.delete(`${URL}/${id}`);
  return response.body;
}

export async function updateDog(dog) {
  const response = await request.put(`${URL}/${dog.id}`).send(dog);
  return response.body;
}