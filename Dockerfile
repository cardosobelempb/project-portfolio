# FROM postgres:16

# RUN usermod -u 1000 postgres
FROM node:20-alpine as builder

ENV NODE_ENV build


USER node

# WORKDIR /home/node/core
# COPY core/*.json ./
# RUN npm ci

WORKDIR /home/node/backend

COPY package*.json ./

WORKDIR /home/node
COPY --chown=node:node . .

WORKDIR /home/node/backend
RUN npm ci \
    && npx prisma generate \
    && npm run build \
    && npm prune --omit=dev

# ---

# FROM node:20-alpine

# ENV NODE_ENV production

# USER node
# WORKDIR /home/node

# COPY --from=builder --chown=node:node /home/node/package*.json ./
# COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
# COPY --from=builder --chown=node:node /home/node/dist/ ./dist/
# COPY --from=builder --chown=node:node /home/node/prisma/ ./prisma/
# docker container run --name portfolio -p 3000:3000 project-portfolio

CMD ["node", "dist/backend/src/main.js"]