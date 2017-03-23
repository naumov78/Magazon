
json.extract! category
json.products category.products do |product|
  json.extract! product, :id, :title, :brief_description, :full_description, :price, :discount, :on_sale, :created_at
end
