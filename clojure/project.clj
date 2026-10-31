(defproject my-app "0.1.0"
  :dependencies [[org.clojure/clojure "1.12.1"]
                 [ring/ring-core "1.14.2"]
                 [ring/ring-jetty-adapter "1.14.2"]]
  :main my-app.core
  :aot [my-app.core]
  :uberjar-name "my-app.jar")
