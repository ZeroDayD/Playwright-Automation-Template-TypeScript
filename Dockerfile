FROM mcr.microsoft.com/playwright:v1.42.1-jammy

WORKDIR /app

COPY package.json package-lock.json* tsconfig.json ./
COPY .eslintrc.json ./
COPY tests ./tests
COPY utils ./utils
COPY playwright.config.ts ./

RUN npm ci

ENTRYPOINT ["npx", "playwright", "test"]
