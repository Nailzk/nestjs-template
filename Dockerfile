FROM nestjs/cli:latest AS builder
WORKDIR /app
COPY . .
RUN apk add git && \
        npm i && \
        npm run build && \
        ls -la

FROM node:12.16.3-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./
COPY /package.json ./
RUN apk add git && \
        npm i -g typescript && \
        tsc -v && \
        npm i && \
        #npm i --production && \
         ls -la
CMD ["node", "main.js"]
