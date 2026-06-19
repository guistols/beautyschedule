FROM maven:3.9.8-eclipse-temurin-21-jammy AS builder

WORKDIR /app

COPY . .

RUN mvn clean package -DskipTest
FROM eclipse-temurin:21-jre-jammy

WORKDIR /app
COPY --from=builder /app/target/beautyschedule-0.0.1-SNAPSHOT .

EXPOSE 8080

ENTRYPOINT ["java", "-jar","beautyschedule-0.0.1-SNAPSHOT"]

