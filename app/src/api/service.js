const hostURL = 'http://localhost:8010'
const getEndpoints = [
  'accountsList',
  'positionsList'
];
const postEndpoints = [
  'accountsCreate',
  'positionsCreate'
];

const updateOptions = (endpoint, body) => {
  let options = {};
  if (postEndpoints.includes(endpoint)) {
    options.headers = { 'Content-Type': 'application/json' }
    options.method = 'POST'
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
    return resp;
  } catch (err) {
    return err;
  }
}
