import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
    <div
      className="content-container flex flex-col lg:flex-row gap-12 py-12 lg:w-1/2 mx-auto"
      data-testid="product-container"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:w-full">
        <div className="lg:w-1/2 flex flex-col">
          <div className="flex-1 overflow-hidden">
            <ImageGallery 
              images={product?.images || []} 
              className="grid grid-cols-2 gap-4" 
            />
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col">
          <div className="flex-1 flex flex-col gap-8">
            <ProductInfo product={product} />
            <ProductTabs product={product} />
            <ProductOnboardingCta />
            <Suspense
              fallback={
                <ProductActions
                  disabled={true}
                  product={product}
                  region={region}
                />
              }
            >
              <ProductActionsWrapper id={product.id} region={region} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
    <div
      className="content-container my-16 lg:my-32"
      data-testid="related-products-container"
    >
      <Suspense fallback={<SkeletonRelatedProducts />}>
        <RelatedProducts product={product} countryCode={countryCode} />
      </Suspense>
    </div>
  </>
    
  )
}

export default ProductTemplate
