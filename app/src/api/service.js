const hostURL = 'http://localhost:8010'
const getEndpoints = [
  'accountsList',
  'positionsList'
];
const postEndpoints = [
  'accountsCreate',
  'positionsCreate'
];
const putEndpoints = [
  'accountsEdit'
];
const deleteEndpoints = [
  'accountsDelete',
  'positionsDelete'
];

const updateOptions = (endpoint, body) => {
  let options = {};
  if (postEndpoints.includes(endpoint)) {
    options.headers = { 'Content-Type': 'application/json' }
    options.method = 'POST'
  } else if (deleteEndpoints.includes(endpoint)) {
    options.headers = { 'Content-Type': 'application/json' }
    options.method = 'DELETE'
  } else if (putEndpoints.includes(endpoint)) {
    options.headers = { 'Content-Type': 'application/json' }
    options.method = 'PUT'
  } else {
    options.headers = { Accept: 'application/json' }
    options.method = 'GET'
  }

  if (body) options.body = JSON.stringify(body);

  return options;
}

export const apiService = async (endpoint, body) => {
  let options = updateOptions(endpoint, body);
  try {
    const resp = await fetch(`${hostURL}/${endpoint}`, options)
    return await resp.json();
  } catch (err) {
    return err;
  }
}
