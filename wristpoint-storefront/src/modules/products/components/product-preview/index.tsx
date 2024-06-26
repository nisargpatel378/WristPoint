import { Text } from "@medusajs/ui"

import { ProductPreviewType } from "types/global"

import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import Image from "next/image"

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  return (
    <>
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div data-testid="product-wrapper">
        <div className="relative aspect-square w-full">
          <Image
            src={productPreview?.thumbnail || ""}
            alt="image"
            // size="full"
            fill
            className="hover:border-2 object-cover rounded-md"
            // isFeatured={isFeatured}
          />
        </div>

        <div className="txt-compact-medium mt-4 justify-between">
          <Text
            className="text-ui-fg-subtle text-base text-black"
            data-testid="product-title"
          >
            {productPreview.title}
          </Text>
          <div className="flex items-center gap-x-2 text-gray-300">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
   
    </>
  )
}

{/*
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div data-testid="product-wrapper">
        {/* <div className="relative aspect-square w-full">
          <Image
            src={productPreview?.thumbnail || ""}
            alt="image"
            // size="full"
            fill
            className="hover:border-2 object-cover"
            // isFeatured={isFeatured}
          />
        </div>

        <div className=" txt-compact-medium mt-4 justify-between">
          <Text
            className="text-ui-fg-subtle text-base text-black"
            data-testid="product-title"
          >
            {productPreview.title}
          </Text>
          <div className="flex items-center gap-x-2 text-gray-300">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
     */}