defmodule MyAppWeb.PageController do
  use Phoenix.Controller, formats: [:html]

  def index(conn, _params), do: text(conn, "Hello from Phoenix")
end
