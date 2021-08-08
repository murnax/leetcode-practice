FROM openjdk:18-slim-buster

WORKDIR /usr/src/app

ARG SBT_VERSION=1.4.9


# RUN \
#   mkdir /working/ && \
#   cd /working/ && \
#   curl -L -o sbt-$SBT_VERSION.deb https://repo.scala-sbt.org/scalasbt/debian/sbt-$SBT_VERSION.deb && \
#   dpkg -i sbt-$SBT_VERSION.deb && \
#   rm sbt-$SBT_VERSION.deb && \
#   apt-get update && \
#   apt-get install sbt && \
#   cd && \
#   rm -r /working/ && \
#   sbt sbtVersion
RUN apt update && apt upgrade && apt install curl -y

ARG SBT_VERSION=1.4.9

# Install sbt
RUN \
  mkdir /working/ && \
  cd /working/ && \
  curl -L -o sbt-$SBT_VERSION.deb https://repo.scala-sbt.org/scalasbt/debian/sbt-$SBT_VERSION.deb && \
  dpkg -i sbt-$SBT_VERSION.deb && \
  rm sbt-$SBT_VERSION.deb && \
  apt-get update && \
  apt-get install sbt && \
  cd && \
  rm -r /working/ && \
  sbt sbtVersion

COPY . .
