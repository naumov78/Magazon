json.extract! category, :id, :title, :description

json.products category.products do |product|
  json.extract! product, :id, :title, :category_id, :brief_description, :full_description, :price, :discount, :on_sale, :created_at
end
