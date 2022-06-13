FROM openjdk:17-oracle
VOLUME /tmp
EXPOSE 8091
ADD ./target/ekblog-server-0.0.1-SNAPSHOT.jar ekblog-server.jar
ENTRYPOINT ["java", "-jar", "ekblog-server.jar"]
