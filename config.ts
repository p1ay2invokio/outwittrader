export const state: any = 'dev'

export const END_POINT = state == 'dev' ? 'http://localhost:3001/api' : 'https://apis.outwittrader.com/api' //reverse proxy to 3001
export const END_SLIP = state == 'dev' ? 'http://localhost:3001/slip' : 'https://apis.outwittrader.com/slip'