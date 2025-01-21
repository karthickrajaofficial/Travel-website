import React from 'react';
import { packageDescriptions } from '../data/packages';

const ProductsDescription = ({ category }) => {
  // Get the description for the selected category
  const description = packageDescriptions[category];

  return (
    <div className="prose max-w-none mb-12">
      <div className="pb-8 border-b border-gray-200">
        <p className="text-lg leading-relaxed text-gray-700">
          {description || 'Description not available.'}
        </p>
      </div>
    </div>
  );
};

export default ProductsDescription;