defmodule MyApp.Application do
  use Application

  @impl true
  def start(_type, _args) do
    Supervisor.start_link([MyAppWeb.Endpoint], strategy: :one_for_one, name: MyApp.Supervisor)
  end
end
