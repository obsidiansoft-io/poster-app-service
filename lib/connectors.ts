import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { DEFAULT_IPFS_GATEWAY } from './constants';
const IpfsHttpClient = require('ipfs-http-client');

const POLLING_INTERVAL = 12000
const RPC_URLS: { [chainId: number]: string } = {
  1: 'https://mainnet.infura.io/v3/84842078b09946638c03157f83405213',
  4: 'https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213',
}
export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1], 4: RPC_URLS[4] },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
})

export const createClient = () => {
  return new IpfsHttpClient(
    new URL('https://ipfs.infura.io:5001/api/v0'),
  );
}

export const createURLForCID = (cid) => {
  return `${DEFAULT_IPFS_GATEWAY}${cid}`
}
