
json.products product_quantaty.each do |product, quantaty|
  json.extract! product, :id, :category_id, :title, :brief_description, :full_description, :price, :discount, :on_sale, :created_at
  json.quantaty quantaty
end
