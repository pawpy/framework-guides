import Config

config :my_app, MyAppWeb.Endpoint, http: [ip: {127, 0, 0, 1}, port: 4000], secret_key_base: String.duplicate("dev", 22), server: true
