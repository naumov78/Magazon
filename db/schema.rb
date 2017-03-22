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

ActiveRecord::Schema.define(version: 20170322183433) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cart_products", force: :cascade do |t|
    t.integer  "cart_id",    null: false
    t.integer  "product_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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

  create_table "product_categories", force: :cascade do |t|
    t.integer  "category_id", null: false
    t.integer  "product_id",  null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "products", force: :cascade do |t|
    t.string   "title",                           null: false
    t.text     "brief_description"
    t.text     "full_description"
    t.decimal  "price",                           null: false
    t.decimal  "discount",          default: 0.0
    t.boolean  "on_sale"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
  end

  add_index "products", ["title"], name: "index_products_on_title", using: :btree

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
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
