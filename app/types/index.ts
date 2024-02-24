export interface MenuItems {
    href: string;
    icon: React.JSX.Element;
    label: string;
};

export interface NewUserRequest {
    name: string;
    email: string;
    password: string;
}


export interface SignInCredentials {    
    email: string;
    password: string;
}

export interface EmailVerifyRequest {
    token: string;
    userId: string;
}

export interface ForgetPasswordRequest {   
    email: string;   
}

export interface UpdatePasswordRequest {
    password: string;
    token: string;
    userId: string;
}

export interface SessionUserProfile {
        id: string,
        name: string,
        email: string,
        role: "USER" | "ADMIN"
        emailVerified: boolean
 }

 export interface Product {
    userId: string;   
    title: string;
    description: string;
    bulletPoints?: string[];
    mrp: number;
    salePrice: number;
    category: string;
    quantity: number;
    thumbnail?: {url: string; id: string; publicId: string};
    images?: {url: string; id: string; publicId: string}[];

 }

 export interface NewProductInfo {
    userId: string | undefined;   
    title: string;
    description: string;
    bulletPoints: BulletPoints[];
    mrp: number;
    salePrice: number;
    category: string;
    quantity: number;
    thumbnail?: File;
    imagesFiles: File[]
 }

 export interface info {
    title: string;
    description: string;
    bulletPoints: BulletPoints[];
    mrp: number;
    salePrice: number;
    category: string;
    quantity: number;
    images: image[];
    thumbnail: image;
    userId: string | undefined;
  }

  export interface image {
    url: string;    
    publicId: string
  }

  export interface ProductResponse {
    id:string;
    userId: string;
    title: string ;
    description: string;
    bulletPoints?: { id: string; content: string; productId: string }[];
    mrp: number;
    salePrice: number;
    price:{
      base: number;
      discounted: number;
    }
    category: string;
    quantity: number;
    thumbnail?: { url: string; id: string; publicId: string }[] | undefined;
    images?: { url: string; id: string; publicId: string }[];
  }

  export interface ProductToUpdate {
    id:string;
    userId: string;
    title: string ;
    description: string;
    bulletPoints?: { id: string; content: string; productId: string }[];
    mrp: number;
    salePrice: number;
    price:{
      base: number;
      discounted: number;
    }
    category: string;
    quantity: number;
    thumbnail?: { url: string; id: string }[] | undefined;
    images?: { url: string; id: string }[];
  }

  export interface BulletPoints{
    id:string, 
    content:string,
    productId:string
  }

  export interface ProductDataToUpdate{
    title:string,
    description:string,
    bulletPoints:BulletPoints[],
    category: string,
    quantity: number,
    price: {
      base: number,
      discounted: number,
    },
    thumbnailId: string,
    thumbnail?: image,
    images?:image[]
  }

  export interface NewCartRequest {   
    productId: string;
    quantity: number   
  }

  export interface NewFeaturedProduct {
    featuredProductId: string;
    productId: string;
    banner: {
      url: string;
      id: string;
      publicId: string;
    };
    link: string;
    linkTitle: string;
    title: string;
  }
