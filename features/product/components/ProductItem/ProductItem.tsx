import React from 'react';

import map from 'lodash/map';
import Image from 'next/image';
import { LazyLoad } from 'react-lazy-loader-component';

import { UserAgent } from '@/libs/types/userAgent.type';

import { Product } from '../../types';

interface ProductItemProps {
  userAgent: UserAgent;
  products?: Product[];
}

export const ProductItem = ({ products }: ProductItemProps) => {
  return (
    <div className="container mx-auto mt-7 mb-8 md:mt-[50px] md:mb-16">
      <div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        {map(products, item => {
          return (
            <div key={`${item.id}-${item.title}`}>
              <LazyLoad className="relative h-[173px] w-full md:h-[197px]" rootMargin="100px" threshold={0.95}>
                <Image className="rounded-lg" src={item.thumbnail} alt={item.title} fill priority unoptimized />
              </LazyLoad>
              <div className="mt-4">
                <h4 className="text-base font-bold leading-6 text-gray-800 line-clamp-2 md:text-lg">{item.title}</h4>

                <div className="mt-2 text-sm leading-[22px] text-gray-700 line-clamp-2 md:text-base ">Price: ${item.price}</div>
                <div className="mt-2 text-sm leading-[22px] text-gray-700 line-clamp-2 md:text-base">{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
