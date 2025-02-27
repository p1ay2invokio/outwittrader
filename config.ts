const state: any = 'prod'

export const END_POINT = state == 'dev' ? 'http://localhost:3001/api' : 'https://outapi.outwittrader.com/api' //reverse proxy to 3001
export const END_SLIP = state == 'dev' ? 'http://localhost:3001/slip' : 'https://outapi.outwittrader.com/slip'