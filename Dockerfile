# 使用 Node.js 映像
FROM node:18

# 設置工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製應用代碼
COPY . .

# 暴露應用端口
EXPOSE 3000

# 啟動應用
CMD ["npm", "start"]
