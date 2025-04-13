export const state: any = 'prod'

export const END_POINT = state == 'dev' ? 'http://localhost:3001/api' : 'https://api.outwittrader.com/api' //reverse proxy to 3001
export const END_SLIP = state == 'dev' ? 'http://localhost:3001/slip' : 'https://api.outwittrader.com/slip'