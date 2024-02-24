import { startDb } from "@/app/lib/db";
import { NewFeaturedProduct } from "@/app/types";
import prisma from "@/prisma";

export const creatFeaturedProduct = async (info: NewFeaturedProduct) => {
    try {
        await startDb();       
        const defaultValues = {
            banner : info.banner,
            link: info.link,
            linkTitle : info.linkTitle,
            title : info.title
        }
       const featuredProduct = await prisma.featuredProduct.create({
            data:{
                ...defaultValues,
                product: {
                    connect: { id: info.productId }
                }
            }
        })

        const featuredProductId = featuredProduct.id
        
        await prisma.bannerFeaturedProduct.create({
            data: {              
              publicId: info.featuredProductId.publicId,
              url: info.featuredProductId.url,
              featuredProduct: { connect: { id: featuredProductId } },
            },
          });

        
    } catch (error) {
        
    }
  
};