// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'a01fbab8-1714-4f94-8b67-40d7827a5efd';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1462557181\",\"not_before\":\"1462553281\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDYyNTUzMjgxLCJuYmYiOjE0NjI1NTMyODEsImV4cCI6MTQ2MjU1NzE4MSwiYXBwaWQiOiJiOWU2ZTA3Yi1jNDNlLTQ3MzEtODVjYS05ODE3ODkyNzI0Y2QiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwib2lkIjoiNGUwNDNmODYtYjMzZC00YzNiLThjNTYtNWM3NTkyOGEzNzBlIiwic3ViIjoiNGUwNDNmODYtYjMzZC00YzNiLThjNTYtNWM3NTkyOGEzNzBlIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidmVyIjoiMS4wIn0.GN2seDw3ngwrg8B58vT-9pz3da7SHVztOpTyWraWoBcUDNDf3L1MSsfORBjtKLMRRTh43tXE6xF_YNu0fqluXyc0_HTXIVP0KZ15Pc3_XMdqThieM5fALhKMll8WkyqcTNcmyizWZMsHboVpYcRq-MTtCpTD724FmsqMyh3jkEnuTD5In2RMWwMVDK9p6oZwoNge2yun1V_8EFd3ZWiFZZmp_cgIrEQ4fkfXvkIdPnD5EP6cyXKg9xf8FkvuKpYKYVxG70toLn_qOdxRWb2eyTVAHXikgtvPp1iHDAlBVBuw7K9OELcBtqEbi4f_iYl450oCzBS6IT0nPqMPVtswCw\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '6778fc3f-1b70-4439-b15b-35c2584bd190',
  'client-request-id': 'e8506698-e195-4225-b27d-d9ff64b9bab1',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_344',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'esctx=AAABAAAAiL9Kn2Z27UubvWFPbm0gLTUrzJqvWwqoAVpUm8bKRyI18quLqJ__pMegor_xVxmnJ1_ZD4qMDHeZ3s8yqZqAOLUxGih7cdXIHg8Rer5NadqH2WWK56O-jjD59EUfinxatI5qjqUMqID3XiwRm19nBmM1fPJ_Y0crKT2RD9UvxSj2R26-3CBhu6YIvYDpVdiMIAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 06 May 2016 16:52:59 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1462557181\",\"not_before\":\"1462553281\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDYyNTUzMjgxLCJuYmYiOjE0NjI1NTMyODEsImV4cCI6MTQ2MjU1NzE4MSwiYXBwaWQiOiJiOWU2ZTA3Yi1jNDNlLTQ3MzEtODVjYS05ODE3ODkyNzI0Y2QiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwib2lkIjoiNGUwNDNmODYtYjMzZC00YzNiLThjNTYtNWM3NTkyOGEzNzBlIiwic3ViIjoiNGUwNDNmODYtYjMzZC00YzNiLThjNTYtNWM3NTkyOGEzNzBlIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidmVyIjoiMS4wIn0.GN2seDw3ngwrg8B58vT-9pz3da7SHVztOpTyWraWoBcUDNDf3L1MSsfORBjtKLMRRTh43tXE6xF_YNu0fqluXyc0_HTXIVP0KZ15Pc3_XMdqThieM5fALhKMll8WkyqcTNcmyizWZMsHboVpYcRq-MTtCpTD724FmsqMyh3jkEnuTD5In2RMWwMVDK9p6oZwoNge2yun1V_8EFd3ZWiFZZmp_cgIrEQ4fkfXvkIdPnD5EP6cyXKg9xf8FkvuKpYKYVxG70toLn_qOdxRWb2eyTVAHXikgtvPp1iHDAlBVBuw7K9OELcBtqEbi4f_iYl450oCzBS6IT0nPqMPVtswCw\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '6778fc3f-1b70-4439-b15b-35c2584bd190',
  'client-request-id': 'e8506698-e195-4225-b27d-d9ff64b9bab1',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_344',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'esctx=AAABAAAAiL9Kn2Z27UubvWFPbm0gLTUrzJqvWwqoAVpUm8bKRyI18quLqJ__pMegor_xVxmnJ1_ZD4qMDHeZ3s8yqZqAOLUxGih7cdXIHg8Rer5NadqH2WWK56O-jjD59EUfinxatI5qjqUMqID3XiwRm19nBmM1fPJ_Y0crKT2RD9UvxSj2R26-3CBhu6YIvYDpVdiMIAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 06 May 2016 16:52:59 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/providers/Microsoft.ServerManagement/nodes?api-version=2016-07-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/rsmt-rnr-rg/providers/microsoft.servermanagement/nodes/016bddec-e091-44a8-991a-18a2bb1f0d8a\",\"name\":\"016bddec-e091-44a8-991a-18a2bb1f0d8a\",\"type\":\"microsoft.servermanagement/nodes\",\"location\":\"Central US\",\"etag\":\"W/\\\"datetime'2016-04-16T08%3A04%3A51.1811735Z'\\\"\",\"properties\":{\"gatewayId\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/rsmt-rnr-rg/providers/microsoft.servermanagement/gateways/rnr-gw-tp3-01\",\"connectionName\":\"40.122.203.163\",\"created\":\"2016-04-16T08:04:50.8576370Z\",\"updated\":\"2016-04-16T08:04:50.8576370Z\"}},{\"id\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/rsmt-rnr-rg/providers/microsoft.servermanagement/nodes/40.122.203.163\",\"name\":\"40.122.203.163\",\"type\":\"microsoft.servermanagement/nodes\",\"location\":\"centralus\",\"etag\":\"W/\\\"datetime'2016-02-17T21%3A14%3A24.3350161Z'\\\"\",\"properties\":{\"gatewayId\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/rsmt-rnr-rg/providers/microsoft.servermanagement/gateways/rnr-gw-tp3-01\",\"connectionName\":\"40.122.203.163\",\"created\":\"2016-02-08T22:21:18.4963649Z\",\"updated\":\"2016-02-17T21:14:24.2343809Z\"}},{\"id\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/rsmt-rnr-rg/providers/microsoft.servermanagement/nodes/7204179e-ec1a-47ec-9d83-a75a5d5e70ce\",\"name\":\"7204179e-ec1a-47ec-9d83-a75a5d5e70ce\",\"type\":\"microsoft.servermanagement/nodes\",\"location\":\"Central US\",\"etag\":\"W/\\\"datetime'2016-04-17T20%3A51%3A17.3633432Z'\\\"\",\"properties\":{\"gatewayId\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/rsmt-rnr-rg/providers/microsoft.servermanagement/gateways/rnr-gw-tp3-01\",\"connectionName\":\"40.122.203.163\",\"created\":\"2016-04-17T20:51:16.8644292Z\",\"updated\":\"2016-04-17T20:51:16.8644292Z\"}},{\"id\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/rsmt-rnr-rg/providers/microsoft.servermanagement/nodes/saddlebags\",\"name\":\"saddlebags\",\"type\":\"microsoft.servermanagement/nodes\",\"location\":\"centralus\",\"etag\":\"W/\\\"datetime'2016-05-06T16%3A52%3A51.2269365Z'\\\"\",\"properties\":{\"gatewayId\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/rsmt-rnr-rg/providers/microsoft.servermanagement/gateways/mygateway\",\"connectionName\":\"saddlebags\",\"created\":\"2016-05-06T16:52:51.0077632Z\",\"updated\":\"2016-05-06T16:52:51.0077632Z\"}},{\"id\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/wenjunp/providers/microsoft.servermanagement/nodes/wenjunp-vm2\",\"name\":\"wenjunp-vm2\",\"type\":\"microsoft.servermanagement/nodes\",\"location\":\"centralus\",\"etag\":\"W/\\\"datetime'2016-03-22T22%3A29%3A56.7873353Z'\\\"\",\"properties\":{\"gatewayId\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/wenjunp/providers/microsoft.servermanagement/gateways/wenjunp-vm2\",\"connectionName\":\"wenjunp-vm2\",\"created\":\"2016-03-22T22:27:55.4558324Z\",\"updated\":\"2016-03-22T22:29:56.4362113Z\"}},{\"id\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/pd-rnr-wellknown-nu-rg/providers/microsoft.servermanagement/nodes/52.169.186.225\",\"name\":\"52.169.186.225\",\"type\":\"microsoft.servermanagement/nodes\",\"location\":\"northeurope\",\"etag\":\"W/\\\"datetime'2016-04-13T23%3A08%3A32.4466924Z'\\\"\",\"properties\":{\"gatewayId\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/pd-rnr-wellknown-nu-rg/providers/microsoft.servermanagement/gateways/rnr-gw-nu-01\",\"connectionName\":\"52.169.186.225\",\"created\":\"2016-04-13T23:05:28.3559263Z\",\"updated\":\"2016-04-13T23:08:33.2330347Z\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-original-request-ids': '8da9554f-5865-4611-aeb9-ab18ddaca153, 8da9554f-5865-4611-aeb9-ab18ddaca153',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '8da9554f-5865-4611-aeb9-ab18ddaca153',
  'x-ms-correlation-request-id': '8da9554f-5865-4611-aeb9-ab18ddaca153',
  'x-ms-routing-request-id': 'WESTUS:20160506T165302Z:8da9554f-5865-4611-aeb9-ab18ddaca153',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 06 May 2016 16:53:01 GMT',
  connection: 'close',
  'content-length': '3551' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/providers/Microsoft.ServerManagement/nodes?api-version=2016-07-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/rsmt-rnr-rg/providers/microsoft.servermanagement/nodes/016bddec-e091-44a8-991a-18a2bb1f0d8a\",\"name\":\"016bddec-e091-44a8-991a-18a2bb1f0d8a\",\"type\":\"microsoft.servermanagement/nodes\",\"location\":\"Central US\",\"etag\":\"W/\\\"datetime'2016-04-16T08%3A04%3A51.1811735Z'\\\"\",\"properties\":{\"gatewayId\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/rsmt-rnr-rg/providers/microsoft.servermanagement/gateways/rnr-gw-tp3-01\",\"connectionName\":\"40.122.203.163\",\"created\":\"2016-04-16T08:04:50.8576370Z\",\"updated\":\"2016-04-16T08:04:50.8576370Z\"}},{\"id\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/rsmt-rnr-rg/providers/microsoft.servermanagement/nodes/40.122.203.163\",\"name\":\"40.122.203.163\",\"type\":\"microsoft.servermanagement/nodes\",\"location\":\"centralus\",\"etag\":\"W/\\\"datetime'2016-02-17T21%3A14%3A24.3350161Z'\\\"\",\"properties\":{\"gatewayId\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/rsmt-rnr-rg/providers/microsoft.servermanagement/gateways/rnr-gw-tp3-01\",\"connectionName\":\"40.122.203.163\",\"created\":\"2016-02-08T22:21:18.4963649Z\",\"updated\":\"2016-02-17T21:14:24.2343809Z\"}},{\"id\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/rsmt-rnr-rg/providers/microsoft.servermanagement/nodes/7204179e-ec1a-47ec-9d83-a75a5d5e70ce\",\"name\":\"7204179e-ec1a-47ec-9d83-a75a5d5e70ce\",\"type\":\"microsoft.servermanagement/nodes\",\"location\":\"Central US\",\"etag\":\"W/\\\"datetime'2016-04-17T20%3A51%3A17.3633432Z'\\\"\",\"properties\":{\"gatewayId\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/rsmt-rnr-rg/providers/microsoft.servermanagement/gateways/rnr-gw-tp3-01\",\"connectionName\":\"40.122.203.163\",\"created\":\"2016-04-17T20:51:16.8644292Z\",\"updated\":\"2016-04-17T20:51:16.8644292Z\"}},{\"id\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/rsmt-rnr-rg/providers/microsoft.servermanagement/nodes/saddlebags\",\"name\":\"saddlebags\",\"type\":\"microsoft.servermanagement/nodes\",\"location\":\"centralus\",\"etag\":\"W/\\\"datetime'2016-05-06T16%3A52%3A51.2269365Z'\\\"\",\"properties\":{\"gatewayId\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/rsmt-rnr-rg/providers/microsoft.servermanagement/gateways/mygateway\",\"connectionName\":\"saddlebags\",\"created\":\"2016-05-06T16:52:51.0077632Z\",\"updated\":\"2016-05-06T16:52:51.0077632Z\"}},{\"id\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/wenjunp/providers/microsoft.servermanagement/nodes/wenjunp-vm2\",\"name\":\"wenjunp-vm2\",\"type\":\"microsoft.servermanagement/nodes\",\"location\":\"centralus\",\"etag\":\"W/\\\"datetime'2016-03-22T22%3A29%3A56.7873353Z'\\\"\",\"properties\":{\"gatewayId\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/wenjunp/providers/microsoft.servermanagement/gateways/wenjunp-vm2\",\"connectionName\":\"wenjunp-vm2\",\"created\":\"2016-03-22T22:27:55.4558324Z\",\"updated\":\"2016-03-22T22:29:56.4362113Z\"}},{\"id\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/pd-rnr-wellknown-nu-rg/providers/microsoft.servermanagement/nodes/52.169.186.225\",\"name\":\"52.169.186.225\",\"type\":\"microsoft.servermanagement/nodes\",\"location\":\"northeurope\",\"etag\":\"W/\\\"datetime'2016-04-13T23%3A08%3A32.4466924Z'\\\"\",\"properties\":{\"gatewayId\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/pd-rnr-wellknown-nu-rg/providers/microsoft.servermanagement/gateways/rnr-gw-nu-01\",\"connectionName\":\"52.169.186.225\",\"created\":\"2016-04-13T23:05:28.3559263Z\",\"updated\":\"2016-04-13T23:08:33.2330347Z\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-original-request-ids': '8da9554f-5865-4611-aeb9-ab18ddaca153, 8da9554f-5865-4611-aeb9-ab18ddaca153',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '8da9554f-5865-4611-aeb9-ab18ddaca153',
  'x-ms-correlation-request-id': '8da9554f-5865-4611-aeb9-ab18ddaca153',
  'x-ms-routing-request-id': 'WESTUS:20160506T165302Z:8da9554f-5865-4611-aeb9-ab18ddaca153',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 06 May 2016 16:53:01 GMT',
  connection: 'close',
  'content-length': '3551' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1462557181\",\"not_before\":\"1462553281\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDYyNTUzMjgxLCJuYmYiOjE0NjI1NTMyODEsImV4cCI6MTQ2MjU1NzE4MSwiYXBwaWQiOiJiOWU2ZTA3Yi1jNDNlLTQ3MzEtODVjYS05ODE3ODkyNzI0Y2QiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwib2lkIjoiNGUwNDNmODYtYjMzZC00YzNiLThjNTYtNWM3NTkyOGEzNzBlIiwic3ViIjoiNGUwNDNmODYtYjMzZC00YzNiLThjNTYtNWM3NTkyOGEzNzBlIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidmVyIjoiMS4wIn0.GN2seDw3ngwrg8B58vT-9pz3da7SHVztOpTyWraWoBcUDNDf3L1MSsfORBjtKLMRRTh43tXE6xF_YNu0fqluXyc0_HTXIVP0KZ15Pc3_XMdqThieM5fALhKMll8WkyqcTNcmyizWZMsHboVpYcRq-MTtCpTD724FmsqMyh3jkEnuTD5In2RMWwMVDK9p6oZwoNge2yun1V_8EFd3ZWiFZZmp_cgIrEQ4fkfXvkIdPnD5EP6cyXKg9xf8FkvuKpYKYVxG70toLn_qOdxRWb2eyTVAHXikgtvPp1iHDAlBVBuw7K9OELcBtqEbi4f_iYl450oCzBS6IT0nPqMPVtswCw\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '87db63f3-0c8c-4afc-a0a7-05eac876ceaa',
  'client-request-id': 'f39d01bc-a640-4b61-bef9-b8ea00ccc9fb',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_583',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'esctx=AAABAAAAiL9Kn2Z27UubvWFPbm0gLW5c4igmiZtdHh4xu4o1AaXkqtEGxmwW4CBrQqH_rYt9PYf4z-CWAsCw3cNzlZOgIVZE_6yI-6vy_56Qr3d5JG_uYKN_7gn1fGv2xlX4SEn_EN6KmBsiIu4QIxJtvQuWX3b9Zu8iuY9jQc22hQxhRSF_vD3tW7dX6P4iN3g9aMuiIAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 06 May 2016 16:53:01 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1462557181\",\"not_before\":\"1462553281\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDYyNTUzMjgxLCJuYmYiOjE0NjI1NTMyODEsImV4cCI6MTQ2MjU1NzE4MSwiYXBwaWQiOiJiOWU2ZTA3Yi1jNDNlLTQ3MzEtODVjYS05ODE3ODkyNzI0Y2QiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwib2lkIjoiNGUwNDNmODYtYjMzZC00YzNiLThjNTYtNWM3NTkyOGEzNzBlIiwic3ViIjoiNGUwNDNmODYtYjMzZC00YzNiLThjNTYtNWM3NTkyOGEzNzBlIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidmVyIjoiMS4wIn0.GN2seDw3ngwrg8B58vT-9pz3da7SHVztOpTyWraWoBcUDNDf3L1MSsfORBjtKLMRRTh43tXE6xF_YNu0fqluXyc0_HTXIVP0KZ15Pc3_XMdqThieM5fALhKMll8WkyqcTNcmyizWZMsHboVpYcRq-MTtCpTD724FmsqMyh3jkEnuTD5In2RMWwMVDK9p6oZwoNge2yun1V_8EFd3ZWiFZZmp_cgIrEQ4fkfXvkIdPnD5EP6cyXKg9xf8FkvuKpYKYVxG70toLn_qOdxRWb2eyTVAHXikgtvPp1iHDAlBVBuw7K9OELcBtqEbi4f_iYl450oCzBS6IT0nPqMPVtswCw\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '87db63f3-0c8c-4afc-a0a7-05eac876ceaa',
  'client-request-id': 'f39d01bc-a640-4b61-bef9-b8ea00ccc9fb',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_583',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'esctx=AAABAAAAiL9Kn2Z27UubvWFPbm0gLW5c4igmiZtdHh4xu4o1AaXkqtEGxmwW4CBrQqH_rYt9PYf4z-CWAsCw3cNzlZOgIVZE_6yI-6vy_56Qr3d5JG_uYKN_7gn1fGv2xlX4SEn_EN6KmBsiIu4QIxJtvQuWX3b9Zu8iuY9jQc22hQxhRSF_vD3tW7dX6P4iN3g9aMuiIAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 06 May 2016 16:53:01 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourceGroups/rsmt-rnr-rg/providers/Microsoft.ServerManagement/nodes/saddlebags?api-version=2016-07-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': 'bdbbaf68-7063-4b4d-8bef-8a4e8fa4373c',
  'x-managementservice-fileversion': '1.0.1187.3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'bdbbaf68-7063-4b4d-8bef-8a4e8fa4373c',
  'x-ms-routing-request-id': 'WESTUS:20160506T165303Z:bdbbaf68-7063-4b4d-8bef-8a4e8fa4373c',
  date: 'Fri, 06 May 2016 16:53:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourceGroups/rsmt-rnr-rg/providers/Microsoft.ServerManagement/nodes/saddlebags?api-version=2016-07-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': 'bdbbaf68-7063-4b4d-8bef-8a4e8fa4373c',
  'x-managementservice-fileversion': '1.0.1187.3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'bdbbaf68-7063-4b4d-8bef-8a4e8fa4373c',
  'x-ms-routing-request-id': 'WESTUS:20160506T165303Z:bdbbaf68-7063-4b4d-8bef-8a4e8fa4373c',
  date: 'Fri, 06 May 2016 16:53:02 GMT',
  connection: 'close' });
 return result; }]];
 exports.mockVariables = function() { return {"smtnodename":"saddlebags"}; };