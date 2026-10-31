Rails.application.configure do
  config.enable_reloading = false
  config.eager_load = true
  config.logger = ActiveSupport::TaggedLogging.logger(STDOUT)
  config.active_record.dump_schema_after_migration = false
end
