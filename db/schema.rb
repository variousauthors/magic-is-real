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

ActiveRecord::Schema.define(version: 20140911143408) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "details", force: true do |t|
    t.string   "key"
    t.integer  "stimulus_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "links", force: true do |t|
    t.string   "key"
    t.integer  "stimulus_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "passage_id"
  end

  create_table "passages", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "link_id"
  end

  create_table "senses", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "stimuli", force: true do |t|
    t.text     "content"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "key"
    t.integer  "passage_id"
    t.integer  "sense_id"
    t.integer  "stimulus_id"
    t.integer  "detail_id"
  end

end
