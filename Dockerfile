FROM node:18.13.0 AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the Prisma schema
COPY prisma/schema.prisma ./prisma/

# Generate Prisma client
RUN npx prisma generate

COPY . .

RUN npx prisma generate
RUN npm run build

FROM node:18.13.0

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["npm", "run", "start:prod" ]