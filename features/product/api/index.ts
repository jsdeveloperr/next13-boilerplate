import makeApi from '@/libs/core/configureAxios';
import Env from '@/libs/helpers/Env';

import { ProductResponse } from '../types';

const api = makeApi(`${Env.API_SERVER_URL}`);

const PRODUCT_URL = 'products';

export const getProducts = (): Promise<ProductResponse> => api.get(PRODUCT_URL);
