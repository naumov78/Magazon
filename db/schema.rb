# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170403165911) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "street",     null: false
    t.string   "street2"
    t.string   "city",       null: false
    t.integer  "state_id",   null: false
    t.integer  "zip",        null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cart_products", force: :cascade do |t|
    t.integer  "cart_id",                null: false
    t.integer  "product_id",             null: false
    t.integer  "quantity",   default: 1
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "carts", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string   "title",       null: false
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "categories", ["title"], name: "index_categories_on_title", using: :btree

  create_table "frequently_bought_products", force: :cascade do |t|
    t.integer  "frequently_bought_together_id", null: false
    t.integer  "product_id",                    null: false
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

  create_table "frequently_bought_togethers", force: :cascade do |t|
    t.integer  "product_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "networks", force: :cascade do |t|
    t.string   "network",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "order_products", force: :cascade do |t|
    t.integer  "order_id",   null: false
    t.integer  "product_id", null: false
    t.integer  "quantity",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "order_statuses", force: :cascade do |t|
    t.string   "status",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orders", force: :cascade do |t|
    t.integer  "user_id",                    null: false
    t.integer  "status_id",                  null: false
    t.decimal  "total_amount", default: 0.0
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  create_table "payments", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "network_id",  null: false
    t.string   "cardholder",  null: false
    t.string   "card_number", null: false
    t.date     "expires",     null: false
    t.string   "cvv",         null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "product_categories", force: :cascade do |t|
    t.integer  "category_id", null: false
    t.integer  "product_id",  null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "product_pictures", force: :cascade do |t|
    t.integer  "product_id",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "products", force: :cascade do |t|
    t.string   "title",                                         null: false
    t.integer  "category_id",                                   null: false
    t.text     "brief_description"
    t.text     "full_description"
    t.decimal  "price",                                         null: false
    t.decimal  "discount",                      default: 0.0
    t.boolean  "on_sale"
    t.boolean  "storefront",                    default: false
    t.integer  "frequently_bought_together_id"
    t.datetime "created_at",                                    null: false
    t.datetime "updated_at",                                    null: false
  end

  add_index "products", ["title"], name: "index_products_on_title", using: :btree

  create_table "states", force: :cascade do |t|
    t.string   "state",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string  "first_name",                      null: false
    t.string  "last_name",                       null: false
    t.string  "email",                           null: false
    t.string  "password_digest",                 null: false
    t.string  "session_token",                   null: false
    t.boolean "admin",           default: false
    t.integer "cart_id"
    t.integer "payment_id"
    t.integer "address_id"
    t.integer "watched_list_id"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

  create_table "watched_lists", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "watched_products_lists", force: :cascade do |t|
    t.integer  "watched_list_id", null: false
    t.integer  "product_id",      null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
