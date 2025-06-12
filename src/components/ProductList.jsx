import ProductItem from './ProductItem'

function ProductList({ products}) {
    return (
        <div className="products-container">
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList;