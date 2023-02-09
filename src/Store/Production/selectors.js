import { createSelector } from "reselect";

export const product = (state) => state.product;

export const productSixProductPromotionDataSelector = createSelector(
  product,
  (data) => data?.productSixProductPromotionData || null
);
export const productSixNewProductDataSelector = createSelector(
  product,
  (data) => data?.productSixNewProductData || null
);
export const productSixSellingProductDataSelector = createSelector(
  product,
  (data) => data?.productSixSellingProductData || null
);
export const productListProductContentDataSelector = createSelector(
  product,
  (data) => data?.productListProductContentData || null
);
