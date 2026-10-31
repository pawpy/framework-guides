defmodule MyAppWeb.Router do
  use Phoenix.Router

  get "/", MyAppWeb.PageController, :index
end
