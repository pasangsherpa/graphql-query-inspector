export const safeJSONParse = json => {
  try {
    return JSON.parse(json);
  } catch(e) {
    return null;
  }
}

const isGraphqlRequest = req => {
  return true;
};

export const parse = req => {
  if (!isGraphqlRequest(req)) return null;

  const {
    time,
    getContent,
    serverIPAddress,
    startedDateTime,
    request: {
      url,
      method,
      headers: reqHeaders
    },
    response: {
      status,
      content,
      statusText,
      headers: resHeaders
    }
  } = req;

  return {
    time,
    getContent,
    startedDateTime,
    general: [{
      name: 'Request URL',
      value: url
    }, {
      name: 'Request Method',
      value: method
    }, {
      name: 'Status Code',
      value: `${status} ${statusText}`
    }, {
      name: 'Remote Address',
      value: serverIPAddress
    }],
    request: {
      url,
      headers: reqHeaders
    },
    response: {
      status,
      content,
      statusText,
      headers: resHeaders
    }
  };
};
