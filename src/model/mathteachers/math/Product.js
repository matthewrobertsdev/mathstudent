class Product{
    static getProductOfList(array){
        var product=1; for (var i=0; i<array.length; i++){ product*=array[i]; }
        return product;
    }
}
export default Product;