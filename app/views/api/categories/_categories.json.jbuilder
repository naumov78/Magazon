json.categories categories do |category|
  json.extract! category, :id, :title, :description
end
