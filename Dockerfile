FROM node:16-alpine3.14
COPY . ./app
WORKDIR /app
RUN npm install 
RUN npm run build
EXPOSE 5000 8082
ENV MONGODB_URI mongodb+srv://cryptoDB:sayan@cluster0.dve8ojg.mongodb.net/cryptoDB
ENV PORT 5000
ENV GRPCPORT 8082
RUN chown -R 1000:1000 /app/build
USER 1000
CMD node build/index.js 
# FROM envoyproxy/envoy:v1.23-latest
# COPY ./envoy.yaml /etc/envoy/envoy.yaml
# EXPOSE 8080
# CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml