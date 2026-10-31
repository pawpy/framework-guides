FROM sbtscala/scala-sbt:eclipse-temurin-alpine-21_1.x AS build
WORKDIR /app
COPY . .
RUN sbt stage

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/target/universal/stage /app
CMD ["sh", "-c", "exec bin/my-app -Dhttp.port=${PORT:-8080} -Dhttp.address=0.0.0.0 -Dpidfile.path=/dev/null"]
