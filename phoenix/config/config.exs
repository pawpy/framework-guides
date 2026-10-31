import Config

config :my_app, MyAppWeb.Endpoint,
  adapter: Bandit.PhoenixAdapter,
  url: [host: "localhost"]

config :phoenix, :json_library, Jason

import_config "#{config_env()}.exs"
