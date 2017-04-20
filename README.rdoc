# Magazon


Magazon is a web application inspired by Amazon built on Ruby on Rails with React/Redux.
Magazon allows users to get great shopping experience.
Users can look through the products in different categories. Put them into the shopping cart.
Update shipping address and payment method and finally place an order.
Users can also change the product amount in the cart, check out the list of placed orders and get detailed info on each order.
Magazon also has User's Recently Watched Items as well as
Item's Frequently Bought Together Items lists.


[Live App](https://magazon.herokuapp.com)


#### Features

+ add product to shopping cart - creates new product in the shopping cart or increment product quantity by one if product is already persist in the shopping cart

```ruby
def create
  cart_product = current_user.cart.cart_products.where("product_id = ?", cart_products_params[:product_id]).first
  if cart_product.nil?
    cart_product = current_user.cart.cart_products.new(cart_products_params)
      if cart_product.save
        @cart = CartProduct.where(cart_id: current_user.cart_id).order(created_at: :desc)
        render 'api/carts/show'
      else
        render cart_product.errors.full_messages, status: 422
      end
  else
    cart_product.quantity += cart_products_params[:quantity].to_i
      if cart_product.save
        @cart = CartProduct.where(cart_id: current_user.cart_id).order(created_at: :desc)
        render 'api/carts/show'
      else
        render cart_product.errors.full_messages, status: 422
      end
  end
end
```

+ show product - if user logged in adds current product to the watched list if current product differs from last watched product.

```ruby
def show
  @product = Product.find(params[:id].to_i)
  if current_user
  last_watched_product = current_user.watched_products.order(created_at: :desc).limit(1).first
    if last_watched_product
      unless last_watched_product.product_id == @product.id
        watched_product = current_user.watched_list.watched_products.new(product_id: @product.id)
        watched_product.save
      end
    else
      watched_product = current_user.watched_list.watched_products.new(product_id: @product.id)
      watched_product.save
    end
  end
end
```

+ change product main image and highlight corresponding image in alternative images section

```javascript
changeMainPicture(e, idx) {
  e.preventDefault();
  this.setState({ main_picture: this.state.product.product_pictures[idx] })
}

getSmallImageClass(pic) {
  if (pic.image_url === this.state.main_picture.image_url) {
    return "small-main-image";
  } else {
    return "alt-product-image";
  }
}

render() {
  if (this.state.product.title) {
  return (
    <div className="product-page">
      <div className="product-container">
        <div>
          <ul className="alt-images">
            {this.state.product.product_pictures.map((picture, i) => {
              return (
                <li key={i} className={this.getSmallImageClass(picture)}>
                  <a onMouseOver={(e) => this.changeMainPicture(e, i)}>
                    <img src={picture.image_url} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
...
```



##### Index page
![index](/docs/screenshots/index.png)

##### Category view
![category](/docs/screenshots/category.png)

##### Product page
![product](/docs/screenshots/product.png)

##### Shopping cart
![cart](/docs/screenshots/cart.png)

##### Placed Orders
![orders](/docs/screenshots/orders.png)
