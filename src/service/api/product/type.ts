export interface IProduct {
    _id: string;
    productName: string;
    productImage: string;
}

export interface IProductDetail {
    _id: null;
    productEntryId: string;
    productId: string;
    productName: string;
    productDescription: string;
    productRate: number;
    productImage: string;
    productSize: IProductSize[];
    sizeWiseColorPriceArray: ISizeWiseColorPriceArray[];
}

export interface ISizeWiseColorPriceArray {
    _id: string;
    size: string;
    colorAndSizeArray: IColorAndSizeArray[];
}

export interface IColorAndSizeArray {
    color: string;
    colorId: string;
    price: number;
}

export interface IProductSize {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export interface ICoupon {
    _id: string;
    code: string;
    discountPercentage: number;
    maxUsage: null | number;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export interface ICouponReq {
    productEntryId: string | undefined;
    couponId: string;
    email: string;
}

export interface ICouponApplied {
    message: string;
    isCoupon_applied: boolean;
    discountedPrice: number;
    amount_payable: number;
    original_price: number;
}

export interface IUser {
    email: string;
}

export interface IOrderReq {
    productEntryId: string;
    couponId: string;
    email: string;
    orderValue: number;
}

export interface IOrderConfirmed {
    _id: string;
}