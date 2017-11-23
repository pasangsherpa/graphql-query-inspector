const isGraphqlRequest = req => {
  return true;
};

export const parse = req => {
  if (!isGraphqlRequest(req)) return null;

  const {
    time,
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
