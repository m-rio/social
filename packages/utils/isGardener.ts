import { IS_MAINNET } from 'data/constants';
import { mainnetGardeners, testnetGardeners } from 'data/gardeners';

/**
 *
 * @param id Profile id
 * @returns is gardener or not
 */
const isGardener = (id: string): boolean =>
  IS_MAINNET ? mainnetGardeners.includes(id) : testnetGardeners.includes(id);

export default isGardener;
