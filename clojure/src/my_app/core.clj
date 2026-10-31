(ns my-app.core
  (:require [ring.adapter.jetty :refer [run-jetty]])
  (:gen-class))

(defn handler [_request]
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body "Hello from Clojure"})

(defn -main []
  (run-jetty handler {:host "0.0.0.0"
                      :port (Integer/parseInt (or (System/getenv "PORT") "8080"))
                      :join? true}))
