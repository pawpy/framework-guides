class HelloController < ApplicationController
  def index
    render plain: "Hello from Rails, #{ActiveRecord::Base.connection.select_value("select count(*) from schema_migrations")} migrations run"
  end
end
