json.storefront storefront do |product|
  json.extract! product, :id, :category_id, :title, :brief_description, :price, :discount, :on_sale
end
